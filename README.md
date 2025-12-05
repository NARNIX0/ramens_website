# Kingston Property Photography - Landing Page

A modern, professional single-page marketing site for an estate agent property photographer based in Kingston upon Thames. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Clean, premium design with smooth animations and transitions
- **Sticky Navigation**: Floating nav bar that sticks on scroll with blur effect
- **Hero Section**: Full-screen background with gradient overlay
- **Benefits Section**: Feature cards highlighting key services
- **Services Grid**: Showcasing all photography offerings
- **Animated Carousel**: Moving client logo display
- **Portfolio Gallery**: Image grid with hover effects
- **About Section**: Photographer credentials and experience
- **Contact Form**: Fully functional contact form with validation
- **Smooth Scrolling**: Native smooth scroll to sections

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization Guide

### Hero Background Image

To change the hero background image, edit `src/components/Hero.tsx`:

```typescript
// Look for this section and replace the URL:
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)'
```

### Client Logos

Update the client carousel in `src/components/ClientCarousel.tsx`:

```typescript
const clients = [
  'Your Client 1',
  'Your Client 2',
  // Add more clients...
];
```

### Portfolio Images

Update portfolio images in `src/components/Portfolio.tsx`:

```typescript
const portfolioItems = [
  {
    image: 'YOUR_IMAGE_URL',
    label: 'Property Description',
    type: 'Interior/Exterior/Twilight',
  },
  // Add more items...
];
```

### Services

Modify services in `src/components/Services.tsx` by editing the `services` array.

### Contact Information

Update contact details in:
- `src/components/Contact.tsx` (contact form section)
- `src/components/Footer.tsx` (footer)

### Colors

Customize colors in `tailwind.config.cjs`:

```javascript
colors: {
  'charcoal': '#2C2C2C',
  'gold': '#C6A55C',
  'muted-blue': '#5B7C99',
}
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Turnaround.tsx    # Benefits/features section
│   ├── Services.tsx      # Services grid
│   ├── ClientCarousel.tsx # Animated client logos
│   ├── Portfolio.tsx     # Portfolio gallery
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── App.tsx               # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

