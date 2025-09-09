import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 rounded-lg p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-none mb-0">
                  GreenLife
                </h3>
                <p className="text-sm text-brand-200 leading-none">
                  Wellness Center
                </p>
              </div>
            </div>
            <p className="text-brand-200 leading-relaxed">
              Your journey to holistic wellness starts here. Experience the perfect blend of ancient wisdom and modern healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-brand-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-brand-200">
              <li>Ayurvedic Therapy</li>
              <li>Therapeutic Yoga</li>
              <li>Massage Therapy</li>
              <li>Meditation</li>
              <li>Nutritional Counseling</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-brand-200">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Wellness Street</p>
                  <p>Colombo 07, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span>+94 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <span>hello@greenlife.lk</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-brand-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-brand-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-brand-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-700 mt-8 pt-8 text-center text-brand-200">
          <p>&copy; {currentYear} GreenLife Wellness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;