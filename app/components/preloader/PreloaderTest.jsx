'use client';

import { usePreloader } from './PreloaderContext.jsx';

/**
 * Test component to verify preloader context functionality
 * This component can be temporarily added to test the context
 */
export const PreloaderTest = () => {
  const { 
    isLoading, 
    progress, 
    isVisible, 
    loadingState, 
    hidePreloader 
  } = usePreloader();

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
      <div>Visible: {isVisible ? 'Yes' : 'No'}</div>
      <div>Progress: {progress.toFixed(1)}%</div>
      <div>Fonts: {loadingState.fonts.loaded ? 'Loaded' : 'Loading'}</div>
      <div>Images: {loadingState.images.loaded ? 'Loaded' : 'Loading'}</div>
      <button 
        onClick={hidePreloader}
        style={{
          marginTop: '5px',
          padding: '2px 5px',
          fontSize: '10px'
        }}
      >
        Hide Preloader
      </button>
    </div>
  );
};