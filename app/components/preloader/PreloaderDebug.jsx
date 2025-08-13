'use client';

import { usePreloader } from './PreloaderContext.jsx';
import { useResourceLoader } from './useResourceLoader.jsx';

/**
 * Debug component to test preloader functionality
 * Only shows in development mode
 */
export const PreloaderDebug = () => {
  const preloader = usePreloader();
  const resourceLoader = useResourceLoader();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 10000,
      minWidth: '250px',
      maxWidth: '300px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#4CAF50' }}>
        🔧 Preloader Debug
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Preloader State:</strong>
      </div>
      <div>• Loading: {preloader.isLoading ? '✅' : '❌'}</div>
      <div>• Visible: {preloader.isVisible ? '✅' : '❌'}</div>
      <div>• Progress: {preloader.progress.toFixed(1)}%</div>
      
      <div style={{ marginTop: '10px', marginBottom: '8px' }}>
        <strong>Resource Loader:</strong>
      </div>
      <div>• Is Loaded: {resourceLoader.isLoaded ? '✅' : '❌'}</div>
      <div>• Progress: {resourceLoader.progress.toFixed(1)}%</div>
      <div>• Loaded: {resourceLoader.loadedResources.length}</div>
      <div>• Failed: {resourceLoader.failedResources.length}</div>
      
      <div style={{ marginTop: '10px', marginBottom: '8px' }}>
        <strong>Loading Details:</strong>
      </div>
      <div>• Fonts: {preloader.loadingState.fonts.loaded ? '✅' : '⏳'}</div>
      <div>• Images: {preloader.loadingState.images.loaded ? '✅' : '⏳'}</div>
      <div>• Overall: {preloader.loadingState.overall.loaded ? '✅' : '⏳'}</div>
      
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={preloader.hidePreloader}
          style={{
            padding: '4px 8px',
            fontSize: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Force Hide
        </button>
      </div>
      
      {resourceLoader.failedResources.length > 0 && (
        <div style={{ marginTop: '10px', color: '#FF5722' }}>
          <strong>Failed Resources:</strong>
          {resourceLoader.failedResources.slice(0, 3).map((resource, i) => (
            <div key={i} style={{ fontSize: '10px', marginTop: '2px' }}>
              • {resource.substring(0, 30)}...
            </div>
          ))}
        </div>
      )}
    </div>
  );
};