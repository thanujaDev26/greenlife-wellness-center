import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Users, Calendar, FileText, MessageCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Total Patients", value: 124, icon: <Users className="w-6 h-6 text-white" /> },
    { id: 2, title: "Appointments Today", value: 32, icon: <Calendar className="w-6 h-6 text-white" /> },
    { id: 3, title: "Queries Pending", value: 18, icon: <MessageCircle className="w-6 h-6 text-white" /> },
    { id: 4, title: "Reports Submitted", value: 47, icon: <FileText className="w-6 h-6 text-white" /> },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-brand-800">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <Card key={stat.id} className="p-6 flex items-center justify-between bg-brand-600 text-white shadow-lg">
            <div>
              <p className="text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <div className="p-3 bg-brand-500 rounded-full">{stat.icon}</div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-brand-700">Recent Registrations</h2>
          <ul className="space-y-2 text-neutral-700">
            <li>John Doe - 2025-09-05</li>
            <li>Jane Smith - 2025-09-04</li>
            <li>Mark Lee - 2025-09-03</li>
          </ul>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-brand-700">Pending Queries</h2>
          <ul className="space-y-2 text-neutral-700">
            <li>Query #101 - Waiting for therapist response</li>
            <li>Query #102 - Patient question about schedule</li>
            <li>Query #103 - Billing issue</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
