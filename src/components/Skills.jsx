import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Database,
  GraduationCap,
  MonitorSmartphone,
} from 'lucide-react';
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiVscodium,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss, color: '#1572B6' },
        {
          name: 'Responsive Design',
          icon: MonitorSmartphone,
          color: '#2563EB',
        },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'VS Code', icon: SiVscodium, color: '#007ACC' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      ],
    },
  ];

  const allSkills = skillGroups.flatMap((group) => group.skills);

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
              <h3 className="text-slate-950 dark:text-white text-xl font-semibold mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: SkillIcon, color }) => (
                  <span
                    key={name}
                    className="flex h-20 w-24 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 text-center text-xs font-semibold leading-tight text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-200"
                  >
                    <SkillIcon size={26} color={color} aria-hidden="true" />
                    <span>{name}</span>
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
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white px-5 py-5 shadow-sm dark:border-white/10 dark:bg-white/10 sm:flex-row sm:items-center sm:gap-5"
        >
          <div className="shrink-0 border-b border-slate-200 pb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-600 dark:border-white/10 dark:text-cyan-300 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5">
            Technologies I Work With
          </div>

          <div className="min-w-0 overflow-hidden" aria-label="Technologies I work with">
            <div className="skills-marquee-track flex w-max items-center gap-7 pr-7">
              {[...allSkills, ...allSkills].map(({ name, icon: SkillIcon, color }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex min-w-18 flex-col items-center gap-1.5 text-center"
                >
                  <SkillIcon size={34} color={color} aria-hidden="true" />
                  <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

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
