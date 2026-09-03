import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  MapPin,
  School,
  Sparkles,
} from 'lucide-react';
import PortfolioBackground from './PortfolioBackground';
import diuLogo from '../assets/DIU.png';
import puthiaLogo from '../assets/Puthia.png';
import shahjadpurLogo from '../assets/Shahjadpur Govt Collage.png';

const educationItems = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Daffodil International University',
    status: 'Current Status: 4th Year',
    result: 'SGPA: 3.64 out of 4.00',
    location: 'Dhaka, Bangladesh',
    icon: GraduationCap,
    logo: diuLogo,
    accent: 'text-cyan-600 dark:text-cyan-300',
    details: [],
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C)',
    institution: 'Shahjadpur Govt. College',
    group: 'Group: Science',
    status: 'Year of Passing: 2022',
    result: 'GPA 4.75 out of 5.00',
    location: 'Board: Rajshahi',
    icon: BookOpen,
    logo: shahjadpurLogo,
    accent: 'text-emerald-600 dark:text-emerald-300',
    details: [],
  },
  {
    degree: 'Secondary School Certificate (S.S.C)',
    institution: 'Puthia High School',
    group: 'Group: Science',
    status: 'Year of Passing: 2020',
    result: 'GPA 5.00 out of 5.00',
    location: 'Board: Rajshahi',
    icon: School,
    logo: puthiaLogo,
    accent: 'text-blue-600 dark:text-blue-300',
    details: [],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="page-shell relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <PortfolioBackground variant="about" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
            <GraduationCap size={14} />
            Education
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-950 dark:text-white md:text-5xl">
            Academic Background
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            My academic journey reflects a strong foundation in science,
            computer engineering, problem solving, and continuous technical
            growth.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 opacity-80" />

                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg border border-cyan-200 bg-white p-2 text-cyan-600 shadow-sm transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-50 dark:border-cyan-400/30 dark:bg-white/10 dark:text-cyan-200 dark:group-hover:bg-cyan-400/10">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <Icon size={24} className={item.accent} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold leading-snug text-slate-950 dark:text-white">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-base font-semibold text-cyan-600 dark:text-cyan-300">
                          {item.institution}
                        </p>

                        {item.group && (
                          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                            {item.group}
                          </p>
                        )}
                      </div>

                      <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {item.status}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <p className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        <Sparkles size={16} className="text-cyan-500" />
                        {item.result}
                      </p>

                      <p className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        <MapPin size={16} className="text-cyan-500" />
                        {item.location}
                      </p>
                    </div>

                    {item.details.length > 0 && (
                      <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
