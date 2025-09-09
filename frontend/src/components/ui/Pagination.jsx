import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button.jsx';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = '',
  showInfo = true
}) => {
  const pages = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 ${className}`}>
      {showInfo && (
        <div className="text-sm text-neutral-600">
          Page {currentPage} of {totalPages}
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        {/* Previous button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          icon={<ChevronLeft className="h-4 w-4" />}
          className="px-3"
        >
          Previous
        </Button>
        
        {/* First page and ellipsis */}
        {startPage > 1 && (
          <>
            <Button
              variant={1 === currentPage ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(1)}
              className="px-3 py-2"
            >
              1
            </Button>
            {startPage > 2 && <span className="text-neutral-400">...</span>}
          </>
        )}
        
        {/* Page numbers */}
        {pages.map(page => (
          <Button
            key={page}
            variant={page === currentPage ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onPageChange(page)}
            className="px-3 py-2 min-w-[40px]"
          >
            {page}
          </Button>
        ))}
        
        {/* Last page and ellipsis */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-neutral-400">...</span>}
            <Button
              variant={totalPages === currentPage ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-2"
            >
              {totalPages}
            </Button>
          </>
        )}
        
        {/* Next button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          icon={<ChevronRight className="h-4 w-4" />}
          iconPosition="right"
          className="px-3"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;