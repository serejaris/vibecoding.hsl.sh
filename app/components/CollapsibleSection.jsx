'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function CollapsibleSection({ 
  id, 
  title, 
  children, 
  isOpen = true, 
  onToggle, 
  className = '' 
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [actualHeight, setActualHeight] = useState('auto');
  const contentRef = useRef(null);

  // Calculate actual content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setActualHeight(`${height}px`);
    }
  }, [children, isOpen]);

  const handleClick = () => {
    if (isAnimating || !onToggle) return;
    
    setIsAnimating(true);
    onToggle(id);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleTouchStart = (e) => {
    // Prevent accidental activations by ensuring single touch
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <section 
      className={`mb-10 scroll-mt-5 ${className}`} 
      id={id}
      role="region"
      aria-labelledby={`section-${id}-header`}
    >
      <div
        className="cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`section-${id}-content`}
        aria-label={`${isOpen ? 'Свернуть' : 'Развернуть'} секцию: ${title}`}
        style={{ 
          WebkitTapHighlightColor: 'rgba(0,0,0,0.1)',
          touchAction: 'manipulation',
          pointerEvents: 'auto',
          userSelect: 'none'
        }}
      >
        <h2 
          id={`section-${id}-header`}
          className="font-serif text-[28px] font-medium mb-5 pt-5 max-md:text-2xl flex items-center justify-between cursor-pointer hover:text-[#0071e3] hover:bg-[#f5f5f7] transition-all duration-200 min-h-[44px] py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
        >
          <span>{title}</span>
          <span 
            className="text-[24px] text-[#ff1493] ml-4 transition-transform duration-200 ease-in-out select-none font-bold"
            style={{ 
              transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
              transformOrigin: 'center',
              willChange: isAnimating ? 'transform' : 'auto'
            }}
            aria-hidden="true"
          >
            →
          </span>
        </h2>
      </div>
      
      <div
        id={`section-${id}-content`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        role="region"
        aria-labelledby={`section-${id}-header`}
        aria-hidden={!isOpen}
        style={{ 
          maxHeight: isOpen ? actualHeight : '0',
          opacity: isOpen ? 1 : 0,
          transform: 'translateZ(0)', // Hardware acceleration for mobile
          willChange: isAnimating ? 'max-height, opacity' : 'auto'
        }}
      >
        <div 
          className="pt-4 pl-4 pr-4 pb-2" 
          style={{ 
            pointerEvents: 'auto', 
            userSelect: 'text',
            WebkitUserSelect: 'text',
            MozUserSelect: 'text',
            msUserSelect: 'text',
            backgroundColor: isOpen ? '#f9f9f9' : 'transparent',
            borderRadius: isOpen ? '0 0 8px 8px' : '0',
            transition: 'background-color 0.2s ease-in-out'
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}