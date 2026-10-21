import React from 'react';

interface AcademyLogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'badge' | 'compact';
  className?: string;
  showWordmark?: boolean;
}

export const AcademyLogo: React.FC<AcademyLogoProps> = ({
  variant = 'header',
  className = '',
  showWordmark = true,
}) => {
  // Dimension and container configurations for various placements
  const sizeMap = {
    header: 'h-12 w-auto max-h-12',
    hero: 'h-28 md:h-36 w-auto drop-shadow-md',
    footer: 'h-16 w-auto filter drop-shadow',
    badge: 'h-8 w-auto',
    compact: 'h-10 w-auto',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center bg-white rounded-lg p-1 shadow-xs border border-[#E0E7EF]/80">
        <img
          src="/assets/academy-logo.svg"
          alt="Akbar Study Smart Academy Official Logo"
          className={`${sizeMap[variant]} object-contain`}
          loading="eager"
        />
      </div>

      {showWordmark && variant !== 'hero' && (
        <div className="flex flex-col">
          <span className="font-extrabold text-[#0B2348] text-base md:text-lg leading-tight tracking-tight uppercase">
            Akbar
          </span>
          <span className="text-[10px] md:text-xs font-bold text-[#E88724] tracking-wider uppercase">
            Study Smart Academy
          </span>
          <span className="text-[9px] text-[#637083] font-medium hidden sm:inline-block">
            FBISE Classes 9–12 & Entry Test
          </span>
        </div>
      )}
    </div>
  );
};
