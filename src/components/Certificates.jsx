import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Code2,
  ExternalLink,
  GraduationCap,
  Medal,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';

const certificates = [
  {
    title: 'National Skill Standard Basic Course Certificate',
    organization: 'Skills Development Program',
    year: '2021',
    description:
      'Successfully completed a 360-hour skill development training program and gained practical industry-relevant technical skills.',
    icon: GraduationCap,
    link: '/certificates/National Skill Standard Basic Course Certificate.pdf',
  },
  {
    title: 'Machine Learning with Python',
    organization: 'Online Certification',
    year: '2026',
    description:
      'Learned machine learning fundamentals, data preprocessing, predictive modeling, and classification techniques using Python.',
    icon: BrainCircuit,
  },
  {
    title: 'Python Programming Certificate',
    organization: 'UniAthena',
    year: '2026',
    description:
      'Completed Python programming training covering fundamentals, problem solving, and programming concepts.',
    icon: Code2,
    link: '/certificates/python-programming.pdf',
  },
  {
    title: 'Public Relations Ambassador',
    organization: 'Skills Job',
    year: '2026',
    description:
      'Represented Skills Job initiatives and developed leadership, networking, communication, and public relations skills.',
    icon: Users,
  },
  {
    title: 'Take-off Contest Participation Certificate',
    organization: 'Daffodil International University',
    year: '2023',
    description:
      'Participated in innovation and competition activities that enhanced creativity, teamwork, and problem-solving abilities.',
    icon: Trophy,
    link: '/certificates/Take-off Contest Participation Certificate.pdf',
  },
  {
    title: 'Leadership Competition Participation Certificate',
    organization: 'Leadership Development Program',
    year: '2025',
    description:
      'Demonstrated leadership, communication, and teamwork skills through competitive activities.',
    icon: Medal,
    link: '/certificates/Leadership Competition Participation Certificate.pdf',
  },
  {
    title: 'GOEDU Online Certifications',
    organization: 'GOEDU',
    year: '2025',
    description:
      'Completed multiple online certification programs focused on professional and technical skill development.',
    icon: BadgeCheck,
    links: [
      {
        label: 'Art of Living',
        href: '/certificates/goedu/Art%20of%20Living%20for%20Students%E2%80%99%20Growth.pdf',
      },
      {
        label: 'Google Sheets',
        href: '/certificates/goedu/Google Sheets.pdf',
      },
      {
        label: 'Public Speaking',
        href: '/certificates/goedu/Public Speaking for Success.pdf',
      },
      {
        label: 'Soft & Hard Skill',
        href: '/certificates/goedu/Soft Skill and Hard Skill.pdf',
      },
    ],
  },
];

const summaryItems = [
  '7+ Certifications',
  'Leadership & Communication',
  'Programming & Machine Learning',
  'Continuous Learner',
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: 'easeOut',
    },
  }),
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="page-shell relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950"
    >
      <PortfolioBackground variant="certificates" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
            <Award size={14} />
            Certifications
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-950 dark:text-white md:text-5xl">
            Certifications & Achievements
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Professional certifications, training programs, competitions, and
            achievements that demonstrate my commitment to continuous learning,
            technical excellence, and leadership development.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.article
                key={certificate.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 opacity-80" />

                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-sm transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:group-hover:bg-cyan-400/20">
                    <Icon size={22} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {certificate.year}
                  </span>
                </div>

                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  {certificate.organization}
                </span>

                <h3 className="text-xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {certificate.description}
                </p>

                {certificate.links ? (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {certificate.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-700 transition-all hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:bg-cyan-500 dark:hover:text-white"
                      >
                        {link.label}
                        <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                ) : certificate.link ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition-all hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:bg-cyan-500 dark:hover:text-white"
                  >
                    View Certificate
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="mt-auto w-fit rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                    Proof will be added soon
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summaryItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                  <Sparkles size={16} />
                </span>

                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
