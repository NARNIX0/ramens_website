# Quick Start Guide

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Immediate Customizations

### 1. Hero Background Image (src/components/Hero.tsx)
Replace line 19:
```typescript
backgroundImage: 'url(YOUR_NEW_IMAGE_URL)'
```

### 2. Contact Details
**Email & Phone**: Update in `src/components/Contact.tsx` (lines 139-165) and `src/components/Footer.tsx` (lines 38-52)

### 3. Brand Name
Replace "Kingston Property Photography" in:
- `src/components/Navigation.tsx` (line 31)
- `src/components/Footer.tsx` (line 10)
- `index.html` (line 10)

### 4. Client Logos (src/components/ClientCarousel.tsx)
Update lines 10-21 with your actual clients.

### 5. Portfolio Images (src/components/Portfolio.tsx)
Replace image URLs in the `portfolioItems` array (lines 11-50).

### 6. Colors (tailwind.config.cjs)
Modify the custom colors (lines 9-13):
- `charcoal`: Main dark color
- `gold`: Accent color (buttons, highlights)
- `muted-blue`: Secondary accent

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy to any static hosting service.

