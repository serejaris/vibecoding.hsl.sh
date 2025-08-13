'use client';

import { usePreloader } from './PreloaderContext.jsx';

/**
 * Simple test component to verify preloader works without errors
 */
export const SimpleTest = () => {
  const { isLoading, isVisible, progress } = usePreloader();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'white',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <div>Status: {isLoading ? 'Loading' : 'Ready'}</div>
      <div>Visible: {isVisible ? 'Yes' : 'No'}</div>
      <div>Progress: {progress}%</div>
    </div>
  );
};