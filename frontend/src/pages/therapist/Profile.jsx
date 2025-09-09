import React from "react";
import Card from "../../components/ui/Card.jsx";
import { Edit2, Mail, Phone } from "lucide-react";

const Profile = () => {
  const therapist = {
    name: "Dr. Emily Carter",
    specialization: "Cognitive Behavioral Therapy",
    experience: 8, 
    email: "emily.carter@example.com",
    phone: "+94 71 987 6543",
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h1 className="text-3xl font-bold text-brand-800 mb-6">Therapist Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1">
          <Card className="p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={therapist.avatar}
                  alt="Therapist Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold">{therapist.name}</h2>
              </div>
              <button className="p-2 rounded-full bg-brand-100 text-brand-600 hover:bg-brand-200 transition">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-neutral-700">
              <p><strong>Specialization:</strong> {therapist.specialization}</p>
              <p><strong>Experience:</strong> {therapist.experience} years</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500" /> {therapist.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500" /> {therapist.phone}
              </p>
            </div>
          </Card>
        </div>

        
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-bold text-brand-700 mb-4">Upcoming Appointments</h2>
            <p className="text-neutral-500">No appointments scheduled yet.</p>
          </Card>

          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-bold text-brand-700 mb-4">Notes / Announcements</h2>
            <p className="text-neutral-500">Add important notes or reminders here.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
