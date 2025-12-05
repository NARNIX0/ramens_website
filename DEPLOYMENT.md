# Deployment Guide

This site can be deployed to any static hosting service. Here are the most popular options:

## Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite - just click Deploy!

## Netlify

1. Build your site: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repo for automatic deployments

## GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```
4. Run: `npm run deploy`

## Custom Server

1. Build: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your server to serve `index.html` for all routes

## Environment Variables

If you add environment variables later (e.g., API keys for contact forms):

1. Create `.env` file:
   ```
   VITE_API_KEY=your_key_here
   ```
2. Access in code: `import.meta.env.VITE_API_KEY`
3. Add `.env` to `.gitignore`
4. Set environment variables in your hosting platform

## Domain Setup

After deployment:

1. Get your deployment URL
2. Point your custom domain to it via DNS settings
3. Most hosting platforms provide automatic HTTPS/SSL certificates

## Performance Tips

- All images are loaded via CDN (Unsplash) - consider hosting images yourself
- Enable gzip/brotli compression on your server
- Consider implementing lazy loading for images below the fold
- Use webp format for images for better compression

