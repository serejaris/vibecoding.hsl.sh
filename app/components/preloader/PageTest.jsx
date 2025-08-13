'use client';

import { useEffect, useState } from 'react';
import { usePreloader } from './PreloaderContext.jsx';

/**
 * Component to test preloader functionality on different pages
 */
export const PageTest = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [testResults, setTestResults] = useState({});
  const preloader = usePreloader();

  useEffect(() => {
    // Detect current page
    const path = window.location.pathname;
    setCurrentPage(path);

    // Run tests
    const runTests = () => {
      const results = {
        page: path,
        timestamp: new Date().toISOString(),
        preloaderVisible: preloader.isVisible,
        preloaderLoading: preloader.isLoading,
        progress: preloader.progress,
        fontsLoaded: preloader.loadingState.fonts.loaded,
        imagesLoaded: preloader.loadingState.images.loaded,
        overallLoaded: preloader.loadingState.overall.loaded,
        userAgent: navigator.userAgent,
        connectionType: navigator.connection?.effectiveType || 'unknown'
      };

      setTestResults(results);

      // Log results in development
      if (process.env.NODE_ENV === 'development') {
        console.log('🧪 Page Test Results:', results);
      }
    };

    // Run tests after a delay to capture state changes
    const timer = setTimeout(runTests, 2000);
    return () => clearTimeout(timer);
  }, [preloader]);

  // Test navigation between pages
  const testNavigation = () => {
    const targetPage = currentPage === '/' ? '/boctok' : '/';
    window.location.href = targetPage;
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      background: 'rgba(255,255,255,0.95)',
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 10000,
      maxWidth: '300px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#2196F3' }}>
        🧪 Page Test: {currentPage}
      </div>
      
      {Object.keys(testResults).length > 0 && (
        <div>
          <div><strong>Results:</strong></div>
          <div>• Preloader Visible: {testResults.preloaderVisible ? '✅' : '❌'}</div>
          <div>• Loading: {testResults.preloaderLoading ? '⏳' : '✅'}</div>
          <div>• Progress: {testResults.progress?.toFixed(1)}%</div>
          <div>• Fonts: {testResults.fontsLoaded ? '✅' : '⏳'}</div>
          <div>• Images: {testResults.imagesLoaded ? '✅' : '⏳'}</div>
          <div>• Overall: {testResults.overallLoaded ? '✅' : '⏳'}</div>
          <div>• Connection: {testResults.connectionType}</div>
        </div>
      )}
      
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={testNavigation}
          style={{
            padding: '6px 12px',
            fontSize: '11px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '5px'
          }}
        >
          Test Navigation
        </button>
        
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '6px 12px',
            fontSize: '11px',
            background: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
};