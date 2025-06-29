'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'ByBike Micromobility Infrastructure',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80',
      technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Bitay (Coincenter) Stake Mechanism ',
      description: 'A collaborative task management application with real-time updates, team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80',
      technologies: ['Next.js', 'Java', 'Spring Boot', 'MySQL'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Bitay Loyalty Program',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80',
      technologies: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Product Development' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-300 dark:bg-black">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-mesh-gradient"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg font-poppins text-gray-900 dark:text-white mb-6 text-shadow-soft">
            <span className="text-gradient-blue">My Projects</span>
          </h2>
          <p className="text-lg md:text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        {/* Fancy Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`relative px-8 py-3 rounded-full font-poppins font-semibold text-base transition-all duration-300 overflow-hidden ${
                filter === category.id
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-white'
              }`}
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'
              } rounded-full`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 rounded-full"></div>
              
              {/* Text */}
              <span className="relative z-10">{category.name}</span>
              
              {/* Active Indicator */}
              {filter === category.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Hover Light Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                      Featured
                    </div>
                  )}
                </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => {
                    const colors = [
                      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
                      'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
                      'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
                      'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
                      'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
                      'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200'
                    ];
                    return (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${colors[techIndex % colors.length]} text-xs font-medium rounded-full transition-transform duration-200 hover:scale-110`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/BlackBrandr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}