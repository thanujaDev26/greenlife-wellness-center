import React from "react";
import Card from "../../components/ui/Card.jsx";

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Patient", email: "john@example.com", phone: "+94 71 123 4567" },
    { id: 2, name: "Jane Smith", role: "Therapist", email: "jane@example.com", phone: "+94 77 987 6543" },
    { id: 3, name: "Mark Lee", role: "Patient", email: "mark@example.com", phone: "+94 70 456 7890" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-brand-800">Users</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="p-6 bg-brand-600 text-white shadow-lg">
          <p className="text-sm font-medium">Total Users</p>
          <p className="text-2xl font-bold">{users.length}</p>
        </Card>
        <Card className="p-6 bg-brand-500 text-white shadow-lg">
          <p className="text-sm font-medium">Patients</p>
          <p className="text-2xl font-bold">{users.filter(u => u.role === "Patient").length}</p>
        </Card>
        <Card className="p-6 bg-brand-400 text-white shadow-lg">
          <p className="text-sm font-medium">Therapists</p>
          <p className="text-2xl font-bold">{users.filter(u => u.role === "Therapist").length}</p>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="overflow-x-auto shadow-md">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Phone</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Users;
