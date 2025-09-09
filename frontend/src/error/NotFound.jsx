import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button.jsx';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-8xl font-bold text-brand-200 mb-4">404</div>
          <h1 className="text-3xl font-bold text-brand-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-neutral-600 leading-relaxed mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Go Back
          </Button>
          
          <Link to="/">
            <Button icon={<Home className="h-4 w-4" />}>
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;