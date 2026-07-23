import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      'home',
      'education',
      'skills',
      'experience',
      'certificates',
      'projects',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'Education', href: '#education', sectionId: 'education' },
    { name: 'Skills', href: '#skills', sectionId: 'skills' },
    { name: 'Experience', href: '#experience', sectionId: 'experience' },
    { name: 'Certificates', href: '#certificates', sectionId: 'certificates' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  const cvLink = '/Ruhul_Amin_CV.pdf';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-4 dark:bg-slate-950/80 dark:border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" aria-label="Md. Ruhul Amin home">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center"
          >
            <div className="flex h-12 w-20 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-lg shadow-cyan-900/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-400 dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
              <img
                src={logo}
                alt="Ruhul Amin logo"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.sectionId
                    ? 'text-cyan-600 dark:text-cyan-300'
                    : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300'
                }`}
              >
                {link.name}
              </a>
            </motion.div>
          ))}

          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-white dark:text-cyan-200"
          >
            View My CV
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-cyan-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Toggle */}
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 border-b border-slate-200 overflow-hidden backdrop-blur-xl dark:bg-slate-950/95 dark:border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.sectionId
                      ? 'text-cyan-600 dark:text-cyan-300'
                      : 'text-slate-700 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 transition-colors hover:bg-cyan-500 hover:text-white dark:text-cyan-200"
              >
                View My CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
