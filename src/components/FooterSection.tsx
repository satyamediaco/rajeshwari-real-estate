
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">Team Rajeshwari</h3>
            <p className="text-gray-300">
              India's #1 Real Estate Training Company. Transforming lives through proven sales techniques and mentorship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400 cursor-pointer" />
              <Youtube className="h-6 w-6 text-red-500 hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Training Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Training Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Beginner's Course</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Advanced Sales</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Investment Strategies</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Team Leadership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+91-98765-43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@teamrajeshwari.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Team Rajeshwari. All rights reserved. | 
            <a href="#" className="hover:text-yellow-400 transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-400 transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
