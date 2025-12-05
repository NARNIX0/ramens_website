# Project Overview - Kingston Property Photography

## Page Structure

```
┌─────────────────────────────────────────────────────────┐
│  NAVIGATION (Sticky)                                    │
│  - Floating bar with blur effect on scroll              │
│  - Smooth scroll to sections                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  HERO SECTION                                           │
│  - Full-screen landscape background image               │
│  - Dark gradient overlay                                │
│  - Headline + Subheadline                               │
│  - Two CTA buttons (Book a Shoot / View Portfolio)     │
│  - Service area mention                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TURNAROUND TIME / BENEFITS                             │
│  - 4 feature cards in responsive grid                   │
│  - Icons + descriptions                                 │
│  - 24-48hr delivery, editing, reliability, flexibility  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SERVICES                                               │
│  - 6 service cards in 3-column grid                     │
│  - Each with image placeholder + description            │
│  - Interior/Exterior, Twilight, Drone, Floor Plans,     │
│    Virtual Tours, Video                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CLIENT CAROUSEL                                        │
│  - Infinite horizontal scroll animation                 │
│  - Client logo placeholders                             │
│  - Dark background with social proof                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PORTFOLIO                                              │
│  - 6-image responsive grid                              │
│  - Hover effect reveals property details                │
│  - "View Full Portfolio" CTA button                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ABOUT / CREDENTIALS                                    │
│  - Two-column layout                                    │
│  - Photographer photo placeholder                       │
│  - Bio text + 4 key credentials with checkmarks        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CONTACT FORM                                           │
│  - Two-column layout                                    │
│  - Form: name, email, phone, date, message             │
│  - Contact info cards (email, phone, location)         │
│  - Dark gradient background                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FOOTER                                                 │
│  - 3-column grid: Brand, Service Area, Contact         │
│  - Social media icons                                   │
│  - Copyright                                            │
└─────────────────────────────────────────────────────────┘
```

## Key Features Implemented

✅ **Responsive Design** - Mobile-first approach with Tailwind breakpoints
✅ **Smooth Scrolling** - Native HTML smooth scroll behavior
✅ **Sticky Navigation** - Transforms on scroll with backdrop blur
✅ **Hero Background** - Full-screen image with gradient overlay
✅ **Animated Carousel** - CSS keyframe animation for infinite scroll
✅ **Hover Effects** - Portfolio items, service cards, buttons
✅ **Form Validation** - Contact form with required fields
✅ **Premium Color Palette** - Charcoal, gold, muted blue
✅ **Modern Typography** - Inter font from Google Fonts
✅ **Clean Component Structure** - Modular, reusable components

## Technologies Used

- **React 18** - Component-based UI
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast dev server and build tool
- **Tailwind CSS 3** - Utility-first styling
- **PostCSS** - CSS processing
- **Google Fonts** - Inter typeface

## File Structure

```
ramens_website/
├── index.html              # Entry HTML with Google Fonts
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.cjs     # Tailwind + custom colors/animations
├── postcss.config.cjs      # PostCSS with Tailwind
├── tsconfig.json           # TypeScript config
├── README.md               # Full documentation
├── QUICKSTART.md           # Quick start guide
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app component
    ├── index.css           # Global styles + Tailwind imports
    └── components/
        ├── Navigation.tsx   # Sticky nav bar
        ├── Hero.tsx         # Hero section
        ├── Turnaround.tsx   # Benefits section
        ├── Services.tsx     # Services grid
        ├── ClientCarousel.tsx # Animated client logos
        ├── Portfolio.tsx    # Portfolio gallery
        ├── About.tsx        # About section
        ├── Contact.tsx      # Contact form
        └── Footer.tsx       # Footer
```

## Design Inspiration

The design captures the feel of professional property photography sites:
- Clean, modern layouts with generous white space
- Strong, high-quality imagery
- Premium color palette (dark charcoal, soft whites, gold accents)
- Clear typography hierarchy
- Trust-building elements (credentials, client logos, fast turnaround)

## Customization Points

All major customization points are clearly commented in the code:
- Hero background image (Hero.tsx)
- Client logos (ClientCarousel.tsx)
- Portfolio images (Portfolio.tsx)
- Services offered (Services.tsx)
- Contact details (Contact.tsx, Footer.tsx)
- Brand colors (tailwind.config.cjs)

