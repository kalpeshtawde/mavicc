# Email Configuration Setup Guide

This guide explains how to set up the contact form email functionality using Zoho SMTP.

## Overview

The contact form uses a Python Flask backend to send emails via Zoho SMTP. When someone submits the contact form, an email is sent to `info@mavicollisioncenter.com`.

## Setup Instructions

### 1. Create .env File on Server

SSH into your production server and create the `.env` file:

```bash
cd /root/src/mavicc
nano .env
```

Add the following content (replace with your actual password):

```env
# Zoho SMTP Configuration
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=info@mavicollisioncenter.com
SMTP_PASS=your_actual_password_here

# Email Configuration
EMAIL_FROM=info@mavicollisioncenter.com
EMAIL_TO=info@mavicollisioncenter.com

# Server Configuration
PORT=5000
```

Save and exit (Ctrl+X, then Y, then Enter).

### 2. Set Correct Permissions

```bash
chmod 600 .env
```

This ensures only the root user can read the file containing sensitive credentials.

### 3. Deploy the Application

The deployment script will automatically use the `.env` file:

```bash
./deploy.sh
```

Or manually:

```bash
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

### 4. Verify Backend is Running

```bash
# Check if backend container is running
docker ps | grep mavicc-backend

# Check backend logs
docker logs mavicc-backend

# Test the health endpoint
curl http://localhost:5000/api/health
```

You should see: `{"status":"ok","message":"Server is running"}`

## Architecture

```
User fills contact form
        ↓
Frontend (React) → POST /api/contact
        ↓
Nginx (port 8083) → Proxy to backend
        ↓
Python Flask Backend (port 5000)
        ↓
Zoho SMTP (smtp.zoho.com:587)
        ↓
Email sent to info@mavicollisioncenter.com
```

## Docker Services

The application now runs two containers:

1. **mavicc-web** (port 8083)
   - React frontend
   - Nginx web server
   - Proxies /api/* requests to backend

2. **mavicc-backend** (port 5000)
   - Python Flask API
   - Handles email sending via SMTP
   - Uses credentials from .env file

## Testing the Contact Form

1. Visit: https://mavicollisioncenter.com/contact
2. Fill out the form
3. Submit
4. Check the email inbox at info@mavicollisioncenter.com

## Troubleshooting

### Email not sending

Check backend logs:
```bash
docker logs mavicc-backend
```

Common issues:
- **SMTP authentication failed**: Check SMTP_USER and SMTP_PASS in .env
- **Connection timeout**: Verify SMTP_HOST and SMTP_PORT
- **Backend not running**: Check `docker ps | grep mavicc-backend`

### Test SMTP credentials manually

```bash
# Enter the backend container
docker exec -it mavicc-backend /bin/sh

# Test Python SMTP connection
python3 -c "
import smtplib
server = smtplib.SMTP('smtp.zoho.com', 587)
server.starttls()
server.login('info@mavicollisioncenter.com', 'your_password')
print('SMTP connection successful!')
server.quit()
"
```

### Backend API not accessible

```bash
# Check if backend is running
docker ps | grep mavicc-backend

# Check backend logs
docker logs mavicc-backend

# Test health endpoint
curl http://localhost:5000/api/health

# Test from within web container
docker exec -it mavicc-web curl http://mavicc-backend:5000/api/health
```

### Form submission fails in browser

1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit the form
4. Check the /api/contact request
5. Look for error messages in Console tab

## Security Notes

- ✅ `.env` file is in `.gitignore` (never committed to Git)
- ✅ SMTP credentials stored securely in environment variables
- ✅ File permissions set to 600 (only root can read)
- ✅ HTTPS encryption for all web traffic
- ✅ Backend only accessible via Nginx proxy

## Email Template

Emails sent from the contact form include:

**Subject:** New Contact Form Submission from [Name]

**Content:**
- Name
- Email
- Phone (if provided)
- Message
- Timestamp footer

Both HTML and plain text versions are sent for maximum compatibility.

## Updating SMTP Credentials

If you need to change the email password:

1. Update `.env` file on server
2. Restart backend container:
   ```bash
   docker-compose -f docker-compose.prod.yml restart mavicc-backend
   ```

## Support

For issues with:
- **Zoho SMTP**: Check Zoho mail settings and app passwords
- **Backend errors**: Check `docker logs mavicc-backend`
- **Frontend errors**: Check browser console (F12)
