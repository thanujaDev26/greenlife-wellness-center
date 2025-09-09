import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      <Link
        to="/"
        className="text-neutral-500 hover:text-neutral-700 transition-colors flex items-center"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 text-neutral-400" />
          {item.href && index !== items.length - 1 ? (
            <Link
              to={item.href}
              className="text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-neutral-900 font-medium">
              {item.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;