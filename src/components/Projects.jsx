import React from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Terminal,
  Globe,
  Layers,
  Github,
  ExternalLink,
  Search,
} from 'lucide-react';

const githubProfile = 'https://github.com/ruhulamin18';

const Projects = () => {
  const projects = [
    {
      title: 'GitHub Workspace',
      category: 'Full Stack / React Web Application',
      status: 'Mini GitHub client',
      description:
        'A React-based mini GitHub client for exploring developers, repositories, collections, favorites, activity, notifications, and personalized settings through a clean interactive interface.',
      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'Context API',
        'GitHub REST API',
      ],
      features: [
        'Fake auth with login and register flow',
        'User, repository, and advanced filtered search',
        'Favorites, collections, activity feed, and settings',
      ],
      icon: <Search size={22} />,
      image:
        'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80',
      github: 'https://github.com/ruhulamin18/github-workspace',
      live: null,
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
      github: githubProfile,
      live: null,
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
      github: githubProfile,
      live: null,
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
      title: 'NeuroGuard AI',
      category: 'Machine Learning',
      status: 'Healthcare AI',
      description:
        'A machine learning-based mortality prediction system for critically ill patients using healthcare datasets, risk analysis, and predictive analytics.',
      tech: ['Machine Learning', 'Python', 'Healthcare AI'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
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
      github: githubProfile,
      live: null,
    },

    {
      title: 'Mobile Banking User Churn Analysis',
      category: 'Machine Learning',
      status: 'Data project',
      description:
        'A machine learning project focused on predicting customer churn in mobile banking services using data analysis and predictive modeling techniques.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80',
      github: githubProfile,
      live: null,
    },

    {
      title: 'Logistic Regression Research Project',
      category: 'Research & Data Science',
      status: 'Research',
      description:
        'A research-oriented project applying Logistic Regression for predictive analysis and classification tasks using real-world datasets.',
      tech: ['Python', 'Logistic Regression', 'Research'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
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
