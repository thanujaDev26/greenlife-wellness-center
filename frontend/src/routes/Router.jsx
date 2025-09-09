import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx';
import { ToastProvider } from '../components/ui/Toast.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import PublicLayout from '../layouts/PublicLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';


import Home from '../pages/home/Home.jsx';
import Services from '../pages/services/Services.jsx';
import BlogList from '../pages/blog/BlogList.jsx';
import BlogDetail from '../pages/blog/BlogDetail.jsx';
import Contact from '../pages/contact/Contact.jsx';


import Login from '../pages/auth/Login.jsx';
import Signup from '../pages/auth/Signup.jsx';
import ForgotPassword from '../pages/auth/ForgotPassword.jsx';


import PatientDashboard from '../pages/patient/Dashboard.jsx';
import PatientAppointments from '../pages/patient/Appointments.jsx';
import PatientQueries from '../pages/patient/Queries.jsx';
import PatientProfile from '../pages/patient/Profile.jsx';


import TherapistDashboard from '../pages/therapist/Dashboard.jsx';
import TherapistSchedule from '../pages/therapist/Schedule.jsx';
import TherapistQueries from '../pages/therapist/Queries.jsx';
import TherapistProfile from '../pages/therapist/Profile.jsx';


import AdminDashboard from '../pages/admin/Dashboard.jsx';
import AdminUsers from '../pages/admin/Users.jsx';
import AdminServices from '../pages/admin/Services.jsx';
import AdminAppointments from '../pages/admin/Appointments.jsx';
import AdminQueries from '../pages/admin/Queries.jsx';
import AdminBlog from '../pages/admin/Blog.jsx';


import NotFound from '../error/NotFound.jsx';
import ErrorBoundary from '../error/ErrorBoundary.jsx';


const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


const DevRoleSwitcher = () => {
  const { user, switchRole } = useAuth();
  
  if (process.env.NODE_ENV !== 'development' || !user) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-neutral-300 rounded-lg p-3 shadow-lg z-50">
      <p className="text-xs font-medium text-neutral-700 mb-2">Dev Mode - Switch Role:</p>
      <div className="flex gap-2">
        {['patient', 'therapist', 'admin'].map((role) => (
          <button
            key={role}
            onClick={() => switchRole(role)}
            className={`px-2 py-1 text-xs rounded ${
              user.role === role
                ? 'bg-brand-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="blog" element={<BlogList />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/patient" element={
                <ProtectedRoute requiredRole="patient">
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<PatientDashboard />} />
                <Route path="appointments" element={<PatientAppointments />} />
                <Route path="queries" element={<PatientQueries />} />
                <Route path="profile" element={<PatientProfile />} />
              </Route>

            
              <Route path="/therapist" element={
                <ProtectedRoute requiredRole="therapist">
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<TherapistDashboard />} />
                <Route path="schedule" element={<TherapistSchedule />} />
                <Route path="queries" element={<TherapistQueries />} />
                <Route path="profile" element={<TherapistProfile />} />
              </Route>

   
              <Route path="/admin" element={
                <ProtectedRoute requiredRole="admin">
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="appointments" element={<AdminAppointments />} />
                <Route path="queries" element={<AdminQueries />} />
                <Route path="blog" element={<AdminBlog />} />
              </Route>

         
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <DevRoleSwitcher />
          </ErrorBoundary>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;