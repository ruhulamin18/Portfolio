import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import PortfolioBackground from './PortfolioBackground';
import profilePic from '../assets/ruhul.jpg';

const Hero = () => {
  const highlights = [
    'React Frontend',
    'Responsive UI',
    'Machine Learning',
    'Python',
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '4th', label: 'Year CSE Student' },
    { number: '3.64', label: 'Current CGPA' },
  ];

  return (
    <section
      id="home"
      className="page-shell relative min-h-screen overflow-hidden bg-slate-50 pt-28 dark:bg-slate-950"
    >
      <PortfolioBackground variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200"
            >
              Available for Internship
            </motion.span>

            <h1 className="mb-6 mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl">
              Md.{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-emerald-300">
                Ruhul Amin
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300 md:text-2xl lg:mx-0">
              Aspiring Software Engineer | Frontend Developer
            </p>

            <p className="mx-auto -mt-3 mb-8 max-w-2xl text-base italic leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg lg:mx-0 lg:whitespace-nowrap">
              Focused on creating responsive, scalable, and user-centric digital experiences.
            </p>

            <div className="mx-auto mb-10 max-w-none text-base leading-[1.9] text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0">
              <p className="text-justify">
                I'm a Computer Science and Engineering student with a passion for building modern, responsive, and user-centric web applications. Skilled in React.js, Tailwind CSS, JavaScript, Python, and MySQL, I enjoy solving real-world problems through clean and efficient code. I'm currently seeking an internship or entry-level Software Engineer or Frontend Developer role where I can contribute to impactful projects while continuously expanding my technical expertise.
              </p>
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="/Ruhul_Amin_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-cyan-600 text-white rounded-xl font-medium shadow-lg shadow-cyan-600/20 transition-all hover:bg-cyan-500 hover:-translate-y-1 flex items-center gap-2"
              >
                View My CV
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-medium shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Me
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center pb-10 lg:pb-0"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[2rem] border border-slate-200 bg-white/75 p-4 shadow-2xl shadow-cyan-900/10 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30"
            >
              <img
                src={profilePic}
                alt="Md. Ruhul Amin"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-[1.5rem] border border-white/80 shadow-xl dark:border-white/10"
              />

              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-slate-200 bg-white/95 p-4 text-center shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                  Turning Ideas Into Interactive Web Experiences
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + index * 0.08 }}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white/75 p-8 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:36px_36px] opacity-70" />
              <div className="absolute -left-5 bottom-6 h-16 w-16 rotate-[-7deg] rounded-lg border border-cyan-300/35 bg-cyan-400/10 transition-transform duration-500 group-hover:rotate-6 dark:border-cyan-300/20" />
              <div className="absolute -right-5 top-8 h-16 w-16 rotate-[15deg] rounded-lg border border-emerald-300/30 bg-emerald-400/10 transition-transform duration-500 group-hover:-rotate-6 dark:border-emerald-300/20" />

              <div className="relative">
                <h3 className="text-5xl font-black tracking-tight text-cyan-500 md:text-6xl">
                  {item.number}
                </h3>

                <p className="mt-3 text-base font-medium text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
