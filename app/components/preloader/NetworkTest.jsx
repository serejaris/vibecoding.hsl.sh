'use client';

import { useEffect, useState } from 'react';

/**
 * Component to simulate slow network conditions for testing
 */
export const NetworkTest = () => {
  const [networkInfo, setNetworkInfo] = useState({});
  const [isThrottling, setIsThrottling] = useState(false);

  useEffect(() => {
    // Get network information
    const updateNetworkInfo = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      setNetworkInfo({
        effectiveType: connection?.effectiveType || 'unknown',
        downlink: connection?.downlink || 'unknown',
        rtt: connection?.rtt || 'unknown',
        saveData: connection?.saveData || false,
        online: navigator.onLine
      });
    };

    updateNetworkInfo();

    // Listen for network changes
    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);
    
    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkInfo);
    }

    return () => {
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkInfo);
      }
    };
  }, []);

  // Simulate slow network by adding delays to resource loading
  const simulateSlowNetwork = () => {
    if (isThrottling) {
      // Remove throttling
      setIsThrottling(false);
      console.log('🚀 Network throttling disabled');
      return;
    }

    setIsThrottling(true);
    console.log('🐌 Simulating slow network...');

    // Add artificial delays to image loading
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'img') {
        const originalSrc = element.src;
        Object.defineProperty(element, 'src', {
          set: function(value) {
            // Add 2-3 second delay for images
            setTimeout(() => {
              element.setAttribute('src', value);
            }, 2000 + Math.random() * 1000);
          },
          get: function() {
            return originalSrc;
          }
        });
      }
      
      return element;
    };

    // Restore after 10 seconds
    setTimeout(() => {
      document.createElement = originalCreateElement;
      setIsThrottling(false);
      console.log('🚀 Network throttling auto-disabled');
    }, 10000);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '340px',
      background: 'rgba(255,255,255,0.95)',
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 10000,
      maxWidth: '280px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#FF5722' }}>
        🌐 Network Test
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <div><strong>Connection Info:</strong></div>
        <div>• Type: {networkInfo.effectiveType}</div>
        <div>• Speed: {networkInfo.downlink} Mbps</div>
        <div>• RTT: {networkInfo.rtt} ms</div>
        <div>• Online: {networkInfo.online ? '✅' : '❌'}</div>
        <div>• Save Data: {networkInfo.saveData ? '✅' : '❌'}</div>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <div><strong>Throttling:</strong></div>
        <div>• Status: {isThrottling ? '🐌 Active' : '🚀 Disabled'}</div>
      </div>
      
      <button 
        onClick={simulateSlowNetwork}
        style={{
          padding: '6px 12px',
          fontSize: '11px',
          background: isThrottling ? '#4CAF50' : '#FF5722',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        {isThrottling ? 'Disable Throttling' : 'Simulate Slow Network'}
      </button>
      
      <div style={{ marginTop: '8px', fontSize: '10px', color: '#666' }}>
        Throttling adds 2-3s delay to images
      </div>
    </div>
  );
};