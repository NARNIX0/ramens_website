# WebP Conversion Guide

This guide will help you convert all images to WebP format for better performance.

## Quick Conversion Options

### Option 1: Online Tools (Easiest)
1. **Squoosh.app** (Recommended - Google's tool)
   - Go to https://squoosh.app
   - Upload your image
   - Select "WebP" format
   - Adjust quality (80-90 is usually good)
   - Download the WebP version
   - Save it in the same location with `.webp` extension

2. **CloudConvert**
   - Go to https://cloudconvert.com/jpg-to-webp
   - Upload images (supports batch)
   - Convert and download

### Option 2: Command Line (Batch Conversion)
If you have ImageMagick or cwebp installed:

**Using ImageMagick:**
```bash
# Convert single file
magick input.jpg output.webp

# Batch convert all JPEGs in a folder
for file in *.jpeg; do magick "$file" "${file%.jpeg}.webp"; done
```

**Using cwebp (Google's WebP encoder):**
```bash
# Install: npm install -g webp
# Then convert:
cwebp -q 80 input.jpg -o output.webp
```

### Option 3: Photoshop/GIMP
- Open image
- Export/Save As → Choose WebP format
- Save with `.webp` extension

## Images That Need WebP Conversion

### Root Public Folder
- [ ] `/ramen.jpeg` → `/ramen.webp` (Hero banner - already referenced in code)
- [ ] `/selfie-whilst-kayaking.jpeg` → `/selfie-whilst-kayaking.webp`
- [ ] `/eye-icon.png` → `/eye-icon.webp`

### Services Folder (`/public/services/`)
- [ ] `hdr photography example.jpeg` → `hdr photography example.webp`
- [ ] `floor plan example.png` → `floor plan example.webp`
- [ ] `drone photo .png` → `drone photo .webp`
- [ ] `360 tour gif.gif` → `360 tour gif.webp` (Note: GIFs can be converted to WebP)
- [ ] `video tour gif.gif` → `video tour gif.webp`
- [ ] `marketing property landing page example.gif` → `marketing property landing page example.webp`

### Before-After Folder (`/public/before-after/`)
- [ ] `before and after image 1A.png` → `before and after image 1A.webp`
- [ ] `before and after image 1B.png` → `before and after image 1B.webp`
- [ ] `before and after image 2A.png` → `before and after image 2A.webp`
- [ ] `before and after image 2B.jpeg` → `before and after image 2B.webp`
- [ ] `before and after image 3A.jpeg` → `before and after image 3A.webp`
- [ ] `before and after image 3B.jpeg` → `before and after image 3B.webp`
- [ ] `before and after image 4A.jpeg` → `before and after image 4A.webp`
- [ ] `before and after image 4B.jpeg` → `before and after image 4B.webp`
- [ ] `before and after image 5A.png` → `before and after image 5A.webp`
- [ ] `before and after image 5B.png` → `before and after image 5B.webp`
- [ ] `before and after image 6A.jpeg` → `before and after image 6A.webp`
- [ ] `before and after image 6B.jpeg` → `before and after image 6B.webp`
- [ ] `before and after image 7A.jpeg` → `before and after image 7A.webp`
- [ ] `before and after image 7B.jpeg` → `before and after image 7B.webp`
- [ ] `before and after image 8A.jpeg` → `before and after image 8A.webp`
- [ ] `before and after image 8B.png` → `before and after image 8B.webp`
- [ ] `before and after image 9A.jpeg` → `before and after image 9A.webp`
- [ ] `before and after image 9B.png` → `before and after image 9B.webp`

### Properties Folder (`/public/properties/`)

#### ash-house (23 images)
- [ ] `preston property 4 hero photo.jpeg` → `preston property 4 hero photo.webp`
- [ ] All 22 numbered photos: `preston property 4 photo number (X).jpeg` → `.webp`

#### hoyles-lane (34 images)
- [ ] `Preston property 3 hero photo .jpeg` → `Preston property 3 hero photo .webp`
- [ ] All 33 numbered photos: `Preston property 3 photo number (X).jpeg` → `.webp`

#### lightfoot-lane (25 images)
- [ ] `Preston property 1 photo hero photo.jpeg` → `Preston property 1 photo hero photo.webp`
- [ ] All 24 numbered photos: `Preston property 1 photo number (X).jpeg` → `.webp`

#### pendle-view-barn (15 images)
- [ ] `Preston property 2 hero photo.jpeg` → `Preston property 2 hero photo.webp`
- [ ] All 14 numbered photos: `Preston property 2 photo number (X).jpeg` → `.webp`

## Total Count
- **Approximately 100+ images** need WebP conversion

## After Conversion

Once you've converted all images to WebP format and placed them in the same directories with `.webp` extensions:

1. **The OptimizedImage component will automatically use WebP** - it's already set up to look for `.webp` versions
2. **I can update the Hero component** to properly reference WebP
3. **All images will have automatic fallbacks** to original formats

## Next Steps

1. Convert all images using one of the methods above
2. Save WebP files in the same locations as originals (same folder, same name, `.webp` extension)
3. Let me know when done, and I'll verify the code is properly set up

## Quality Recommendations

- **Photos (JPEG)**: Quality 80-85 for good balance
- **Graphics/Icons (PNG)**: Quality 90-100 to preserve transparency
- **GIFs**: Convert to WebP animated format (quality 80-90)

