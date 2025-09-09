import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Edit2, FileText } from "lucide-react";

const Profile = () => {
  const patient = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+94 71 123 4567",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const diagnosisReports = [
    { id: 1, date: "2025-08-10", type: "Blood Test", file: "#" },
    { id: 2, date: "2025-08-15", type: "X-Ray", file: "#" },
    { id: 3, date: "2025-09-01", type: "MRI Scan", file: "#" },
  ];

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h1 className="text-3xl font-bold text-brand-800 mb-6">Patient Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <Card className="p-6 shadow-xl relative overflow-hidden group hover:shadow-2xl transition duration-300">
          <div className="absolute top-1 right-1">
            <button className="rounded-full bg-brand-100 text-brand-600 hover:bg-brand-200 transition">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <img
                src={patient.avatar}
                alt="Patient Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>
            <p className="text-neutral-600">{patient.gender}, {patient.age} years</p>
            <p className="text-neutral-600 mt-2">{patient.email}</p>
            <p className="text-neutral-600">{patient.phone}</p>
          </div>
        </Card>

        {/* Right Column: Diagnosis Reports */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-brand-700 mb-4">Diagnosis Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diagnosisReports.map((report) => (
              <Card
                key={report.id}
                className="p-6 relative overflow-hidden group hover:shadow-2xl transition duration-300 border-l-4 border-brand-500"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-brand-500" />
                    <div>
                      <p className="font-semibold text-lg">{report.type}</p>
                      <p className="text-neutral-500 text-sm">{report.date}</p>
                    </div>
                  </div>
                  <a
                    href={report.file}
                    className="self-start px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition font-medium"
                  >
                    View Report
                  </a>
                </div>
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-100 rounded-full -mt-6 -mr-6 opacity-20 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
