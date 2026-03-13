# Deployment Guide for Mavi Collision Center

## Prerequisites
- Domain: mavicollisioncenter.com pointed to your VPS IP (104.128.67.137)
- Docker and Docker Compose installed on server
- Nginx installed and configured
- Certbot installed for SSL certificates

## Deployment Methods

### Method 1: Automated Deployment (Recommended)
Uses GitHub Actions to automatically deploy when you push to the main branch.

**Setup:**
1. Configure GitHub Secrets (see `.github/SETUP_SECRETS.md`)
2. Push to main branch
3. GitHub Actions automatically deploys to production

**Workflow triggers on:**
- Push to main branch
- Pull request to main branch (build only, no deploy)

### Method 2: Manual Deployment
Use the deploy script or manual commands.

## Initial Setup Steps

### 1. Update Nginx Configuration

Add the following to `/etc/nginx/conf.d/apps.conf` on your server:

```nginx
# Mavi Collision Center - HTTP
server {
    listen 80;
    server_name mavicollisioncenter.com www.mavicollisioncenter.com;

    # ACME challenge for Let's Encrypt
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Redirect HTTP to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# Mavi Collision Center - HTTPS
server {
    listen 443 ssl http2;
    server_name mavicollisioncenter.com www.mavicollisioncenter.com;

    ssl_certificate /etc/letsencrypt/live/mavicollisioncenter.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mavicollisioncenter.com/privkey.pem;

    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;

    location / {
        proxy_pass http://localhost:8083;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 100M;
    }
}
```

Test and reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 2. Clone Repository on Server

```bash
# Navigate to your projects directory
cd /root/src

# Clone the repository
git clone git@github.com:kalpeshtawde/mavicc.git
cd mavicc
```

### 3. Deploy with Docker

```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

Or manually:
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### 4. Verify Container is Running

```bash
# Check container status
docker ps | grep mavicc-web

# Check logs
docker logs mavicc-web

# Test locally
curl http://localhost:8083
```

### 5. Setup SSL Certificate

```bash
# Get SSL certificate from Let's Encrypt
sudo certbot --nginx -d mavicollisioncenter.com -d www.mavicollisioncenter.com

# Certbot will automatically update the Nginx config
# Certificates will auto-renew via cron job
```

### 6. Final Verification

```bash
# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Visit your website
# https://mavicollisioncenter.com
```

## Port Allocation

- **8081/8444**: leagueoftennis.com
- **8082**: kidbuzzdaily.com
- **8083**: mavicollisioncenter.com (NEW)

## Updating the Website

To deploy updates:

```bash
cd /root/src/mavicc
git pull origin main
docker-compose -f docker-compose.prod.yml up -d --build
```

Or use the deploy script:
```bash
./deploy.sh
```

## Troubleshooting

### Container won't start
```bash
docker logs mavicc-web
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

### Port already in use
```bash
# Check what's using port 8083
sudo lsof -i :8083
# Kill the process if needed
sudo kill -9 <PID>
```

### SSL certificate issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificates manually
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

### Nginx errors
```bash
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check Nginx access logs
sudo tail -f /var/log/nginx/access.log
```

## File Structure on Server

```
/root/src/mavicc/
├── Dockerfile
├── docker-compose.prod.yml
├── nginx.conf
├── package.json
├── src/
├── public/
└── deploy.sh
```

## Environment Variables

Currently no environment variables are needed. If you need to add them later:

1. Create `.env` file in project root
2. Update `docker-compose.prod.yml` to include:
   ```yaml
   env_file:
     - .env
   ```

## Maintenance

### View logs
```bash
docker logs -f mavicc-web
```

### Restart container
```bash
docker-compose -f docker-compose.prod.yml restart
```

### Stop container
```bash
docker-compose -f docker-compose.prod.yml down
```

### Rebuild from scratch
```bash
docker-compose -f docker-compose.prod.yml down
docker system prune -a
docker-compose -f docker-compose.prod.yml up -d --build
```
