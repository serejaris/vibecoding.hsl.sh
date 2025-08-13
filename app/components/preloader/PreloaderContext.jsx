'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// TypeScript-style interfaces as JSDoc comments for better IDE support
/**
 * @typedef {Object} PreloaderContextType
 * @property {boolean} isLoading - Current loading state
 * @property {function(boolean): void} setIsLoading - Function to update loading state
 * @property {number} progress - Loading progress (0-100)
 * @property {function(number): void} setProgress - Function to update progress
 * @property {boolean} isVisible - Whether preloader should be visible
 * @property {function(): void} hidePreloader - Function to hide preloader
 * @property {import('./types.js').LoadingState} loadingState - Detailed loading state
 * @property {function(import('./types.js').LoadingState): void} updateLoadingState - Update detailed loading state
 */

const PreloaderContext = createContext(null);

/**
 * Custom hook to use preloader context
 * @returns {PreloaderContextType}
 */
export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
};

/**
 * PreloaderProvider component for managing global loading state
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const PreloaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Detailed loading state
  const [loadingState, setLoadingState] = useState({
    fonts: {
      loaded: false,
      progress: 0,
      resources: []
    },
    images: {
      loaded: false,
      progress: 0,
      resources: []
    },
    overall: {
      loaded: false,
      progress: 0
    }
  });

  const hidePreloader = useCallback(() => {
    setIsVisible(false);
    setIsLoading(false);
  }, []);

  const updateLoadingState = useCallback((newState) => {
    setLoadingState(prevState => {
      // Prevent unnecessary updates
      if (JSON.stringify(prevState) === JSON.stringify(newState)) {
        return prevState;
      }
      return newState;
    });
    
    // Update overall progress based on detailed state
    const overallProgress = (newState.fonts.progress + newState.images.progress) / 2;
    setProgress(overallProgress);
    
    // Check if everything is loaded - use a ref to avoid dependency issues
    if (newState.overall.loaded) {
      setTimeout(() => {
        setIsVisible(false);
        setIsLoading(false);
      }, 300); // Small delay for smooth transition
    }
  }, []);

  // Auto-hide preloader after 5 seconds as fallback
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Preloader timeout reached, hiding preloader');
      }
      setIsVisible(false);
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); // Remove isLoading dependency to prevent loops

  // Emergency fallback - hide preloader if window load event fires
  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener('load', handleWindowLoad);
    return () => window.removeEventListener('load', handleWindowLoad);
  }, []); // Remove dependencies to prevent loops

  const contextValue = {
    isLoading,
    setIsLoading,
    progress,
    setProgress,
    isVisible,
    hidePreloader,
    loadingState,
    updateLoadingState
  };

  return (
    <PreloaderContext.Provider value={contextValue}>
      {children}
    </PreloaderContext.Provider>
  );
};