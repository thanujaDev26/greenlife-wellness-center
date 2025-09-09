import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Users, Calendar, MessageCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Active Patients", count: 12, icon: <Users className="w-6 h-6 text-white" /> },
    { id: 2, title: "Today's Sessions", count: 5, icon: <Calendar className="w-6 h-6 text-white" /> },
    { id: 3, title: "Pending Queries", count: 8, icon: <MessageCircle className="w-6 h-6 text-white" /> },
  ];

  const upcomingSessions = [
    { id: 1, patient: "John Doe", time: "09:00 AM - 10:00 AM" },
    { id: 2, patient: "Jane Smith", time: "10:30 AM - 11:30 AM" },
    { id: 3, patient: "Mark Lee", time: "01:00 PM - 02:00 PM" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-brand-800">Therapist Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.id} className="p-4 flex items-center justify-between bg-brand-600 text-white shadow-lg">
            <div className="flex flex-col">
              <p className="text-sm">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.count}</p>
            </div>
            <div className="p-2 bg-brand-800 rounded">{stat.icon}</div>
          </Card>
        ))}
      </div>

      {/* Upcoming Sessions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand-700">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingSessions.map((session) => (
            <Card key={session.id} className="p-4 shadow-md flex justify-between items-center hover:shadow-lg transition">
              <div>
                <p className="font-semibold">{session.patient}</p>
                <p className="text-neutral-500">{session.time}</p>
              </div>
              <button className="px-3 py-1 bg-brand-600 text-white rounded hover:bg-brand-700 transition">
                View
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
