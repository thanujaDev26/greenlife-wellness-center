import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/nav/Sidebar.jsx';
import Navbar from '../components/nav/Navbar.jsx';

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed} 
        />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;