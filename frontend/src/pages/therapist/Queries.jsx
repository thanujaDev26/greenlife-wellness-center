import React from "react";
import Card from "../../components/ui/Card.jsx";
import { MessageCircle, User } from "lucide-react";

const Queries = () => {
  const queries = [
    { id: 1, sender: "John Doe", role: "Patient", message: "Can we reschedule my session?", date: "2025-09-05" },
    { id: 2, sender: "Admin", role: "Admin", message: "Please update your availability for next week.", date: "2025-09-06" },
    { id: 3, sender: "Jane Smith", role: "Patient", message: "I have some questions about my therapy plan.", date: "2025-09-07" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-brand-800 mb-4">Patient Queries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {queries.map((q) => (
          <Card key={q.id} className="p-4 shadow-md hover:shadow-lg transition flex flex-col">
            <div className="flex items-center mb-2">
              <User className="w-5 h-5 text-brand-600 mr-2" />
              <p className="font-semibold">{q.sender}</p>
              <span className="ml-auto text-sm text-neutral-500">{q.date}</span>
            </div>
            <p className="text-neutral-700">{q.message}</p>
            <span className="mt-2 text-xs text-neutral-400">{q.role}</span>
            <button className="mt-3 px-3 py-1 bg-brand-600 text-white rounded hover:bg-brand-700 transition self-start">
              Reply
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Queries;
