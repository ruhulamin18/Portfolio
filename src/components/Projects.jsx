import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Globe,
  Layers,
  Github,
  ExternalLink,
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      category: 'Management System',
      description:
        'A student management application designed to manage student records, attendance, academic information, and profile management efficiently.',
      tech: ['Python', 'MySQL', 'OOP'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      github: '#',
      live: '#',
    },

    {
      title: 'Library Management System',
      category: 'Database Application',
      description:
        'A library management system developed to handle book records, member information, issue and return tracking, and inventory management.',
      tech: ['Java', 'MySQL', 'Database'],
      icon: <Globe size={22} />,
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      github: '#',
      live: '#',
    },

    {
      title: 'Parking Management System',
      category: 'Management System',
      description:
        'A parking management system designed to manage vehicle entries, exits, parking slot allocation, and parking records efficiently.',
      tech: ['Java', 'MySQL', 'OOP'],
      icon: <Terminal size={22} />,
      image:
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80',
      github: '#',
      live: '#',
    },

    {
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      description:
        'A responsive portfolio website showcasing personal information, technical skills, academic achievements, projects, and contact details.',
      tech: ['React.js', 'JavaScript', 'CSS', 'GitHub'],
      icon: <Layers size={22} />,
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      github: 'https://github.com/ruhulamin18',
      live: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-2 px-5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-6">
            My Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Academic & Personal Projects
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of academic and personal projects that showcase my
            programming knowledge, problem-solving abilities, and software
            development journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-cyan-500 border border-gray-200 shadow-sm">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-white border-t border-gray-200">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-500 mb-3 block">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-5 border-t border-gray-200">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold flex items-center gap-2 text-gray-600 hover:text-cyan-500 transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}

                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold flex items-center gap-2 text-gray-600 hover:text-cyan-500 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Preview
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