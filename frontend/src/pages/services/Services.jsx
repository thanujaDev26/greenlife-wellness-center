import React from "react";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import { services } from "../../data/services.jsx";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop"
            alt="Wellness services background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-800 mb-6 leading-tight">
            Explore Our <span className="text-accent-600">Wellness Services</span>
          </h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Discover a holistic range of treatments and therapies designed to restore balance to your body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 mb-6">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-600 bg-brand-100 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-sm text-neutral-500">{service.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-800 group-hover:text-brand-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-bold text-accent-600">
                      {service.price}
                    </span>
                    <ArrowRight className="h-5 w-5 text-brand-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Take the first step towards better health, balance, and inner peace with our professional wellness services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Book Your Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white text-brand-700 hover:bg-brand-50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
