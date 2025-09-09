import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Home, Calendar, MessageCircle, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
