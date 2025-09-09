import React from "react";
import  Card  from "../../components/ui/Card.jsx";

const Queries = () => {
  const queries = [
    { id: 1, question: "How long is the therapy session?", answer: "60 minutes" },
    { id: 2, question: "Do you accept insurance?", answer: "Yes, major insurances" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Queries</h1>
      <div className="space-y-4">
        {queries.map((q) => (
          <Card key={q.id} className="p-4">
            <p className="font-semibold">Q: {q.question}</p>
            <p className="text-neutral-600">A: {q.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Queries;
