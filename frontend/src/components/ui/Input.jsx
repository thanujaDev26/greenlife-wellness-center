import React from 'react';

const Input = ({ 
  label, 
  error, 
  icon,
  iconPosition = 'left',
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  const inputClasses = `
    w-full px-4 py-3 rounded-xl border transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
    ${error 
      ? 'border-red-300 bg-red-50 text-red-900 placeholder-red-400' 
      : 'border-neutral-300 bg-white text-neutral-900 placeholder-neutral-500 hover:border-neutral-400'
    }
    ${icon && iconPosition === 'left' ? 'pl-12' : ''}
    ${icon && iconPosition === 'right' ? 'pr-12' : ''}
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
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className={error ? 'text-red-400' : 'text-neutral-400'}>
              {icon}
            </span>
          </div>
        )}
        
        <input
          className={inputClasses}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className={error ? 'text-red-400' : 'text-neutral-400'}>
              {icon}
            </span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;