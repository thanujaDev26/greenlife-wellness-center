import React, { useState } from "react";
import Card from "../../components/ui/Card.jsx";

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Physiotherapy", description: "Muscle and joint therapy" },
    { id: 2, name: "Counseling", description: "Mental health support" },
    { id: 3, name: "Massage Therapy", description: "Relaxation and therapy" },
  ]);

  const handleAdd = () => {
    const newService = {
      id: services.length + 1,
      name: "New Service",
      description: "Service description",
    };
    setServices([...services, newService]);
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new service name:");
    if (newName) {
      setServices(
        services.map((service) =>
          service.id === id ? { ...service, name: newName } : service
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-brand-800">Manage Services</h1>

      {/* Add Service Button */}
      <button
        onClick={handleAdd}
        className="mb-6 px-4 py-2 bg-brand-600 text-white font-semibold rounded shadow hover:bg-brand-700 transition"
      >
        Add New Service
      </button>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6 shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-neutral-600 mb-4">{service.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(service.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
