import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />

      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
