import React from 'react';

const Skeleton = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  ...props 
}) => {
  const baseClasses = 'animate-pulse bg-neutral-200 rounded';
  
  const variants = {
    text: 'h-4 w-full rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    avatar: 'rounded-full w-10 h-10'
  };
  
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return <div className={classes} style={style} {...props} />;
};

// Skeleton components for common patterns
export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton 
        key={index} 
        variant="text" 
        className={index === lines - 1 ? 'w-3/4' : 'w-full'} 
      />
    ))}
  </div>
);

export const SkeletonCard = ({ className = '' }) => (
  <div className={`p-6 bg-white rounded-2xl border border-neutral-200 ${className}`}>
    <div className="flex items-center space-x-3 mb-4">
      <Skeleton variant="avatar" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/4" />
      </div>
    </div>
    <SkeletonText lines={3} />
  </div>
);

export const SkeletonTable = ({ rows = 5, columns = 4, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {/* Header */}
    <div className="flex space-x-4">
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={index} className="h-6 flex-1" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-4 flex-1" />
        ))}
      </div>
    ))}
  </div>
);

export default Skeleton;