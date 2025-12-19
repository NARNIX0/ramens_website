# WebP Conversion Instructions

## Step 1: Convert Files (You Do This)
1. Go to the `media-to-convert` folder
2. Convert all images to WebP format using:
   - **Squoosh.app** (https://squoosh.app) - Recommended
   - **CloudConvert.com** - For batch conversion
   - Any other WebP converter

3. **Important**: Keep the same filenames, just change the extension:
   - `ramen.jpeg` → `ramen.webp`
   - `selfie-whilst-kayaking.jpeg` → `selfie-whilst-kayaking.webp`
   - etc.

4. Maintain the same folder structure:
   ```
   media-to-convert/
   ├── before-after/
   │   ├── before and after image 1A.webp
   │   └── ...
   ├── properties/
   │   ├── ash-house/
   │   │   └── ...
   │   └── ...
   └── services/
       └── ...
   ```

## Step 2: Upload WebP Folder
Once all files are converted to WebP:
1. Place the entire `media-to-convert` folder (now with .webp files) in the project root
2. OR rename it to `webp-media` and place it in the root
3. Let me know when it's ready!

## Step 3: I'll Update the Code
Once you've uploaded the WebP folder, I will:
1. Move all WebP files to the correct locations in `public/` folder
2. Update all code references from `.jpeg`/`.png`/`.gif` to `.webp`
3. Ensure fallbacks are in place for older browsers

## Current Status
✅ All 122 original media files copied to `media-to-convert/`
⏳ Waiting for you to convert to WebP format
⏳ Waiting for you to upload the converted WebP folder

## File Count
- Total files: 122
- Before-After: 18 files
- Properties: 95 files  
- Services: 6 files
- Root: 3 files

