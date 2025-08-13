'use client';

import { useEffect, useState } from 'react';
import { usePreloader } from './PreloaderContext.jsx';
import { useResourceLoader } from './useResourceLoader.jsx';

/**
 * Main preloader component with Apple-style animations
 */
export const Preloader = () => {
  const { isVisible, progress, hidePreloader, updateLoadingState } = usePreloader();
  const resourceLoader = useResourceLoader();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Update context with resource loading state
  useEffect(() => {
    const newLoadingState = {
      fonts: {
        loaded: resourceLoader.isLoaded,
        progress: resourceLoader.progress,
        resources: resourceLoader.loadedResources.filter(r => r.startsWith('font-'))
      },
      images: {
        loaded: resourceLoader.isLoaded,
        progress: resourceLoader.progress,
        resources: resourceLoader.loadedResources.filter(r => r.startsWith('image-'))
      },
      overall: {
        loaded: resourceLoader.isLoaded,
        progress: resourceLoader.progress
      }
    };

    updateLoadingState(newLoadingState);
  }, [resourceLoader, updateLoadingState]);

  // Handle preloader hiding with animation
  useEffect(() => {
    if (resourceLoader.isLoaded && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        hidePreloader();
      }, 600); // Match animation duration

      return () => clearTimeout(timer);
    }
  }, [resourceLoader.isLoaded, isVisible, hidePreloader]);

  // Force hide preloader after component mount (emergency fallback)
  useEffect(() => {
    const forceHideTimer = setTimeout(() => {
      if (isVisible) {
        console.log('Force hiding preloader');
        setIsAnimatingOut(true);
        setTimeout(() => {
          hidePreloader();
        }, 600);
      }
    }, 2000); // Hide after 2 seconds max

    return () => clearTimeout(forceHideTimer);
  }, [isVisible, hidePreloader]);

  // Don't render if not visible
  if (!isVisible && !isAnimatingOut) {
    return null;
  }

  return (
    <>
      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.6s ease-out;
        }

        .preloader-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .preloader-logo {
          font-size: 2.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 2s ease-in-out infinite;
          font-family: var(--font-family-apple);
        }

        .preloader-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-apple-light-gray);
          border-top: 3px solid var(--color-apple-blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .preloader-progress {
          width: 200px;
          height: 4px;
          background: var(--color-apple-light-gray);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 1rem;
        }

        .preloader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-apple-blue), #667eea);
          border-radius: 2px;
          transition: width 0.3s ease-out;
          transform-origin: left;
        }

        .preloader-text {
          color: var(--color-apple-gray);
          font-size: 0.875rem;
          font-family: var(--font-family-apple);
          margin-top: 0.5rem;
          opacity: 0.8;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .preloader-logo {
            font-size: 2rem;
          }
          
          .preloader-progress {
            width: 160px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .preloader-logo {
            animation: none;
          }
          
          .preloader-spinner {
            animation: none;
            border-top-color: var(--color-apple-gray);
          }
          
          .preloader-overlay {
            transition: none;
          }
        }
      `}</style>

      <div 
        className={`preloader-overlay ${isAnimatingOut ? 'fade-out' : ''}`}
        role="status"
        aria-label="Загрузка контента"
      >
        <div className="preloader-content">
          <div className="preloader-logo">
            Вайб-кодинг с AI
          </div>
          
          <div className="preloader-spinner" aria-hidden="true"></div>
          
          <div className="preloader-progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
            <div 
              className="preloader-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="preloader-text">
            Загружаем контент... {Math.round(progress)}%
          </div>
        </div>
      </div>
    </>
  );
};