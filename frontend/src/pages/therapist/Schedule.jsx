import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Clock } from "lucide-react";

const Schedule = () => {
  const schedule = [
    { id: 1, patient: "John Doe", time: "09:00 AM - 10:00 AM", type: "Therapy Session" },
    { id: 2, patient: "Jane Smith", time: "10:30 AM - 11:30 AM", type: "Consultation" },
    { id: 3, patient: "Mark Lee", time: "01:00 PM - 02:00 PM", type: "Therapy Session" },
    { id: 4, patient: "Emma Brown", time: "02:30 PM - 03:30 PM", type: "Follow-up" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-brand-800 mb-4">Therapist Schedule</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((session) => (
          <Card key={session.id} className="p-4 shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-brand-600 mr-2" />
              <p className="text-sm text-neutral-500">{session.time}</p>
            </div>
            <p className="font-semibold text-lg">{session.patient}</p>
            <p className="text-neutral-600">{session.type}</p>
            <button className="mt-4 px-3 py-1 bg-brand-600 text-white rounded hover:bg-brand-700 transition self-start">
              View Details
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
