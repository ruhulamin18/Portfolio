import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronUp,
  Facebook,
  Github,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ruhulamin18',
    icon: Github,
    className:
      'hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-950',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ruhulamin.ridoy018',
    icon: Facebook,
    className: 'hover:border-blue-600 hover:bg-blue-600 hover:text-white',
  },
  {
    label: 'Email',
    href: 'mailto:mdruhulaminridoy18@gmail.com',
    icon: Mail,
    className: 'hover:border-cyan-600 hover:bg-cyan-600 hover:text-white',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801816648095',
    icon: MessageSquare,
    className: 'hover:border-emerald-500 hover:bg-emerald-500 hover:text-white',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_35%),linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[8%] top-8 h-16 w-16 rounded-lg border border-cyan-300/20 bg-cyan-400/5 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 16, 0], rotate: [0, -7, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[12%] bottom-10 h-20 w-20 rounded-full border border-emerald-300/15 bg-emerald-400/5 shadow-2xl shadow-cyan-950/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{ x: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[28%] bottom-6 h-px w-32 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
        />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 top-6 z-20 grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/40 bg-slate-900/80 text-cyan-200 shadow-lg shadow-cyan-950/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500 hover:text-white"
      >
        <ChevronUp size={20} />
      </button>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative py-12 text-center md:py-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-6 flex flex-wrap justify-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon, className }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-cyan-400/30 bg-cyan-500 text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 ${className}`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <h2 className="text-2xl font-black tracking-tight text-white">
              Md.{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                Ruhul Amin
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              Frontend Developer, CSE student, and machine learning enthusiast
              building responsive web experiences with React.js and modern UI
              tools.
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-black uppercase tracking-[0.22em] text-white transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a
                href="mailto:mdruhulaminridoy18@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"
              >
                <Mail size={13} className="text-cyan-300" />
                Email
              </a>
              <span className="hidden h-3 w-px bg-cyan-400/50 sm:block" />
              <a
                href="tel:+8801816648095"
                className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"
              >
                <Phone size={13} className="text-cyan-300" />
                Call
              </a>
              <span className="hidden h-3 w-px bg-cyan-400/50 sm:block" />
              <span className="inline-flex items-center gap-2">
                <MapPin size={13} className="text-cyan-300" />
                Sirajganj, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cyan-300/20 bg-cyan-600/95">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white sm:flex-row">
          <p>
            &copy; {year} Md. Ruhul Amin. All rights reserved.
          </p>

          <p>
            Built with React.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
