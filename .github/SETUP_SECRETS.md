# GitHub Actions Secrets Setup

To enable automated deployment, you need to configure the following secrets in your GitHub repository.

## Required Secrets

### 1. SSH_HOST
The IP address of your production server.

**Value:** `104.128.67.137`

### 2. SSH_USER
The SSH username for your server.

**Value:** `root`

### 3. SSH_PRIVATE_KEY
Your SSH private key for authentication.

**How to get it:**

```bash
# On your local machine or server, display your private key
cat ~/.ssh/id_rsa

# Or if you use a different key
cat ~/.ssh/id_ed25519
```

Copy the entire output including:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

## How to Add Secrets to GitHub

1. Go to your repository: https://github.com/kalpeshtawde/mavicc
2. Click **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret:
   - Name: `SSH_HOST`, Value: `104.128.67.137`
   - Name: `SSH_USER`, Value: `root`
   - Name: `SSH_PRIVATE_KEY`, Value: (paste your private key)

## Testing the Workflow

After adding the secrets:

1. Make a small change to any file
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Test deployment workflow"
   git push origin main
   ```
3. Go to **Actions** tab in GitHub to watch the deployment
4. The workflow will:
   - Build the project
   - SSH into your server
   - Pull latest code
   - Rebuild and restart the Docker container

## Troubleshooting

### SSH Connection Failed
- Verify `SSH_HOST` is correct: `104.128.67.137`
- Verify `SSH_USER` is correct: `root`
- Ensure the private key matches the public key on the server
- Check that the server allows SSH connections from GitHub's IP ranges

### Build Failed
- Check the Actions logs in GitHub
- Verify all dependencies are in `package.json`
- Test build locally: `npm run build`

### Docker Container Not Starting
- SSH into server and check logs: `docker logs mavicc-web`
- Verify port 8083 is not in use: `sudo lsof -i :8083`
- Check Docker status: `docker ps -a`

## Security Notes

- Never commit secrets to the repository
- The private key should be kept secure
- GitHub encrypts all secrets
- Secrets are only exposed to workflow runs
