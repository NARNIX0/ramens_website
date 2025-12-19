"use client";

import { cn } from '../../lib/utils';
import { useRef, useEffect, useState } from 'react';

interface VideoCardProps {
  className?: string;
  src: string;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

function VideoCard({
  className,
  src,
  index,
  hoveredIndex,
  onHover,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = hoveredIndex === index;
  const shouldFade = hoveredIndex !== null && !isHovered;

  useEffect(() => {
    // Autoplay when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, that's okay
      });
    }
  }, []);

  return (
    <div
      className={cn(
        "relative flex aspect-[9/16] w-48 md:w-56 lg:w-64 -skew-y-[3deg] select-none rounded-2xl border-2 border-accent/50 bg-dark/70 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-accent",
        shouldFade && "opacity-0",
        className
      )}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover -skew-y-[0deg] scale-110"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

interface StackedVideosProps {
  videos?: { src: string; title: string }[];
}

export default function StackedVideos({ videos }: StackedVideosProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultVideos = [
    { src: "/videos/aivideoslooped-1.mp4", title: "Living Room Staging" },
    { src: "/videos/aivideoslooped-2.mp4", title: "Bedroom Transformation" },
    { src: "/videos/aivideoslooped-3.mp4", title: "Kitchen Enhancement" },
  ];

  const displayVideos = videos || defaultVideos;

  const cardClasses = [
    // Back card (first video)
    "[grid-area:stack] translate-x-10 md:translate-x-16 translate-y-10 hover:-translate-y-1 grayscale-[10%] hover:grayscale-0 z-20",
    // Middle card (second video)
    "[grid-area:stack] hover:-translate-y-10 grayscale-[10%] hover:grayscale-0 z-10",
    // Front card (third video)
    "[grid-area:stack] translate-x-20 md:translate-x-32 translate-y-20 hover:translate-y-10 z-30",
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 relative -ml-16 md:-ml-8" style={{ width: 'fit-content' }}>
        {displayVideos.map((video, index) => (
          <VideoCard 
            key={index} 
            src={video.src} 
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            className={cardClasses[index] || cardClasses[cardClasses.length - 1]}
          />
        ))}
      </div>
    </div>
  );
}
