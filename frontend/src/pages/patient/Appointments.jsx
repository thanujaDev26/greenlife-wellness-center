import React from "react";
import Card from "../../components/ui/Card.jsx";

const Appointments = () => {
  const appointments = [
    { id: 1, date: "2025-09-10", time: "10:00 AM", doctor: "Dr. Silva" },
    { id: 2, date: "2025-09-15", time: "02:00 PM", doctor: "Dr. Perera" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <Card key={apt.id} className="p-4">
            <p>
              <strong>Date:</strong> {apt.date}
            </p>
            <p>
              <strong>Time:</strong> {apt.time}
            </p>
            <p>
              <strong>Doctor:</strong> {apt.doctor}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
