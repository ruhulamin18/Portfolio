import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  BrainCircuit,
  Terminal,
  Globe,
  Layers,
  Github,
  ExternalLink,
  Image,
  Search,
} from 'lucide-react';

const githubProfile = 'https://github.com/ruhulamin18';

const Projects = () => {
  const projects = [
    
    {
      title: 'AI GitHub Portfolio Analyzer',
      category: 'Full Stack / AI Web Application',
      status: 'Gemini AI powered',
      description:
        'AI-powered full-stack web application that analyzes GitHub portfolios, evaluates repository health, identifies skill gaps, and provides personalized career insights using Google Gemini AI.',
      tech: ['React', 'Full Stack', 'Google Gemini AI', 'GitHub API'],
      icon: <BrainCircuit size={22} />,
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      github: 'https://github.com/ruhulamin18/ai-github-portfolio-analyzer',
      live: 'https://ai-github-portfolio-analyzer.vercel.app/',
    },

    {
      title: 'Purabi General Insurance Digital Portal',
      category: 'Frontend / Insurance Platform',
      status: 'Enterprise portal',
      description:
        'Modern React-based digital insurance platform for instant quotations, health plan comparison, claim tracking, and secure payment workflows with a responsive, enterprise-focused user experience.',
      tech: ['React', 'JavaScript', 'Responsive UI', 'Payment Workflows'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      github: 'https://github.com/ruhulamin18/purabi-insurance-portal',
      live: 'https://purabi-insurance-portal.vercel.app',
    },

    {
      title: 'GitHub Workspace',
      category: 'Full Stack / React Web Application',
      status: 'Mini GitHub client',
      description:
        ' Modern React-based GitHub workspace for exploring repositories, developer profiles, and GitHub data with search, favorites, collections, authentication, notifications, and personalized dashboard features.',
      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'Context API',
        'GitHub REST API',
      ],
      icon: <Search size={22} />,
      image:
        'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
      github: 'https://github.com/ruhulamin18/github-workspace',
      live: 'https://github-workspace-ruhulamin18.vercel.app/',
    },

    {
      title: 'Personal Portfolio Website',
      category: 'Frontend Development',
      status: 'Live-ready',
      description:
        'A modern and responsive portfolio website built using React.js and Tailwind CSS. It showcases my skills, projects, education, and contact information with smooth animations and clean user experience.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      github: 'https://github.com/ruhulamin18/Portfolio',
      live: 'https://mdruhulamin18.vercel.app',
    },

    {
      title: 'Dhaka Metro Rail 3D Simulation',
      category: '3D Graphics / OpenGL Simulation',
      status: 'MRT Line-6 simulation',
      description:
        'Interactive 3D Dhaka Metro Rail (MRT Line-6) simulation built with C and OpenGL, featuring a moving train, station and city environments, day/night modes, animation, lighting, and interactive camera controls.',
      tech: ['C', 'OpenGL', '3D Graphics', 'Animation'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80',
      github: 'https://github.com/ruhulamin18/MRT-6-Metro-Simulation',
      live: 'https://www.youtube.com/watch?v=kjZAIXfnf2w',
    },

    {
      title: 'FrameCraft',
      category: 'Frontend / JavaScript Web Application',
      status: 'Photography gallery',
      description:
        'Premium photography gallery built with vanilla JavaScript, featuring responsive layouts, category filtering, search, favorites, fullscreen lightbox, slideshow mode, and EXIF-style image details.',
      tech: ['HTML', 'CSS', 'Vanilla JavaScript', 'Responsive UI'],
      icon: <Image size={22} />,
      image:
        'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80',
      github: 'https://github.com/ruhulamin18/CodeAlpha-image-gallery',
      live: 'https://framecraft-image-gallery.vercel.app',
    },
    
    {
      title: 'Parking Management System',
      category: 'Software Development',
      status: 'Academic',
      description:
        'Developed a parking management system to manage vehicle entry, exit, and parking records. Integrated SQLite for efficient data storage and parking record management.',
      tech: ['Python', 'SQLite'],
      icon: <Terminal size={22} />,
      image:
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80',
      github: 'https://github.com/ruhulamin18/ParkingManagementSystem',
      live: 'https://parkingmanagementsystem-n6wf.onrender.com/',
    },

    {
      title: 'Student Management System',
      category: 'Web Application',
      status: 'Academic',
      description:
        'Developed a web-based student management system with CRUD functionality. Integrated MySQL for secure and efficient data management.',
      tech: ['Python', 'Flask', 'MySQL'],
      icon: <Terminal size={22} />,
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      github: 'https://github.com/ruhulamin18/Student-Management-System',
      live: null,
    },

    {
      title: 'DayList – Smart To-Do App',
      category: 'Frontend / React Web Application',
      status: 'Productivity app',
      description:
        'Modern and responsive React-based task management app for organizing daily tasks with categories, priorities, search, filtering, progress tracking, dark mode, and local storage persistence.',
      tech: ['React', 'JavaScript', 'Responsive UI', 'Local Storage'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      github: 'https://github.com/ruhulamin18/To-Do-List',
      live: 'https://to-do-list-five-rust.vercel.app/',
    },

    {
      title: 'Network Topology Design',
      category: 'Networking',
      status: 'Cisco lab',
      description:
        'Designed and configured an enterprise network topology with routers, multilayer switches, subnetting, VLAN planning, and IP addressing schemes.',
      tech: ['Networking', 'Cisco', 'Subnetting'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      github: githubProfile,
      live: null,
    },


    {
      title: 'Library Management System',
      category: 'Database Application',
      status: 'Academic',
      description:
        'A database-driven library management system designed to manage books, members, issue-return records, and inventory tracking efficiently.',
      tech: ['Java', 'MySQL', 'Database Design'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      github: githubProfile,
      live: null,
    },
    
  ];

  return (
    <section
      id="projects"
      className="page-shell relative overflow-hidden py-20 bg-slate-50 border-y border-slate-200 dark:bg-slate-950 dark:border-white/10"
    >
      <PortfolioBackground variant="projects" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-widest uppercase mb-5 dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-200">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-950 dark:text-white">
            Featured Projects
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            A collection of academic, software development, machine learning,
            and web development projects that demonstrate my technical skills
            and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:shadow-black/20"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/70 bg-white/90 text-cyan-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/85 dark:text-cyan-300">
                    {project.icon}
                  </div>

                  <span className="rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-200">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex min-h-[320px] flex-col border-t border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-transparent">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  {project.category}
                </span>

                <h3 className="mb-2 text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="mb-4 space-y-2 text-xs font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mb-4 mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-300"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      Details on request
                    </span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-cyan-500"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
