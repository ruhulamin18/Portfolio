import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 text-xl font-bold">
              Md. Ruhul Amin
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Computer Science & Engineering Student | Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/ruhulamin18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.facebook.com/ruhulamin.ridoy018"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <Facebook size={18} />
            </a>

            <a
              href="mailto:mdruhulaminridoy18@gmail.com"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Md. Ruhul Amin. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;