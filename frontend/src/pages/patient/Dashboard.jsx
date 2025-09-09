import React from "react";
import { Calendar, MessageCircle, User, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <main className="p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-brand-800 mb-6">
          Welcome Back, Patient 👋
        </h1>
        <p className="text-neutral-600 mb-10">
          Here’s a quick overview of your wellness activities.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-soft flex items-center gap-4">
            <Calendar className="h-10 w-10 text-brand-600" />
            <div>
              <p className="text-sm text-neutral-500">Upcoming Appointments</p>
              <h2 className="text-2xl font-bold text-brand-800">2</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-soft flex items-center gap-4">
            <MessageCircle className="h-10 w-10 text-brand-600" />
            <div>
              <p className="text-sm text-neutral-500">New Messages</p>
              <h2 className="text-2xl font-bold text-brand-800">5</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-soft flex items-center gap-4">
            <Activity className="h-10 w-10 text-brand-600" />
            <div>
              <p className="text-sm text-neutral-500">Completed Sessions</p>
              <h2 className="text-2xl font-bold text-brand-800">12</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-soft flex items-center gap-4">
            <User className="h-10 w-10 text-brand-600" />
            <div>
              <p className="text-sm text-neutral-500">Profile</p>
              <Link
                to="/patient/profile"
                className="text-brand-600 font-medium hover:underline"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h2 className="text-xl font-semibold text-brand-800 mb-4">
              Upcoming Appointments
            </h2>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex justify-between border-b pb-2">
                <span>Dr. Silva - Therapy</span>
                <span className="text-sm text-neutral-500">Sep 15, 10:00 AM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Dr. Fernando - Mindfulness</span>
                <span className="text-sm text-neutral-500">Sep 20, 2:00 PM</span>
              </li>
            </ul>
            <Link
              to="/patient/appointments"
              className="mt-4 inline-block text-brand-600 hover:underline font-medium"
            >
              View All
            </Link>
          </div>

          {/* Recent Queries */}
          <div className="bg-white p-6 rounded-2xl shadow-soft">
            <h2 className="text-xl font-semibold text-brand-800 mb-4">
              Recent Queries
            </h2>
            <ul className="space-y-3 text-neutral-600">
              <li className="border-b pb-2">
                <p className="font-medium">How to practice daily meditation?</p>
                <span className="text-sm text-neutral-500">Answered</span>
              </li>
              <li className="border-b pb-2">
                <p className="font-medium">Best diet plan for stress relief?</p>
                <span className="text-sm text-neutral-500">Pending</span>
              </li>
            </ul>
            <Link
              to="/patient/queries"
              className="mt-4 inline-block text-brand-600 hover:underline font-medium"
            >
              View All
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
