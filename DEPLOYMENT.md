# Deployment Guide - Full AI Lab

This guide explains how to deploy the Full AI Lab website to GitHub Pages.

## Overview

The website is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a build and deployment.

## Prerequisites

- GitHub repository with appropriate permissions
- Domain configured at www.fullailab.com (or update CNAME file)

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/FullAILab/quantiq-mind`
2. Click on **Settings** tab
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Save the settings

### 2. Configure Custom Domain (DNS)

To use the custom domain `www.fullailab.com`, configure the following DNS records at your domain registrar:

```
Type: CNAME
Name: www
Value: fullailab.github.io
TTL: 3600 (or default)
```

**Note:** DNS propagation can take up to 48 hours, but usually completes within a few hours.

### 3. Deploy

Once the setup is complete:

1. **Automatic Deployment:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically:
     - Install dependencies
     - Build the application
     - Deploy to GitHub Pages
   
2. **Manual Deployment:**
   - Go to the **Actions** tab
   - Select **Deploy to GitHub Pages**
   - Click **Run workflow**
   - Select the `main` branch
   - Click **Run workflow** button

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Monitor the progress of:
   - Build job
   - Deploy job
4. Once complete (green checkmark), your site is live!

## Accessing the Website

- Custom domain: https://www.fullailab.com
- GitHub Pages URL: https://fullailab.github.io/quantiq-mind

## Troubleshooting

### Deployment Failed

1. Check the Actions tab for error messages
2. Common issues:
   - Node modules not installed correctly → Clear cache and retry
   - Build errors → Check npm run build locally
   - Permissions → Ensure Pages deployment is enabled in Settings

### Custom Domain Not Working

1. Verify DNS settings at your domain provider
2. Check that CNAME file exists in `public/` directory
3. Wait for DNS propagation (up to 48 hours)
4. In GitHub Settings > Pages, verify custom domain is configured

### 404 Errors on Routes

The `404.html` file in the `public/` directory handles SPA routing for GitHub Pages. If you're getting 404s:

1. Verify `404.html` exists in `public/` directory
2. Check that it's being copied to `dist/` during build
3. Clear browser cache and try again

## Development

To test locally before deployment:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration
- `public/404.html` - SPA routing handler for GitHub Pages
- `dist/` - Built files (generated, not committed)

## Security

- Workflow uses minimal required permissions
- Deployment uses secure GitHub Actions tokens
- No secrets or API keys are required

## Support

For issues or questions:
- Check GitHub Actions logs for deployment errors
- Review GitHub Pages documentation: https://docs.github.com/pages
- Contact repository maintainers

---

**Last Updated:** October 2025
