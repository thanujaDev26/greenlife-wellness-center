import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  MessageSquare,
  User,
  Users,
  Settings,
  Heart,
  FileText,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const { user } = useAuth();

  // Navigation items based on user role
  const getNavigationItems = () => {
    if (!user) return [];

    const baseItems = [
      { name: 'Dashboard', href: `/${user.role}`, icon: Home },
    ];

    if (user.role === 'patient') {
      return [
        ...baseItems,
        { name: 'Appointments', href: '/patient/appointments', icon: Calendar },
        { name: 'Queries', href: '/patient/queries', icon: MessageSquare },
        { name: 'Profile', href: '/patient/profile', icon: User }
      ];
    }

    if (user.role === 'therapist') {
      return [
        ...baseItems,
        { name: 'Schedule', href: '/therapist/schedule', icon: Calendar },
        { name: 'Queries', href: '/therapist/queries', icon: MessageSquare },
        { name: 'Profile', href: '/therapist/profile', icon: User }
      ];
    }

    if (user.role === 'admin') {
      return [
        ...baseItems,
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Services', href: '/admin/services', icon: Heart },
        { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
        { name: 'Queries', href: '/admin/queries', icon: MessageSquare },
        { name: 'Blog', href: '/admin/blog', icon: FileText }
      ];
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bg-white border-r border-neutral-200 h-full transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <div className="flex justify-end p-3 border-b border-neutral-200">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-neutral-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-neutral-600" />
          )}
        </button>
      </div>

      {/* User Info */}
      {!isCollapsed && user && (
        <div className="p-4 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'}
              alt={user.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-neutral-500 capitalize">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group ${
                isActive(item.href)
                  ? 'bg-brand-100 text-brand-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
              title={isCollapsed ? item.name : undefined}
            >
              <Icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'} ${
                isActive(item.href) ? 'text-brand-600' : 'text-neutral-500 group-hover:text-neutral-700'
              }`} />
              {!isCollapsed && (
                <span className="truncate">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;