import React from 'react';

const EmptyState = ({ 
  icon,
  title,
  description,
  action,
  className = ''
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full">
            <div className="text-neutral-400 text-2xl">
              {icon}
            </div>
          </div>
        </div>
      )}
      
      {title && (
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-neutral-600 mb-6 max-w-md mx-auto">
          {description}
        </p>
      )}
      
      {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;