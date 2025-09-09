import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useToast } from '../../components/ui/Toast.jsx';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';
import { useFormState } from '../../hooks/useLocalState.jsx';

const ForgotPassword = () => {
  const { forgotPassword, isLoading } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();

  const { formData, errors, isSubmitting, setIsSubmitting, updateField, validate } = useFormState({
    email: ''
  }, {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await forgotPassword(formData.email);
      
      if (result.success) {
        success(result.message);
        setTimeout(() => navigate('/login'), 3000);
      } else {
        error(result.error || 'Failed to send reset instructions');
      }
    } catch (err) {
      error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="bg-brand-600 rounded-xl p-3">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-brand-800 leading-none mb-0">
                GreenLife
              </h1>
              <p className="text-sm text-neutral-600 leading-none">
                Wellness Center
              </p>
            </div>
          </Link>
        </div>

        <Card>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-brand-800 mb-2">
              Forgot Password?
            </h2>
            <p className="text-neutral-600">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="Enter your email"
              error={errors.email}
              required
              autoFocus
            />

            <Button
              type="submit"
              className="w-full"
              loading={isSubmitting || isLoading}
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting || isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;