import React from "react";
import  Card  from "../../components/ui/Card.jsx";

const Profile = () => {
  const patient = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+94 71 123 4567",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <Card className="p-6 max-w-md">
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Phone:</strong> {patient.phone}</p>
      </Card>
    </div>
  );
};

export default Profile;
