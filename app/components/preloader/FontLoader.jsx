'use client';

import { useEffect } from 'react';

/**
 * Component to handle font loading optimization
 */
export const FontLoader = () => {
  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Check if Font Loading API is supported
        if (!document.fonts) {
          // Fallback: add fonts-loaded class after a delay
          setTimeout(() => {
            document.body.classList.add('fonts-loaded');
          }, 100);
          return;
        }

        // Define system fonts to check
        const systemFonts = [
          '400 16px -apple-system',
          '500 16px -apple-system',
          '600 16px -apple-system',
          '400 16px BlinkMacSystemFont',
          '400 16px "SF Pro Display"',
          '400 16px "SF Pro Text"'
        ];

        // Check if fonts are already loaded
        const fontChecks = systemFonts.map(font => {
          try {
            return document.fonts.check(font);
          } catch {
            return true; // Assume loaded if check fails
          }
        });

        const allFontsLoaded = fontChecks.every(loaded => loaded);

        if (allFontsLoaded) {
          document.body.classList.add('fonts-loaded');
          return;
        }

        // Wait for fonts to load
        await document.fonts.ready;
        document.body.classList.add('fonts-loaded');

      } catch (error) {
        console.warn('Font loading error:', error);
        // Fallback: show content anyway
        document.body.classList.add('fonts-loaded');
      }
    };

    // Start font loading
    loadFonts();

    // Fallback timeout
    const timeout = setTimeout(() => {
      document.body.classList.add('fonts-loaded');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything
};