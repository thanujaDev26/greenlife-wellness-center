import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Calendar, Clock, User, Phone } from "lucide-react";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      date: "2025-09-10",
      time: "10:00 AM",
      doctor: "Dr. Silva",
      specialization: "Therapist",
      phone: "+94 71 234 5678",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2025-09-15",
      time: "02:00 PM",
      doctor: "Dr. Perera",
      specialization: "Ayurveda Specialist",
      phone: "+94 77 987 6543",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <h1 className="text-3xl font-bold text-brand-800 mb-8">
        Your Appointments
      </h1>

      {appointments.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-sm text-center text-neutral-600">
          You have no upcoming appointments.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((apt) => (
            <Card key={apt.id} className="p-6 flex flex-col gap-4 shadow-soft">
              {/* Header with doctor */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-brand-800">
                    {apt.doctor}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {apt.specialization}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    apt.status
                  )}`}
                >
                  {apt.status}
                </span>
              </div>

              {/* Appointment Details */}
              <div className="space-y-2 text-neutral-700">
                <p className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-brand-600" />
                  <span>{apt.date}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-600" />
                  <span>{apt.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-brand-600" />
                  <span>{apt.phone}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 text-sm rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition">
                  Reschedule
                </button>
                <button className="flex-1 px-4 py-2 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                  Cancel
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
