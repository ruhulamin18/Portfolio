import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Developer',
    organization: 'Self-Learning',
    period: '2023 - Present',
    icon: Code2,
    accent: 'text-emerald-600 dark:text-emerald-300',
    points: [
      'Build responsive websites using React.js and Tailwind CSS.',
      'Create modern and user-friendly web interfaces.',
      'Continuously improve frontend development skills.',
    ],
  },
  {
    role: 'Academic Project Developer',
    organization: 'Academic Projects',
    period: '2024 - Present',
    icon: GraduationCap,
    accent: 'text-violet-600 dark:text-violet-300',
    points: [
      'Develop academic software projects and management systems.',
      'Apply programming and database concepts to solve real-world problems.',
      'Improve software development and problem-solving skills.',
    ],
  },
  {
    role: 'Machine Learning Research Enthusiast',
    organization: 'Research & Data Analysis',
    period: '2025 - Present',
    icon: BrainCircuit,
    accent: 'text-rose-600 dark:text-rose-300',
    points: [
      'Work on machine learning and data analysis projects.',
      'Apply Logistic Regression for prediction and classification tasks.',
      'Analyze datasets and evaluate model performance.',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="page-shell relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <PortfolioBackground variant="experience" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
            <BriefcaseBusiness size={14} />
            Experience
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-950 dark:text-white md:text-5xl">
            Practical Growth Journey
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            A focused timeline of communication, frontend development,
            academic project work, and machine learning research practice.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-slate-200 to-emerald-300 dark:from-cyan-400/40 dark:via-white/10 dark:to-emerald-400/40 md:block" />

          <div className="grid gap-5">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition-colors group-hover:border-cyan-300 group-hover:bg-cyan-50 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200 dark:group-hover:bg-cyan-400/10">
                      <Icon size={21} className={item.accent} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-bold leading-snug text-slate-950 dark:text-white">
                            {item.role}
                          </h3>

                          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                            <Sparkles size={14} className={item.accent} />
                            {item.organization}
                          </p>
                        </div>

                        <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
