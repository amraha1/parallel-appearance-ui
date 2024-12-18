import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return (
        <footer className="bg-[#0A0A0A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <img src="/logo.png" alt="Flosy Tech Logo" style={{height:'190px'}} />
              <p className="text-gray-400 text-sm leading-relaxed">
                Our services encompass the entire website development lifecycle. We start by understanding your business goals.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
              <ul className="space-y-4">
                {['HOME', 'SERVICES', 'PACKAGES', 'BLOG', 'ABOUT US', 'CONTACT US'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Detail */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Detail</h3>
              <div className="space-y-4">
                <p className="text-gray-400">Feel free to contact & reach us !</p>
                <p className="text-gray-400">
                  Address: B-12/A Street 1,Block 14 Gulistan-e-Johar, Karachihi, Pakistan
                </p>
                <p className="text-gray-400">
                  Email:{" "}
                  <a href="mailto:info@flosytech.com" className="text-blue-400 hover:underline">
                    info@flosytech.com
                  </a>
                </p>
                <p className="text-gray-400">
                  Phone:{" "}
                  <a href="tel:+923313488993" className="text-blue-400 hover:underline">
                    +92 331 3488993
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-12 mb-8">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-8">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Support
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Terms & Condition
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Copyright © 2024 Flosy Tech. Powered by WordPress</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/03452169216"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </a>
      </footer>
    
  )
}

export default Footer