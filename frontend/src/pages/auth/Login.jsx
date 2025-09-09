import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Leaf } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useToast } from '../../components/ui/Toast.jsx';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import Input from '../../components/ui/Input.jsx';
import Select from '../../components/ui/Select.jsx';
import { useFormState } from '../../hooks/useLocalState.jsx';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const { formData, errors, isSubmitting, setIsSubmitting, updateField, validate } = useFormState({
    email: '',
    password: '',
    role: ''
  }, {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    password: {
      required: true,
      minLength: 6,
      message: 'Password must be at least 6 characters'
    },
    role: {
      required: true,
      message: 'Please select a role'
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await login(formData.email, formData.password, formData.role);
      
      if (result.success) {
        success('Welcome back!');
        const redirectPath = formData.role === 'patient' ? '/patient' :
                           formData.role === 'therapist' ? '/therapist' :
                           formData.role === 'admin' ? '/admin' : from;
        navigate(redirectPath, { replace: true });
      } else {
        error(result.error || 'Login failed');
      }
    } catch (err) {
      error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleOptions = [
    { value: 'patient', label: 'Patient' },
    { value: 'therapist', label: 'Therapist' },
    { value: 'admin', label: 'Admin' }
  ];

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
          <div className="mb-4">
  <button
    onClick={() => navigate('/')}
    className="flex items-center text-brand-600 hover:text-brand-700 font-medium"
  >
    <ArrowLeft className="w-5 h-5 mr-2" />
    Back to Home
  </button>
</div>
            <h2 className="text-2xl font-bold text-brand-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-neutral-600">
              Sign in to your wellness account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Select
              label="I am a..."
              value={formData.role}
              onChange={(e) => updateField('role', e.target.value)}
              options={roleOptions}
              placeholder="Select your role"
              error={errors.role}
              required
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="Enter your email"
              error={errors.email}
              required
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="Enter your password"
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

            <div className="flex items-center justify-between text-sm">
              <Link 
                to="/forgot-password" 
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isSubmitting || isLoading}
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting || isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-600">
              New to GreenLife?{' '}
              <Link 
                to="/signup" 
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-neutral-50 rounded-xl">
            <p className="text-xs text-neutral-600 font-medium mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-xs text-neutral-600">
              <p><strong>Patient:</strong> sarah.johnson@email.com</p>
              <p><strong>Therapist:</strong> priya.sharma@greenlife.lk</p>
              <p><strong>Admin:</strong> admin@greenlife.lk</p>
              <p className="mt-1 italic">Password: any text (demo mode)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;