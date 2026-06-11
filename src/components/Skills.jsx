import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Code2,
  Database,
  GraduationCap,
  Globe,
  Terminal,
} from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: <Globe size={22} />,
      skills: [
        'React.js',
        'JavaScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Responsive Design',
      ],
    },
    {
      title: 'Programming Languages',
      icon: <Code2 size={22} />,
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal size={22} />,
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'React Router'],
    },
  ];

  const learning = [
    'Advanced React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Full Stack Development',
  ];

  return (
    <section
      id="skills"
      className="page-shell py-28 bg-slate-50 relative overflow-hidden dark:bg-slate-950"
    >
      <PortfolioBackground variant="skills" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-6 dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-200">
            My Skills
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-950 dark:text-white mb-6">
            Technical Skills
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies, programming languages, and tools that I use to build
            modern, responsive, and scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300 dark:bg-white/10 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-500 mb-6 dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-200">
                {group.icon}
              </div>

              <h3 className="text-slate-950 dark:text-white text-xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 dark:bg-white/10 dark:border-white/10"
        >
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap className="text-cyan-500" size={24} />

            <h3 className="text-slate-950 dark:text-white text-xl font-semibold">
              Currently Learning
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {learning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 dark:border-white/10">
            <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <Database size={18} className="text-cyan-500" />
              <span className="text-slate-950 dark:text-white font-medium">
                Daffodil International University
              </span>
            </p>

            <p className="text-slate-600 dark:text-slate-400 mt-2">
              B.Sc. in Computer Science & Engineering (4th Year)
            </p>

            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Current CGPA:
              <span className="text-cyan-500 font-semibold ml-2">3.64</span>
            </p>

            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Strong foundation in Data Structures, Algorithms,
              Object-Oriented Programming, Database Management, and Software
              Development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
