import React, { useState } from "react";
import Card from "../../components/ui/Card.jsx";
import { MessageSquare, X } from "lucide-react";

const Queries = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const queries = [
    { id: 1, question: "How long is the therapy session?", answer: "60 minutes" },
    { id: 2, question: "Do you accept insurance?", answer: "Yes, major insurances" },
  ];

  const messages = [
    { id: 1, sender: "Therapist", content: "Hello! How are you feeling today?" },
    { id: 2, sender: "Admin", content: "Your appointment has been confirmed." },
    { id: 3, sender: "Reception", content: "Please bring your medical reports." },
  ];

  return (
    <div className="relative min-h-screen p-6 bg-neutral-50">
      {/* Queries Section */}
      <h1 className="text-3xl font-bold mb-6 text-brand-800">Your Queries</h1>
      <div className="space-y-4 mb-10">
        {queries.map((q) => (
          <Card key={q.id} className="p-4">
            <p className="font-semibold">Q: {q.question}</p>
            <p className="text-neutral-600">A: {q.answer}</p>
          </Card>
        ))}
      </div>

      {/* Messages Section */}
      <h2 className="text-2xl font-bold mb-4 text-brand-800">Messages</h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <Card key={msg.id} className="p-4 flex flex-col">
            <span className="font-semibold text-sm text-brand-600">{msg.sender}</span>
            <p className="text-neutral-700">{msg.content}</p>
          </Card>
        ))}
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg hover:bg-brand-700 transition"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Popup Modal */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Modal Header */}
          <div className="flex justify-between items-center bg-brand-600 text-white px-4 py-2">
            <span>Chatbot</span>
            <button onClick={() => setIsChatOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 h-64 overflow-y-auto space-y-2 text-neutral-700">
            <p>Hi! I’m your assistant. How can I help you today?</p>
          </div>

          {/* Chat Input */}
          <div className="flex border-t border-neutral-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="bg-brand-600 text-white px-4 py-2">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
