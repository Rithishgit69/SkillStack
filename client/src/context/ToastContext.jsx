import React, { createContext, useState, useCallback, useContext } from "react";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 3500) => {
    const id = Date.now();
    const toast = { id, message, type };
    
    setToasts(prev => [...prev, toast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-sm">
      {toasts.map(toast => (
        <Toast 
          key={toast.id} 
          {...toast} 
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

function Toast({ id, message, type, onRemove }) {
  const typeStyles = {
    success: "bg-green-900/90 text-green-100 border-green-700",
    error: "bg-red-900/90 text-red-100 border-red-700",
    info: "bg-blue-900/90 text-blue-100 border-blue-700",
    warning: "bg-amber-900/90 text-amber-100 border-amber-700"
  };

  const typeIcons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠"
  };

  return (
    <div 
      className={`
        animate-slide-up border rounded-lg px-4 py-3 pl-3 pr-4
        flex items-center gap-3 shadow-lg backdrop-blur-sm
        ${typeStyles[type] || typeStyles.info}
      `}
    >
      <span className="text-lg font-bold flex-shrink-0">
        {typeIcons[type]}
      </span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button 
        onClick={onRemove}
        className="text-lg flex-shrink-0 hover:opacity-70 transition"
      >
        ✕
      </button>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
