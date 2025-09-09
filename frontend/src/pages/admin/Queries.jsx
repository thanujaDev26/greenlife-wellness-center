import React from "react";

const Queries = () => {
  const queries = [
    { id: 1, patient: "John Doe", message: "How to reset password?", status: "Pending", date: "2024-09-01" },
    { id: 2, patient: "Jane Smith", message: "Can I reschedule my session?", status: "Resolved", date: "2024-09-02" },
    { id: 3, patient: "Alice Johnson", message: "Invoice not received.", status: "Pending", date: "2024-09-03" },
    { id: 4, patient: "Michael Clark", message: "Great service!", status: "Resolved", date: "2024-09-04" },
    { id: 5, patient: "Emily Davis", message: "Need physiotherapy session info.", status: "Pending", date: "2024-09-05" },
    { id: 6, patient: "William Harris", message: "How to cancel membership?", status: "Pending", date: "2024-09-06" },
    { id: 7, patient: "Sophia Wilson", message: "Refund not processed.", status: "Resolved", date: "2024-09-07" },
    { id: 8, patient: "Daniel Martinez", message: "Therapist was very helpful.", status: "Resolved", date: "2024-09-08" },
    { id: 9, patient: "Olivia Taylor", message: "Can I book multiple sessions?", status: "Pending", date: "2024-09-09" },
    { id: 10, patient: "James Anderson", message: "App keeps crashing.", status: "Pending", date: "2024-09-10" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-brand-800">User Queries</h2>

      <div className="flex flex-col gap-4">
        {queries.map((query) => (
          <div
            key={query.id}
            className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div>
              <h4 className="font-semibold text-lg">{query.patient}</h4>
              <p className="text-gray-600 truncate max-w-xs">{query.message}</p>
            </div>
            <div className="text-right">
              <span className={`text-sm ${query.status === "Pending" ? "text-red-500" : "text-green-500"}`}>
                {query.status}
              </span>
              <p className="text-gray-400 text-xs">{query.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
