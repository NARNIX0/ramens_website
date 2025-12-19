import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';

export interface SliderItem {
  id: string | number;
  beforeImage: string;
  afterImage: string;
  label: string;
  caption: string;
}

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

// Optimized Slider Component using framer-motion for smooth, synchronized animations
function ComparisonSlider({ item }: { item: SliderItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Track whether the user has interacted recently (to pause auto animation)
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const idleTimeoutRef = useRef<number | null>(null);
  const animationControlsRef = useRef<ReturnType<typeof animate> | null>(null);
  
  // Use framer-motion's useMotionValue for synchronized, lag-free updates
  const sliderPosition = useMotionValue(50);
  
  // Transform slider position to clip-path value
  const clipPath = useTransform(sliderPosition, (value) => `inset(0 ${100 - value}% 0 0)`);
  
  // Transform slider position to handle position
  const handleLeft = useTransform(sliderPosition, (value) => `${value}%`);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      sliderPosition.set(percentage);
    }
  }, [sliderPosition]);

  // Helpers for managing auto animation vs user interaction
  const stopAutoAnimation = useCallback(() => {
    if (animationControlsRef.current) {
      animationControlsRef.current.stop();
      animationControlsRef.current = null;
    }
  }, []);

  const scheduleAutoAnimationRestart = useCallback(() => {
    if (idleTimeoutRef.current !== null) {
      clearTimeout(idleTimeoutRef.current);
    }
    // Restart auto animation after 10 seconds of no interaction
    idleTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  }, []);

  const beginInteraction = useCallback(() => {
    setIsUserInteracting(true);
    if (idleTimeoutRef.current !== null) {
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = null;
    }
    stopAutoAnimation();
  }, [stopAutoAnimation]);

  // Auto animate the slider left/right when the user is not interacting
  useEffect(() => {
    if (!isUserInteracting) {
      stopAutoAnimation();
      animationControlsRef.current = animate(sliderPosition, [30, 70, 30], {
        duration: 16,
        ease: 'easeInOut',
        repeat: Infinity,
      });
    } else {
      stopAutoAnimation();
    }

    return () => {
      stopAutoAnimation();
    };
  }, [isUserInteracting, sliderPosition, stopAutoAnimation]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    beginInteraction();
    isDragging.current = true;
    updateSliderPosition(e.clientX);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scheduleAutoAnimationRestart();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      updateSliderPosition(e.clientX);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    beginInteraction();
    isDragging.current = true;
    updateSliderPosition(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    scheduleAutoAnimationRestart();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  // Add global mouse up listener to handle drag end outside container
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
      scheduleAutoAnimationRestart();
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Before Image (Background) - shown as-is */}
      <img
        src={item.beforeImage}
        alt={`Before: ${item.label}`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ willChange: 'transform' }}
        draggable={false}
      />

      {/* Before Label */}
      <div className="absolute top-4 right-4 bg-dark/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold z-10 pointer-events-none">
        Before
      </div>

      {/* After Image (Foreground, clipped) - using motion.div for synchronized clip-path */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath,
          willChange: 'clip-path',
        }}
      >
        <img
          src={item.afterImage}
          alt={`After: ${item.label}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* After Label */}
        <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold z-10 pointer-events-none">
          After
        </div>
      </motion.div>

      {/* Divider Line - using motion.div for synchronized position */}
      <motion.div
        className="absolute inset-y-0 w-0.5 bg-accent z-20 pointer-events-none"
        style={{
          left: handleLeft,
          willChange: 'left',
          boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)',
        }}
      >
        {/* Drag Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing border-2 border-white">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </motion.div>

      {/* Caption Overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/90 via-dark/60 to-transparent p-6 z-20 pointer-events-none">
        <h3 className="font-display font-bold text-white text-xl mb-1">{item.label}</h3>
        <p className="font-body text-sm text-white/80">{item.caption}</p>
      </div>

      {/* Hint text for first-time users */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-dark/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          ← Drag to compare →
        </span>
      </div>
    </div>
  );
}

function Thumbnails({ index, setIndex, items }: { index: number; setIndex: (i: number) => void; items: SliderItem[] }) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto py-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex gap-0.5 h-20" style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
                opacity: 1,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
                opacity: 0.6,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`relative shrink-0 h-full overflow-hidden rounded-lg bg-gray-200 border-2 transition-colors ${
              i === index ? 'border-accent' : 'border-transparent hover:border-accent/50'
            }`}
          >
            <img
              src={item.afterImage}
              alt={item.label}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel({ items }: { items: SliderItem[] }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigate to previous/next with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIndex((i) => Math.max(0, i - 1));
      } else if (e.key === 'ArrowRight') {
        setIndex((i) => Math.min(items.length - 1, i + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col gap-4">
        {/* Main Carousel - No drag on carousel, use buttons/thumbnails/keyboard only */}
        <div
          className="relative overflow-hidden rounded-3xl bg-gray-100 border-2 border-accent aspect-[4/3] sm:aspect-video group"
          ref={containerRef}
        >
          {/* Slides Container */}
          <div className="relative w-full h-full">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 0.95,
                  zIndex: i === index ? 1 : 0,
                }}
                transition={{
                  opacity: { duration: 0.3, ease: 'easeInOut' },
                  scale: { duration: 0.3, ease: 'easeInOut' },
                }}
                style={{ pointerEvents: i === index ? 'auto' : 'none' }}
              >
                <ComparisonSlider item={item} />
              </motion.div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-30 bg-white/90 text-dark hover:bg-accent hover:text-white
              ${index === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-30 bg-white/90 text-dark hover:bg-accent hover:text-white
              ${index === items.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 right-1/2 translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold z-20">
            {index + 1} / {items.length}
          </div>
        </div>

        {/* Thumbnails */}
        <Thumbnails index={index} setIndex={setIndex} items={items} />
      </div>
    </div>
  );
}
