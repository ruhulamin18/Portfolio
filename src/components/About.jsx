import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    {
      number: "10+",
      title: "Projects Completed",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "4th",
      title: "Year Student",
    },
    {
      number: "100%",
      title: "Dedication",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "C",
    "C++",
    "Java",
    "Python",
  ];

  return (
    <section
      id="about"
      className="py-28 bg-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-cyan-500 uppercase tracking-[4px] text-sm font-semibold">
            About Me
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-5 mb-8 leading-tight">
            Passionate About Building
            <br />
            Digital Experiences
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I'm Md. Ruhul Amin, a Computer Science & Engineering
            student at Daffodil International University. I specialize
            in frontend development and modern web technologies.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            I enjoy creating responsive, user-friendly web applications
            and continuously improving my programming skills. My goal is
            to become a professional Software Engineer and contribute to
            innovative solutions that make a real-world impact.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-6">
              <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wider">
                Location
              </h4>
              <p className="text-gray-900 font-medium">
                Sirajganj, Bangladesh
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-6">
              <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wider">
                Education
              </h4>
              <p className="text-gray-900 font-medium">
                CSE - 4th Year
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-6">
              <h4 className="text-gray-500 text-sm mb-2 uppercase tracking-wider">
                Goal
              </h4>
              <p className="text-gray-900 font-medium">
                Software Engineer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 text-center hover:border-cyan-500 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-500 mb-3">
                {item.number}
              </h3>

              <p className="text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;