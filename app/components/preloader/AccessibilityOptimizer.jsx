'use client';

import { useEffect } from 'react';

/**
 * Component to optimize preloader for accessibility and performance
 */
export const AccessibilityOptimizer = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Add class to disable animations
      document.documentElement.classList.add('prefers-reduced-motion');
      
      // Add CSS to disable animations
      const style = document.createElement('style');
      style.textContent = `
        .prefers-reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .prefers-reduced-motion .preloader-logo {
          animation: none !important;
        }
        
        .prefers-reduced-motion .preloader-spinner {
          animation: none !important;
          border-top-color: var(--color-apple-gray) !important;
        }
      `;
      document.head.appendChild(style);
      
      console.log('♿ Reduced motion preferences detected - animations disabled');
    }

    // Optimize for screen readers
    const preloaderElement = document.querySelector('.preloader-overlay');
    if (preloaderElement) {
      // Add ARIA attributes
      preloaderElement.setAttribute('aria-live', 'polite');
      preloaderElement.setAttribute('aria-atomic', 'true');
      preloaderElement.setAttribute('role', 'status');
      
      // Add screen reader announcement
      const announcement = document.createElement('div');
      announcement.className = 'sr-only';
      announcement.textContent = 'Загружается контент сайта, пожалуйста подождите';
      preloaderElement.appendChild(announcement);
    }

    // Performance optimization: Prevent unnecessary reflows
    const optimizePerformance = () => {
      // Use requestAnimationFrame for smooth animations
      let animationId;
      
      const updateProgress = (progress) => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        
        animationId = requestAnimationFrame(() => {
          const progressBar = document.querySelector('.preloader-progress-bar');
          if (progressBar) {
            progressBar.style.transform = `scaleX(${progress / 100})`;
          }
        });
      };

      // Debounce progress updates
      let progressTimeout;
      const debouncedProgressUpdate = (progress) => {
        clearTimeout(progressTimeout);
        progressTimeout = setTimeout(() => updateProgress(progress), 16); // ~60fps
      };

      return { updateProgress: debouncedProgressUpdate };
    };

    const { updateProgress } = optimizePerformance();

    // Memory leak prevention
    const cleanup = () => {
      // Clear any remaining timeouts
      const highestTimeoutId = setTimeout(() => {}, 0);
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      
      // Clear any remaining intervals
      const highestIntervalId = setInterval(() => {}, 0);
      for (let i = 0; i < highestIntervalId; i++) {
        clearInterval(i);
      }
      
      // Remove event listeners
      window.removeEventListener('beforeunload', cleanup);
      
      console.log('🧹 Preloader cleanup completed');
    };

    // Register cleanup on page unload
    window.addEventListener('beforeunload', cleanup);

    // SEO optimization: Ensure content is indexable
    const optimizeSEO = () => {
      // Add structured data for loading state
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "mainEntity": {
          "@type": "LoadingIndicator",
          "description": "Страница загружается"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Ensure meta tags are not blocked by preloader
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('data-preloader-safe', 'true');
      }
    };

    optimizeSEO();

    // Performance monitoring
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now();
      
      const measurePerformance = () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        
        console.log(`⚡ Preloader performance:
          - Load time: ${loadTime.toFixed(2)}ms
          - Memory usage: ${(performance.memory?.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB
          - DOM nodes: ${document.querySelectorAll('*').length}
        `);
      };

      // Measure performance when preloader hides
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && 
              mutation.attributeName === 'class' &&
              mutation.target.classList.contains('fade-out')) {
            measurePerformance();
            observer.disconnect();
          }
        });
      });

      const preloader = document.querySelector('.preloader-overlay');
      if (preloader) {
        observer.observe(preloader, { attributes: true });
      }
    }

    return cleanup;
  }, []);

  return null; // This component doesn't render anything
};