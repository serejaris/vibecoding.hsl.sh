'use client';

import { Component } from 'react';

/**
 * Error boundary for preloader components
 */
export class PreloaderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Preloader Error:', error, errorInfo);
    }
    
    // Hide preloader on error
    setTimeout(() => {
      document.body.classList.add('fonts-loaded');
    }, 100);
  }

  render() {
    if (this.state.hasError) {
      // Return null to hide preloader on error
      return null;
    }

    return this.props.children;
  }
}