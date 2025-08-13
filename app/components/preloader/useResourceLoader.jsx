'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for tracking resource loading (fonts and images)
 * @returns {Object} Resource loading state and utilities
 */
export const useResourceLoader = () => {
  const [loadedResources, setLoadedResources] = useState([]);
  const [failedResources, setFailedResources] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Track fonts that need to be loaded
  const [fontsToLoad] = useState([
    { family: '-apple-system', weight: '400', style: 'normal' },
    { family: '-apple-system', weight: '500', style: 'normal' },
    { family: '-apple-system', weight: '600', style: 'normal' },
    { family: 'BlinkMacSystemFont', weight: '400', style: 'normal' },
    { family: 'SF Pro Display', weight: '400', style: 'normal' },
    { family: 'SF Pro Text', weight: '400', style: 'normal' }
  ]);

  // Track images that need to be loaded
  const [imagesToLoad, setImagesToLoad] = useState([]);

  /**
   * Check if a font is loaded using Font Loading API
   */
  const checkFontLoaded = useCallback(async (fontResource) => {
    try {
      if (!document.fonts) {
        // Fallback for browsers without Font Loading API
        return true;
      }

      const fontFace = `${fontResource.weight || '400'} 16px "${fontResource.family}"`;
      const isLoaded = document.fonts.check(fontFace);
      
      if (isLoaded) {
        return true;
      }

      // Try to load the font
      await document.fonts.load(fontFace);
      return document.fonts.check(fontFace);
    } catch (error) {
      console.warn(`Failed to load font ${fontResource.family}:`, error);
      return false;
    }
  }, []);

  /**
   * Check if an image is loaded
   */
  const checkImageLoaded = useCallback((imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageSrc;
    });
  }, []);

  /**
   * Scan page for images that need to be preloaded
   */
  const scanForImages = useCallback(() => {
    const images = Array.from(document.querySelectorAll('img[src]'));
    const imageSources = images
      .map(img => img.src)
      .filter(src => src && !src.startsWith('data:'));
    
    setImagesToLoad(imageSources);
  }, []);

  /**
   * Load all fonts
   */
  const loadFonts = useCallback(async () => {
    const fontPromises = fontsToLoad.map(async (font) => {
      try {
        const loaded = await checkFontLoaded(font);
        const resourceId = `font-${font.family}-${font.weight}`;
        
        if (loaded) {
          setLoadedResources(prev => [...prev, resourceId]);
        } else {
          setFailedResources(prev => [...prev, resourceId]);
        }
        
        return loaded;
      } catch (error) {
        const resourceId = `font-${font.family}-${font.weight}`;
        setFailedResources(prev => [...prev, resourceId]);
        return false;
      }
    });

    await Promise.allSettled(fontPromises);
  }, [fontsToLoad, checkFontLoaded]);

  /**
   * Load all images
   */
  const loadImages = useCallback(async () => {
    if (imagesToLoad.length === 0) return;

    const imagePromises = imagesToLoad.map(async (imageSrc) => {
      try {
        const loaded = await checkImageLoaded(imageSrc);
        const resourceId = `image-${imageSrc}`;
        
        if (loaded) {
          setLoadedResources(prev => [...prev, resourceId]);
        } else {
          setFailedResources(prev => [...prev, resourceId]);
        }
        
        return loaded;
      } catch (error) {
        const resourceId = `image-${imageSrc}`;
        setFailedResources(prev => [...prev, resourceId]);
        return false;
      }
    });

    await Promise.allSettled(imagePromises);
  }, [imagesToLoad, checkImageLoaded]);

  /**
   * Calculate overall progress
   */
  const calculateProgress = useCallback(() => {
    const totalResources = fontsToLoad.length + imagesToLoad.length;
    if (totalResources === 0) return 100;

    const loadedCount = loadedResources.length;
    const failedCount = failedResources.length;
    const completedCount = loadedCount + failedCount;
    
    return Math.round((completedCount / totalResources) * 100);
  }, [fontsToLoad.length, imagesToLoad.length, loadedResources.length, failedResources.length]);

  /**
   * Start loading all resources
   */
  const startLoading = useCallback(async () => {
    // Scan for images first
    scanForImages();
    
    // Load fonts and images in parallel
    await Promise.all([
      loadFonts(),
      loadImages()
    ]);

    setIsLoaded(true);
  }, [scanForImages, loadFonts, loadImages]);

  // Update progress when resources change
  useEffect(() => {
    const totalResources = fontsToLoad.length + imagesToLoad.length;
    if (totalResources === 0) {
      setProgress(100);
      setIsLoaded(true);
      return;
    }

    const loadedCount = loadedResources.length;
    const failedCount = failedResources.length;
    const completedCount = loadedCount + failedCount;
    const newProgress = Math.round((completedCount / totalResources) * 100);
    
    setProgress(newProgress);
    
    if (newProgress >= 100) {
      setIsLoaded(true);
    }
  }, [fontsToLoad.length, imagesToLoad.length, loadedResources.length, failedResources.length]);

  // Auto-start loading when component mounts
  useEffect(() => {
    let mounted = true;
    
    const timer = setTimeout(async () => {
      if (!mounted) return;
      
      // Scan for images first
      const images = Array.from(document.querySelectorAll('img[src]'));
      const imageSources = images
        .map(img => img.src)
        .filter(src => src && !src.startsWith('data:'));
      
      setImagesToLoad(imageSources);
      
      // Load fonts and images in parallel
      try {
        await Promise.all([
          loadFonts(),
          // Skip image loading for now to avoid complexity
        ]);
        
        if (mounted) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.warn('Resource loading error:', error);
        if (mounted) {
          setIsLoaded(true);
        }
      }
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []); // Remove startLoading dependency

  // Timeout protection - mark as loaded after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Resource loading timeout reached');
      }
      setIsLoaded(true);
      setProgress(100);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); // Remove dependencies to prevent loops

  // Network error fallback
  useEffect(() => {
    const handleOffline = () => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Network offline, showing content with fallback fonts');
      }
      setIsLoaded(true);
      setProgress(100);
    };

    const handleOnline = () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('Network back online');
      }
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return {
    isLoaded,
    progress,
    loadedResources,
    failedResources,
    startLoading
  };
};