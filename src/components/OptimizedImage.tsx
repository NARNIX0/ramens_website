import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  style?: React.CSSProperties;
}

/**
 * OptimizedImage component with WebP support, lazy loading, and responsive srcset
 * 
 * Features:
 * - WebP format with JPEG/PNG fallback
 * - Lazy loading (unless priority is true)
 * - Responsive srcset for different screen sizes
 * - Automatic image path conversion for WebP versions
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  objectPosition,
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Convert image path to WebP version
  // Assumes WebP versions are in the same directory with .webp extension
  const getWebPSrc = (originalSrc: string): string => {
    // If already a WebP, return as is
    if (originalSrc.endsWith('.webp')) {
      return originalSrc;
    }
    // Replace extension with .webp
    return originalSrc.replace(/\.(jpeg|jpg|png)$/i, '.webp');
  };

  // Generate srcset for responsive images
  // For now, we'll use the same image with different sizes
  // In production, you'd want to generate multiple sizes or use a CDN
  const generateSrcSet = (baseSrc: string): string => {
    // Return single source for now - can be enhanced with actual size variants
    return `${baseSrc} 1x`;
  };

  // Fallback to original if WebP fails to load
  const handleWebPError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If error loading WebP, fall back to original JPEG/PNG
  if (hasError) {
    const combinedStyle = {
      ...(objectPosition ? { objectPosition } : {}),
      ...(style || {}),
    };
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        style={Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined}
      />
    );
  }

  const webpSrc = getWebPSrc(src);
  const webpSrcSet = generateSrcSet(webpSrc);
  const originalSrcSet = generateSrcSet(src);
  const imageType = src.match(/\.png$/i) ? 'image/png' : 'image/jpeg';

  return (
    <picture>
      {/* WebP source with srcset */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes}
        type="image/webp"
        onError={handleWebPError}
      />
      {/* Original format fallback with srcset */}
      <source
        srcSet={originalSrcSet}
        sizes={sizes}
        type={imageType}
      />
      {/* Fallback img element */}
      <img
        src={src}
        srcSet={originalSrcSet}
        sizes={sizes}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleWebPError}
        style={{
          ...(objectPosition ? { objectPosition } : {}),
          ...(style || {}),
        }}
      />
    </picture>
  );
};

export default OptimizedImage;

