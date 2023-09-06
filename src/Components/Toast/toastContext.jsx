import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  return (
    <ToastContext.Provider value={{ toastMessage, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
