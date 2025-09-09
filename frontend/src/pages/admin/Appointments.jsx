import React from "react";

const Appointments = () => {
  // Sample data
  const appointments = [
    { id: 1, patient: "John Doe", therapist: "Dr. Smith", session: "Counselling", date: "2024-09-10", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", therapist: "Dr. Brown", session: "Physiotherapy", date: "2024-09-11", time: "11:00 AM" },
    { id: 3, patient: "Alice Johnson", therapist: "Dr. Lee", session: "Counselling", date: "2024-09-12", time: "12:30 PM" },
    { id: 4, patient: "Michael Clark", therapist: "Dr. Smith", session: "Occupational Therapy", date: "2024-09-13", time: "2:00 PM" },
    { id: 5, patient: "Emily Davis", therapist: "Dr. Brown", session: "Physiotherapy", date: "2024-09-14", time: "3:00 PM" },
    { id: 6, patient: "William Harris", therapist: "Dr. Lee", session: "Counselling", date: "2024-09-15", time: "10:30 AM" },
    { id: 7, patient: "Sophia Wilson", therapist: "Dr. Smith", session: "Speech Therapy", date: "2024-09-16", time: "11:45 AM" },
    { id: 8, patient: "Daniel Martinez", therapist: "Dr. Brown", session: "Physiotherapy", date: "2024-09-17", time: "1:00 PM" },
    { id: 9, patient: "Olivia Taylor", therapist: "Dr. Lee", session: "Counselling", date: "2024-09-18", time: "2:15 PM" },
    { id: 10, patient: "James Anderson", therapist: "Dr. Smith", session: "Occupational Therapy", date: "2024-09-19", time: "3:30 PM" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-brand-800">Appointments</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-brand-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">Therapist</th>
              <th className="py-3 px-4 text-left">Session Type</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app) => (
              <tr
                key={app.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{app.id}</td>
                <td className="py-3 px-4">{app.patient}</td>
                <td className="py-3 px-4">{app.therapist}</td>
                <td className="py-3 px-4">{app.session}</td>
                <td className="py-3 px-4">{app.date}</td>
                <td className="py-3 px-4">{app.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
