import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Leaf } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useToast } from '../../components/ui/Toast.jsx';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';
import { useFormState } from '../../hooks/useLocalState.jsx';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, isLoading } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();

  const { formData, errors, isSubmitting, setIsSubmitting, updateField, validate } = useFormState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: ''
  }, {
    name: {
      required: true,
      message: 'Full name is required'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    phone: {
      required: true,
      pattern: /^\+94\s\d{2}\s\d{3}\s\d{4}$/,
      message: 'Please enter phone number in format: +94 77 123 4567'
    },
    password: {
      required: true,
      minLength: 8,
      message: 'Password must be at least 8 characters'
    },
    confirmPassword: {
      required: true,
      message: 'Please confirm your password'
    },
    emergencyContactName: {
      required: true,
      message: 'Emergency contact name is required'
    },
    emergencyContactPhone: {
      required: true,
      message: 'Emergency contact phone is required'
    },
    emergencyContactRelationship: {
      required: true,
      message: 'Emergency contact relationship is required'
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      error('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        emergencyContact: {
          name: formData.emergencyContactName,
          phone: formData.emergencyContactPhone,
          relationship: formData.emergencyContactRelationship
        },
        preferences: []
      };

      const result = await signup(userData);
      
      if (result.success) {
        success('Account created successfully! Welcome to GreenLife.');
        navigate('/patient');
      } else {
        error(result.error || 'Signup failed');
      }
    } catch (err) {
      error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
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
              Join GreenLife
            </h2>
            <p className="text-neutral-600">
              Start your wellness journey with us
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-brand-800 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Enter your full name"
                  error={errors.name}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+94 77 123 4567"
                  error={errors.phone}
                  required
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="Enter your email"
                error={errors.email}
                required
              />
            </div>

            {/* Password */}
            <div>
              <h3 className="text-lg font-semibold text-brand-800 mb-4">
                Account Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    placeholder="Create a password"
                    error={errors.password}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <div className="relative">
                  <Input
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                    error={errors.confirmPassword}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-9 text-neutral-400 hover:text-neutral-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="text-lg font-semibold text-brand-800 mb-4">
                Emergency Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Contact Name"
                  type="text"
                  value={formData.emergencyContactName}
                  onChange={(e) => updateField('emergencyContactName', e.target.value)}
                  placeholder="Emergency contact name"
                  error={errors.emergencyContactName}
                  required
                />

                <Input
                  label="Contact Phone"
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(e) => updateField('emergencyContactPhone', e.target.value)}
                  placeholder="+94 77 123 4567"
                  error={errors.emergencyContactPhone}
                  required
                />
              </div>

              <Input
                label="Relationship"
                type="text"
                value={formData.emergencyContactRelationship}
                onChange={(e) => updateField('emergencyContactRelationship', e.target.value)}
                placeholder="e.g., Spouse, Parent, Sibling"
                error={errors.emergencyContactRelationship}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isSubmitting || isLoading}
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting || isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-600">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;