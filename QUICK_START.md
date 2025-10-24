# Quick Start Guide - Deploy Full AI Lab Website

## ✅ What's Been Done

This repository is now fully configured for automatic deployment to GitHub Pages!

### Files Added/Modified:

1. **`.github/workflows/deploy.yml`** - Automated deployment workflow
2. **`public/CNAME`** - Custom domain configuration (www.fullailab.com)
3. **`DEPLOYMENT.md`** - Comprehensive deployment guide
4. **`README.md`** - Updated with deployment instructions

## 🚀 How to Deploy (3 Steps)

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/FullAILab/quantiq-mind/settings/pages
2. Under **"Build and deployment"**, select:
   - **Source:** GitHub Actions
3. Click **Save**

### Step 2: Merge This Pull Request

1. Review and approve this PR
2. Merge to `main` branch
3. GitHub Actions will automatically deploy!

### Step 3: Configure DNS (One-Time Setup)

At your domain registrar (where you bought fullailab.com), add:

```
Type: CNAME
Name: www
Value: fullailab.github.io
```

**That's it!** 🎉

## 📍 Your Website Will Be Live At:

- **Custom Domain:** https://www.fullailab.com
- **GitHub Pages:** https://fullailab.github.io/quantiq-mind

## 🔍 Monitor Deployment

Watch the deployment progress:
https://github.com/FullAILab/quantiq-mind/actions

✅ Green checkmark = Successfully deployed!

## 💡 Quick Commands

```bash
# Run locally
npm install
npm run dev

# Build for production
npm run build

# The build output is in dist/ directory
```

## ⚡ Future Deployments

Once set up, deployments are **automatic**:
- Push to `main` branch → Automatic deployment
- No manual steps needed!

## 📚 Need More Details?

See **DEPLOYMENT.md** for the complete guide with troubleshooting tips.

---

**Ready to go live?** Follow the 3 steps above! 🚀
