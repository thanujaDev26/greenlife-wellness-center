import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../data/users.jsx';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('greenlife_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('greenlife_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('greenlife_user');
    }
  }, [user]);

  const login = async (email, password, role) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user by email and role
    const foundUser = users.find(u => u.email === email && u.role === role);
    
    if (foundUser) {
      setUser(foundUser);
      setIsLoading(false);
      return { success: true };
    } else {
      setIsLoading(false);
      return { success: false, error: 'Invalid credentials or role' };
    }
  };

  const signup = async (userData) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return { success: false, error: 'Email already exists' };
    }
    
    // Create new user (in real app, this would be sent to backend)
    const newUser = {
      id: Date.now(),
      ...userData,
      role: 'patient',
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face`
    };
    
    setUser(newUser);
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const forgotPassword = async (email) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = users.find(u => u.email === email);
    setIsLoading(false);
    
    if (foundUser) {
      return { success: true, message: 'Password reset instructions sent to your email' };
    } else {
      return { success: false, error: 'Email not found' };
    }
  };

  // Development utility to switch roles quickly
  const switchRole = (role) => {
    const demoUsers = {
      patient: users.find(u => u.role === 'patient'),
      therapist: users.find(u => u.role === 'therapist'),
      admin: users.find(u => u.role === 'admin')
    };
    
    if (demoUsers[role]) {
      setUser(demoUsers[role]);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    forgotPassword,
    switchRole, // Development utility
    isAuthenticated: !!user,
    isPatient: user?.role === 'patient',
    isTherapist: user?.role === 'therapist',
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}