import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'default',
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl transition-all duration-200';
  
  const variants = {
    default: 'shadow-soft border border-neutral-200',
    elevated: 'shadow-elevated',
    outlined: 'border-2 border-neutral-200',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 shadow-soft'
  };
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const hoverClasses = hover ? 'hover:shadow-elevated hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;