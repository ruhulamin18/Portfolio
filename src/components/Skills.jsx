import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Terminal,
  GraduationCap,
} from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: <Globe size={22} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'Programming Languages',
      icon: <Code2 size={22} />,
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal size={22} />,
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 bg-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-6">
            My Skills
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of technologies, programming languages,
            and tools that I use to build modern software solutions.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-500 mb-6">
                {group.icon}
              </div>

              <h3 className="text-gray-900 text-xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exploring Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-8 rounded-3xl bg-white border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap
              className="text-cyan-500"
              size={24}
            />

            <h3 className="text-gray-900 text-xl font-semibold">
              Exploring & Growing
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              'Advanced React.js',
              'Backend Development',
              'Database Design',
              'Software Architecture',
              'Full Stack Development',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              🎓{' '}
              <span className="text-gray-900 font-medium">
                Daffodil International University
              </span>
            </p>

            <p className="text-gray-600 mt-2">
              Computer Science & Engineering (4th Year)
            </p>

            <p className="text-gray-600 mt-2">
              Current CGPA:
              <span className="text-cyan-500 font-semibold ml-2">
                3.64
              </span>
            </p>

            <p className="text-gray-600 mt-2">
              Strong foundation in Data Structures,
              Algorithms, Object-Oriented Programming,
              and Database Management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;