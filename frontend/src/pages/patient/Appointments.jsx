import React, { useState } from "react";
import Card from "../../components/ui/Card.jsx";
import { Calendar, Clock, Phone, Plus, X } from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const Appointments = () => {
  const [appointments, setAppointments] = useState([
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
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    doctorName: "",
    sessionType: "",
    date: "",
    time: "",
    hospital: "",
    status: "Pending",
  });

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

  const handleCreateAppointment = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in");
      return;
    }

    const decoded = jwtDecode(token);
    const userId = decoded.id;

    const res = await axios.post(
      "http://127.0.0.1:3001/api/appointments",
      { userId, ...formData },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = res.data; // ✅ no res.json()
    setAppointments([...appointments, data.appointment]);
    setIsModalOpen(false);

    setFormData({
      doctorName: "",
      sessionType: "",
      date: "",
      time: "",
      hospital: "",
      status: "Pending",
    });
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};


  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-brand-800">
          Your Appointments
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition"
        >
          <Plus className="h-4 w-4" />
          New Appointment
        </button>
      </div>

      {/* Appointment list */}
      {appointments.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-sm text-center text-neutral-600">
          You have no upcoming appointments.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((apt) => (
            <Card key={apt.id} className="p-6 flex flex-col gap-4 shadow-soft">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-brand-800">
                    {apt.doctor || apt.doctorName}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {apt.specialization || apt.sessionType}
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

              {/* Details */}
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
                  <span>{apt.phone || "N/A"}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-brand-800">
              New Appointment
            </h2>

            <form onSubmit={handleCreateAppointment} className="space-y-4">
              <input
                type="text"
                placeholder="Doctor Name"
                value={formData.doctorName}
                onChange={(e) =>
                  setFormData({ ...formData, doctorName: e.target.value })
                }
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="text"
                placeholder="Session Type"
                value={formData.sessionType}
                onChange={(e) =>
                  setFormData({ ...formData, sessionType: e.target.value })
                }
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="text"
                placeholder="Hospital"
                value={formData.hospital}
                onChange={(e) =>
                  setFormData({ ...formData, hospital: e.target.value })
                }
                className="w-full border rounded-lg p-2"
                required
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition"
              >
                Create Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
