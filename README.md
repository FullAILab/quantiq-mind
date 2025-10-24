# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/32fb3342-6c8f-4c98-96c3-3e3e768e35fc

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/32fb3342-6c8f-4c98-96c3-3e3e768e35fc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Automated Deployment with GitHub Actions

This project is configured for automatic deployment to GitHub Pages. The deployment happens automatically when you push to the `main` branch.

#### Setup Instructions:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select:
     - Source: **GitHub Actions**
   
2. **Configure DNS (if using custom domain):**
   - The CNAME file is already configured for `www.fullailab.com`
   - Add the following DNS records at your domain provider:
     ```
     Type: CNAME
     Name: www
     Value: fullailab.github.io
     ```

3. **Deploy:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Monitor the deployment progress in the "Actions" tab
   - Your site will be live at: https://www.fullailab.com

#### Manual Deployment:

You can also trigger a manual deployment:
- Go to the "Actions" tab in GitHub
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow" button

### Build Locally

To build the project locally:

```sh
npm run build
```

The built files will be in the `dist/` directory.

### Alternative: Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/32fb3342-6c8f-4c98-96c3-3e3e768e35fc) and click on Share -> Publish.
