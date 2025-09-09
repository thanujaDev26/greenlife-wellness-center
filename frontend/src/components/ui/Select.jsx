import React from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ 
  label, 
  error, 
  options = [],
  placeholder = "Select an option...",
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  const selectClasses = `
    w-full px-4 py-3 rounded-xl border transition-colors duration-200 appearance-none
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
    bg-white cursor-pointer
    ${error 
      ? 'border-red-300 bg-red-50 text-red-900' 
      : 'border-neutral-300 text-neutral-900 hover:border-neutral-400'
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
      
      <div className="relative">
        <select className={selectClasses} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDown className={`h-5 w-5 ${error ? 'text-red-400' : 'text-neutral-400'}`} />
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;