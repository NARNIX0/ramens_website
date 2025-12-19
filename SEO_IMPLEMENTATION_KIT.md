# SEO IMPLEMENTATION KIT FOR CURSOR
## Complete Backend SEO Optimization Package (No Aesthetics/Copy Changes)

**Context:** Real estate photography services agency. Target: Estate agents seeking professional property photography and videography packages.

---

## PART 1: META TAGS & HEAD OPTIMIZATION

### 1.1 Global Meta Tags (Add to ALL pages)

```html
<!-- CHARACTER ENCODING & MOBILE -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<!-- SEO CORE META TAGS -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="language" content="English">
<meta name="revisit-after" content="7 days">
<meta name="author" content="Ramen Studios">

<!-- THEME & COLOR -->
<meta name="theme-color" content="#138899">
<meta name="color-scheme" content="light dark">

<!-- SOCIAL & SHARING (Open Graph) -->
<meta property="og:type" content="website">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="Ramen Studios - Real Estate Photography">

<!-- TWITTER CARD -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@ramenstudios">

<!-- SECURITY & PRIVACY -->
<meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; font-src 'self' https:;">
```

### 1.2 Page-Specific Meta Tags (Customize per page)

**HOME PAGE:**
```html
<title>Professional Real Estate Photography & Videography Services | Ramen Studios</title>
<meta name="description" content="Award-winning property photography, drone videography, and virtual staging for UK estate agents. HDR photos, 360 tours, and twilight photography. Get more qualified leads.">
<meta property="og:title" content="Professional Real Estate Photography & Videography Services | Ramen Studios">
<meta property="og:description" content="Property photography, drone videography, virtual staging, and 360 tours. Increase property visibility and attract qualified buyers.">
<meta property="og:url" content="https://ramenstudios.co.uk/">
<meta property="og:image" content="https://ramenstudios.co.uk/assets/og-home.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:title" content="Professional Real Estate Photography & Videography | Ramen Studios">
<meta name="twitter:description" content="Property photography, drone videography, and virtual staging for estate agents.">
<meta name="twitter:image" content="https://ramenstudios.co.uk/assets/twitter-home.webp">
```

**SERVICES PAGE:**
```html
<title>Property Photography Services & Packages | Ramen Studios</title>
<meta name="description" content="Essential, Professional, and Premium photography packages for 1-5+ bedroom properties. HDR photography, drone videography, floor plans, virtual staging.">
<meta property="og:title" content="Photography & Videography Packages for Estate Agents | Ramen Studios">
<meta property="og:description" content="Three tiered packages: Essential (£579-£999), Professional (£999-£1,499), Premium (£1,599-£2,399).">
<meta property="og:url" content="https://ramenstudios.co.uk/services">
<meta property="og:image" content="https://ramenstudios.co.uk/assets/og-services.webp">
```

**PORTFOLIO PAGE:**
```html
<title>Real Estate Photography Portfolio | Property Examples | Ramen Studios</title>
<meta name="description" content="View our portfolio of professional property photography, drone videography, and virtual staging projects. See how we transform property listings.">
<meta property="og:title" content="Real Estate Photography Portfolio | Ramen Studios">
<meta property="og:description" content="Explore our work: 360 virtual tours, twilight photography, drone videography, and virtual staging.">
<meta property="og:url" content="https://ramenstudios.co.uk/portfolio">
<meta property="og:image" content="https://ramenstudios.co.uk/assets/og-portfolio.webp">
```

**CONTACT PAGE:**
```html
<title>Contact Real Estate Photographer | Ramen Studios</title>
<meta name="description" content="Get in touch with Ramen Studios for professional property photography. Quick turnaround, unlimited revisions, and dedicated support for estate agents.">
<meta property="og:title" content="Contact Ramen Studios - Real Estate Photography">
<meta property="og:description" content="Contact us for photography quotes and booking information.">
<meta property="og:url" content="https://ramenstudios.co.uk/contact">
<meta property="og:image" content="https://ramenstudios.co.uk/assets/og-contact.webp">
```

---

## PART 2: STRUCTURED DATA & SCHEMA MARKUP

### 2.1 Organization Schema (Add to HEAD of all pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ramen Studios",
  "url": "https://ramenstudios.co.uk",
  "logo": "https://ramenstudios.co.uk/assets/logo.webp",
  "description": "Professional real estate photography and videography services for estate agents",
  "telephone": "+44",
  "email": "contact@ramenstudios.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressRegion": "England"
  },
  "sameAs": [
    "https://www.instagram.com/ramenstudios",
    "https://www.facebook.com/ramenstudios",
    "https://www.linkedin.com/company/ramenstudios"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": "Real Estate Photography",
  "knowsAbout": [
    "HDR Photography",
    "Drone Videography",
    "Virtual Staging",
    "360 Virtual Tours",
    "Twilight Photography",
    "Floor Plans",
    "Property Marketing"
  ]
}
</script>
```

### 2.2 Service Schema (Add to Services/Packages page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Real Estate Photography Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ramen Studios",
    "url": "https://ramenstudios.co.uk"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Essential Package",
        "description": "HDR Photography, Floor Plans, Video Tours",
        "price": "579",
        "priceCurrency": "GBP",
        "eligibleRegion": "GB",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Professional Package",
        "description": "Essential plus Drone Videography, Virtual Staging, Twilight Photography",
        "price": "999",
        "priceCurrency": "GBP",
        "eligibleRegion": "GB",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Premium Package",
        "description": "Professional plus 360 Virtual Tours, Marketing Suite, Premium Retouching",
        "price": "1599",
        "priceCurrency": "GBP",
        "eligibleRegion": "GB",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
}
</script>
```

### 2.3 FAQ Schema (Add to Home or FAQ page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to get photographs back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 24-hour turnaround on all photography services. Most clients receive edited images within 24 hours of the photoshoot."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the Professional package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HDR Photography, Floor Plans, Video Tours, Drone Videography, Virtual Staging (3 rooms), and Twilight Photography."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer virtual staging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Professional package includes virtual staging for 3 rooms. The Premium package includes 360 virtual tours and advanced staging."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book multiple properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Many estate agents book multiple properties in one month. We can arrange a schedule that works for you."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 360 virtual tours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 360 virtual tours are included in the Premium package. They're also available as add-ons to other packages."
      }
    }
  ]
}
</script>
```

### 2.4 Breadcrumb Schema (Add to all non-home pages)

```html
<!-- For /services page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ramenstudios.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://ramenstudios.co.uk/services"
    }
  ]
}
</script>
```

---

## PART 3: SEMANTIC HTML OPTIMIZATION

### 3.1 Heading Structure (For all pages)
- Use exactly ONE `<h1>` per page (should match or relate to page title)
- Use `<h2>` for major sections
- Use `<h3>` for subsections
- **Do NOT skip heading levels** (e.g., don't go h1 → h3)

Example structure:
```
<h1>Professional Real Estate Photography Services</h1>
  <h2>Our Three Packages</h2>
    <h3>Essential Package</h3>
    <h3>Professional Package</h3>
    <h3>Premium Package</h3>
  <h2>Why Choose Ramen Studios</h2>
    <h3>24-Hour Turnaround</h3>
    <h3>Unlimited Revisions</h3>
```

### 3.2 Semantic HTML Tags
- Use `<article>` for standalone content (portfolio pieces, service cards)
- Use `<section>` for thematic groupings
- Use `<nav>` for navigation menus
- Use `<header>` for top section
- Use `<footer>` for bottom section
- Use `<aside>` for sidebars/related content
- Use `<main>` for primary content area

### 3.3 Image Optimization
- Add descriptive `alt` text to ALL images (describe what's in the photo for SEO)
- Use WebP format with JPEG fallback (via `<picture>` tag)
- Add `width` and `height` attributes to prevent layout shift
- Use descriptive filenames: `professional-staging-lounge.webp` (not `img123.jpg`)

Example:
```html
<picture>
  <source srcset="property-hallway.webp" type="image/webp">
  <img src="property-hallway.jpg" alt="Professional HDR photograph of modern hallway with natural lighting and staged furniture" width="800" height="600">
</picture>
```

---

## PART 4: TECHNICAL SEO ENHANCEMENTS

### 4.1 Canonical Tags (Add to all pages)

```html
<!-- Add to HEAD of every page to prevent duplicate content issues -->
<link rel="canonical" href="https://ramenstudios.co.uk/">
<link rel="canonical" href="https://ramenstudios.co.uk/services">
<link rel="canonical" href="https://ramenstudios.co.uk/portfolio">
<link rel="canonical" href="https://ramenstudios.co.uk/contact">
```

### 4.2 Robots Meta Tag (Add to HEAD)

```html
<!-- Standard for indexing all pages -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

<!-- Alternative for pages you DON'T want indexed (privacy policy, internal-only, etc.) -->
<meta name="robots" content="noindex, follow">
```

### 4.3 Hreflang Tags (If targeting multiple countries/languages - add to HEAD)

```html
<!-- If you expand to Ireland or other regions -->
<link rel="alternate" hreflang="en-GB" href="https://ramenstudios.co.uk/">
<link rel="alternate" hreflang="en-IE" href="https://ramenstudios.ie/">
<link rel="alternate" hreflang="x-default" href="https://ramenstudios.co.uk/">
```

### 4.4 Open Graph & Twitter Images

Ensure these images exist in `/assets/`:
- `og-home.webp` (1200x630px)
- `og-services.webp` (1200x630px)
- `og-portfolio.webp` (1200x630px)
- `og-contact.webp` (1200x630px)
- `twitter-home.webp` (1200x630px)

All should be WebP format, under 200KB.

---

## PART 5: LOCAL SEO & LOCATION OPTIMIZATION

### 5.1 Add Location Modifiers (No copy changes - metadata only)

**Recommendations:**
- Identify your primary service areas (London, Manchester, Birmingham, etc.)
- Add location tags to image metadata:

```html
<!-- Example image alt text with location modifier -->
<img src="property-london.webp" alt="Professional HDR property photography of luxury home in London" width="800" height="600">
```

### 5.2 Geo-JSON Markup (Optional - if you want to target specific regions)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GeoShape",
  "box": "51.0,-0.5 51.5,0.5"
}
</script>
```

---

## PART 6: PERFORMANCE & CRAWLABILITY

### 6.1 Sitemap & Robots.txt

**robots.txt** (place in root folder):
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://ramenstudios.co.uk/sitemap.xml
```

**sitemap.xml** (place in root folder or generate via tools like XML-Sitemaps):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ramenstudios.co.uk/</loc>
    <lastmod>2025-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ramenstudios.co.uk/services</loc>
    <lastmod>2025-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ramenstudios.co.uk/portfolio</loc>
    <lastmod>2025-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://ramenstudios.co.uk/contact</loc>
    <lastmod>2025-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 6.2 Link Rel Attributes

```html
<!-- Internal links (no special attribute needed, default is follow) -->
<a href="/services">Our Services</a>

<!-- External links to trusted sources -->
<a href="https://example.com" rel="noopener noreferrer">External Site</a>

<!-- Links you don't want to pass authority through -->
<a href="https://user-generated-content.com" rel="nofollow">User Review</a>
```

---

## PART 7: KEYWORDS BY PAGE (Pre-researched for Real Estate Photography)

### Home Page Keywords:
- real estate photography services UK
- property photography
- estate agent photography
- professional property photography
- drone property videography
- virtual staging services
- 360 virtual tours property

### Services Page Keywords:
- photography packages
- professional photography services
- HDR photography
- drone videography services
- virtual staging
- floor plan photography
- twilight photography

### Portfolio Page Keywords:
- property photography examples
- photography portfolio
- real estate photography gallery
- professional photo examples
- before/after virtual staging

### Contact Page Keywords:
- book property photographer
- photography quote
- contact real estate photographer
- photography booking

**Usage:** Naturally incorporate 1-2 keywords per page in:
- `<title>` tag (most important)
- `<meta description>` (second most important)
- First 100 words of `<h1>` and opening paragraph
- Subheadings (`<h2>`, `<h3>`)

---

## PART 8: IMPLEMENTATION CHECKLIST FOR CURSOR

**Copy and paste this when giving to Cursor:**

"Implement complete backend SEO optimization. No aesthetic or copy changes. Only add/modify:

✅ All meta tags from PART 1 (customize per page with provided titles/descriptions)
✅ All schema markup from PART 2 (JSON-LD scripts in HEAD)
✅ Semantic HTML structure from PART 3 (heading hierarchy, alt text, WebP images)
✅ Technical SEO from PART 4 (canonical, robots, hreflang tags)
✅ Local SEO optimization from PART 5
✅ robots.txt and sitemap.xml in root folder
✅ Ensure all images have descriptive alt text
✅ Verify heading structure is proper H1 → H2 → H3
✅ Test with Google Rich Results Test: https://search.google.com/test/rich-results
✅ Validate all schema markup: https://schema.org/docs/

Do NOT change:
❌ Copy/content text
❌ Visual design/aesthetics
❌ Page layout
❌ Color scheme
❌ Button/form functionality"

---

## PART 9: TESTING & VALIDATION TOOLS

**After Cursor implements, test using:**

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Paste your site URL, check for errors/warnings
   - Verify schema markup is recognized

2. **Google Mobile-Friendly Test:** https://search.google.com/mobile-friendly
   - Ensure mobile responsiveness scores high

3. **Google PageSpeed Insights:** https://pagespeed.web.dev/
   - Check Core Web Vitals
   - Should have green scores on all metrics

4. **Schema Validation:** https://schema.org/docs/
   - Ensure all schema syntax is correct

5. **Meta Tag Preview:** View in browser dev tools (F12 → Elements → HEAD)
   - Verify all meta tags are present

---

## PART 10: EXPECTED RESULTS

**After 30-60 days:**
- Google Search Console should show your site being crawled properly
- Rich snippets may appear for FAQ, LocalBusiness, and Services
- Local searches with your city name should rank higher
- More organic traffic from property photography keywords

**Monitoring:**
- Set up Google Search Console: https://search.google.com/search-console
- Add to Google Analytics 4
- Monitor keyword rankings via Google Search Console

---

**Version:** 1.0 (Dec 2025)
**Status:** Ready for Cursor implementation
**Questions?** All SEO techniques are 2025 best practices, backend-only optimizations.