'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'boctok-sections-state';

export default function useCollapsibleSections(defaultStates = {}) {
  const [sectionStates, setSectionStates] = useState(defaultStates);

  // Load states from localStorage on mount
  useEffect(() => {
    try {
      const savedStates = localStorage.getItem(STORAGE_KEY);
      if (savedStates) {
        const parsedStates = JSON.parse(savedStates);
        // Validate that parsedStates is an object
        if (typeof parsedStates === 'object' && parsedStates !== null) {
          setSectionStates(prevStates => ({
            ...defaultStates,
            ...parsedStates
          }));
        }
      }
    } catch (error) {
      console.warn('Failed to load section states from localStorage:', error);
      // Fallback to default states - already set in useState
    }
  }, []);

  // Save states to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sectionStates));
    } catch (error) {
      console.warn('Failed to save section states to localStorage:', error);
      // Continue without localStorage - graceful degradation
    }
  }, [sectionStates]);

  // Toggle a specific section's state
  const toggleSection = useCallback((sectionId) => {
    setSectionStates(prevStates => ({
      ...prevStates,
      [sectionId]: !prevStates[sectionId]
    }));
  }, []);

  // Set a specific section's state
  const setSectionState = useCallback((sectionId, isOpen) => {
    setSectionStates(prevStates => ({
      ...prevStates,
      [sectionId]: isOpen
    }));
  }, []);

  // Get a specific section's state (defaults to false if not set - chatbot style)
  const getSectionState = useCallback((sectionId) => {
    return sectionStates[sectionId] !== undefined ? sectionStates[sectionId] : false;
  }, [sectionStates]);

  return {
    sectionStates,
    toggleSection,
    setSectionState,
    getSectionState
  };
}