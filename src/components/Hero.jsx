import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import profilePic from '../assets/ruhul.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Md. Ruhul Amin</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-medium">
              Computer Science & Engineering Student | Frontend Developer
            </p>

            <p className="text-gray-500 max-w-2xl mb-12 text-lg leading-relaxed">
              I am a passionate Computer Science & Engineering student with
              a strong interest in Frontend Development and modern web
              technologies. I enjoy building responsive, user-friendly,
              and visually appealing web applications using React.js,
              JavaScript, and modern development tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              {/* View CV Button */}
              <a
                href="/Ruhul_Amin_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-cyan-600 text-white rounded-xl font-medium transition-all hover:bg-cyan-700 hover:-translate-y-1 flex items-center gap-2"
              >
                View My CV
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Contact Button */}
              <a
                href="mailto:mdruhulaminridoy18@gmail.com"
                className="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl font-medium shadow-sm transition-all hover:bg-gray-100"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 text-gray-500 text-sm space-y-2">
              <p>📍 Shahzadpur, Sirajganj, Bangladesh</p>
              <p>📧 mdruhulaminridoy18@gmail.com</p>
              <p>📱 +8801816648095</p>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl scale-110"></div>

              <img
                src={profilePic}
                alt="Md. Ruhul Amin"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;