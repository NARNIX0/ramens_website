# Property Detail Pages

## What's Been Added

Your site now has **individual property detail pages** that show when users click on any portfolio item.

---

## Features

### On the Portfolio Section
- Each property card is now **clickable**
- Hover shows "Click to view more →" text
- Clicking navigates to the property's detail page

### Property Detail Page Shows
1. **Back Button** - Returns to main portfolio
2. **Property Header**
   - Location badge
   - Shoot date
   - Property name
   - Full description

3. **Photo Gallery**
   - First image is large (2:1 aspect ratio)
   - Additional images in grid (4:3 aspect ratio)
   - All images zoom on hover
   - 4-6 photos per property

4. **Contact CTA**
   - Call-to-action at the bottom
   - Button scrolls to contact form on home page

---

## How It Works

### Routing
- **Home Page**: `/` - Shows all sections
- **Property Detail**: `/property/1`, `/property/2`, etc.

### Property Data
Located in: `src/pages/PropertyDetail.tsx`

Each property has:
```typescript
{
  label: 'Property Name',
  location: 'Location',
  date: 'Month Year',
  description: 'Full description...',
  images: [
    'image1.jpg',
    'image2.jpg',
    // ... more images
  ]
}
```

---

## Customizing Property Data

### To Add/Edit Properties

1. Open `src/pages/PropertyDetail.tsx`
2. Find the `propertyData` object (lines 6-85)
3. Add or modify entries:

```typescript
'5': {  // Property ID (must match Portfolio ID)
  label: 'Your Property Name',
  location: 'Area Name',
  date: 'Month Year',
  description: 'Detailed description of the property...',
  images: [
    'url-to-image-1',
    'url-to-image-2',
    'url-to-image-3',
    // Add 3-6 images per property
  ],
}
```

### To Add More Portfolio Items

1. Open `src/components/Portfolio.tsx`
2. Add new item to `portfolioItems` array:

```typescript
{
  id: '5',  // Must match PropertyDetail ID
  image: 'thumbnail-image-url',
  label: 'Property Name',
  location: 'Location',
}
```

---

## Image Recommendations

- **First Image**: 2000x1000px (landscape)
- **Other Images**: 1600x1200px (4:3 ratio)
- Format: JPG or WebP
- Quality: 80-90%

---

## Navigation Flow

```
Home Page (Portfolio Section)
    ↓ (Click property)
Property Detail Page
    ↓ (Back button or Contact CTA)
Home Page
```

---

## Files Modified/Created

**New Files:**
- `src/pages/HomePage.tsx` - Main page wrapper
- `src/pages/PropertyDetail.tsx` - Property detail page
- `package.json` - Added react-router-dom

**Modified Files:**
- `src/App.tsx` - Added routing
- `src/components/Portfolio.tsx` - Made items clickable

---

## Example URLs

- Home: `http://localhost:5173/`
- Modern 4-bed: `http://localhost:5173/property/1`
- Luxury Apartment: `http://localhost:5173/property/2`
- 2-bed Flat: `http://localhost:5173/property/3`
- Victorian Terrace: `http://localhost:5173/property/4`

---

## Future Enhancements

You could add:
- Image lightbox/gallery view
- Property specifications (bedrooms, bathrooms, etc.)
- Download button for images
- Share buttons
- Related properties section
- Testimonials for that specific shoot

