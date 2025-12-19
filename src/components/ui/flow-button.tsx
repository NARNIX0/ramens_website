import { ArrowRight } from 'lucide-react';

interface FlowButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function FlowButton({ 
  text = "Modern Button",
  onClick,
  href,
  target,
  rel
}: FlowButtonProps) {
  const buttonContent = (
    <button 
      onClick={onClick}
      className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-white/80 bg-white px-5 py-1.5 sm:px-7 sm:py-2.5 text-sm sm:text-base font-bold text-[#0F172A] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] active:scale-[0.95] scale-90"
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-[#0F172A] fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle - Sky blue expanding effect (changed from black to sky blue) */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#38BDF8] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-[#0F172A] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

