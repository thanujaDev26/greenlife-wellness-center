import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-800">Contact Us</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Get in touch with our therapists, call center, or visit one of our branches.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Therapists */}
          <div className="bg-white shadow-soft rounded-2xl p-6 text-center">
            <Mail className="mx-auto h-10 w-10 text-brand-600 mb-4" />
            <h2 className="text-xl font-semibold text-brand-800 mb-2">
              Therapists
            </h2>
            <p className="text-neutral-600">Email our wellness therapists</p>
            <p className="mt-2 font-medium text-brand-600">
              therapists@wellness.com
            </p>
          </div>

          {/* Call Center */}
          <div className="bg-white shadow-soft rounded-2xl p-6 text-center">
            <Phone className="mx-auto h-10 w-10 text-brand-600 mb-4" />
            <h2 className="text-xl font-semibold text-brand-800 mb-2">
              Call Center
            </h2>
            <p className="text-neutral-600">Available 24/7 for inquiries</p>
            <p className="mt-2 font-medium text-brand-600">+94 112 345 678</p>
          </div>

         
          <div className="bg-white shadow-soft rounded-2xl p-6 text-center">
            <MapPin className="mx-auto h-10 w-10 text-brand-600 mb-4" />
            <h2 className="text-xl font-semibold text-brand-800 mb-2">
              Branches
            </h2>
            <ul className="text-neutral-600 space-y-1">
              <li>Thimbirigasyaya - +94 112 111 111</li>
              <li>Kirulapone - +94 112 222 222</li>
              <li>Maharagama - +94 112 333 333</li>
              <li>Galle Face - +94 112 444 444</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
