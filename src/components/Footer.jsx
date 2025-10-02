import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-20 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="h-12 w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                 <img src={logo} alt="IELTS Excellence Institute" className="h-12 w-20 lg:h-14 lg:w-20 rounded-xl transition-transform group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">IELTS Excellence</h3>
                <p className="text-sm lg:text-base text-gray-400 font-medium">Institute</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xs">
              India's premier IELTS training institute with AI-powered learning and expert guidance. 
              Helping students achieve their international dreams since 2015.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              </a>
              <a href="#" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="#" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              </a>
              <a href="#" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg lg:text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="text-lg lg:text-xl font-bold text-white">IELTS Preparation</h4>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Speaking Practice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Writing Enhancement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Reading Strategies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Listening Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  Mock Tests
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2">
                  One-on-One Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg lg:text-xl font-bold text-white">Contact Us</h4>
            <div className="space-y-4 text-sm lg:text-base">
              <a href="tel:+919876543210" className="flex items-center space-x-3 group hover:translate-x-1 transition-transform">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors">+91 98765 43210</span>
              </a>
              <a href="mailto:info@ieltsexcellence.com" className="flex items-center space-x-3 group hover:translate-x-1 transition-transform">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors">info@ieltsexcellence.com</span>
              </a>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-1 flex-shrink-0" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  123 Education Hub, Sector 18<br/>
                  Bengaluru, Karnataka 560079
                </span>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="pt-2">
              <h5 className="font-semibold mb-3 text-base lg:text-lg text-white">Office Hours</h5>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                Mon - Sat: 9:00 AM - 8:00 PM<br/>
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-500 text-sm lg:text-base text-center lg:text-left">
              © 2025 IELTS Excellence Institute. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-sm lg:text-base">
              <a href="#" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-105">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;