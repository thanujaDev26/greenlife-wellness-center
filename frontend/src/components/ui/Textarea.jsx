import React from 'react';

const Textarea = ({ 
  label, 
  error, 
  className = '', 
  containerClassName = '',
  rows = 4,
  ...props 
}) => {
  const textareaClasses = `
    w-full px-4 py-3 rounded-xl border transition-colors duration-200 resize-vertical
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
    ${error 
      ? 'border-red-300 bg-red-50 text-red-900 placeholder-red-400' 
      : 'border-neutral-300 bg-white text-neutral-900 placeholder-neutral-500 hover:border-neutral-400'
    }
    ${props.disabled ? 'opacity-50 cursor-not-allowed bg-neutral-100' : ''}
    ${className}
  `;

  return (
    <div className={`space-y-1 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      
      <textarea
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Textarea;