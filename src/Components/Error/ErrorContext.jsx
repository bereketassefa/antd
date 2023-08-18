// ErrorContext.js
import React, { createContext, useState, useCallback } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const displayError = useCallback((errorMessage) => {
    setError(errorMessage);
    setShowError(true);
  }, []);

  const hideError = useCallback(() => {
    setError(null);
    setShowError(false);
  }, []);

  return (
    <ErrorContext.Provider value={{ error, showError, displayError, hideError }}>
      {children}
    </ErrorContext.Provider>
  );
};
