'use client'

import { motion } from 'framer-motion'
import ReactIcon from './icons/ReactIcon'
import NextJsIcon from './icons/NextJsIcon'
import JavaScriptIcon from './icons/JavaScriptIcon'
import TailwindIcon from './icons/TailwindIcon'
import Html5Icon from './icons/Html5Icon'
import Css3Icon from './icons/Css3Icon'
import JavaIcon from './icons/JavaIcon'
import SpringBootIcon from './icons/SpringBootIcon'
import GitIcon from './icons/GitIcon'
import VercelIcon from './icons/VercelIcon'
import FigmaIcon from './icons/FigmaIcon'
import VSCodeIcon from './icons/VSCodeIcon'
import PostgreSQLIcon from './icons/PostgreSQLIcon'
import MongoDBIcon from './icons/MongoDBIcon'
import MySQLIcon from './icons/MySQLIcon'

export default function About() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React', icon: <ReactIcon className="w-8 h-8" /> },
        { name: 'Next.js', icon: <NextJsIcon className="w-8 h-8" /> },
        { name: 'JavaScript', icon: <JavaScriptIcon className="w-8 h-8" /> },
        { name: 'Tailwind CSS', icon: <TailwindIcon className="w-8 h-8" /> },
        { name: 'HTML5', icon: <Html5Icon className="w-8 h-8" /> },
        { name: 'CSS3', icon: <Css3Icon className="w-8 h-8" /> }
      ]
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Java', icon: <JavaIcon className="w-8 h-8" /> },
        { name: 'Spring Boot', icon: <SpringBootIcon className="w-8 h-8" /> }
      ]
    },
    {
      category: 'Database Technologies',
      technologies: [
        { name: 'PostgreSQL', icon: <PostgreSQLIcon className="w-8 h-8" /> },
        { name: 'MongoDB', icon: <MongoDBIcon className="w-8 h-8" /> },
        { name: 'MySQL', icon: <MySQLIcon className="w-8 h-8" /> }
      ]
    },
    {
      category: 'Development Tools',
      technologies: [
        { name: 'Git', icon: <GitIcon className="w-8 h-8" /> },
        { name: 'Vercel', icon: <VercelIcon className="w-8 h-8" /> },
        { name: 'Figma', icon: <FigmaIcon className="w-8 h-8" /> },
      ]
    }
  ]

  const experiences = [
    {
      title: 'Product Development Specialist',
      company: 'Doktorsitesi ',
      period: '2025 - Present',
      description: 'I take part in the development of AI tools and virtual POS payment integrations.'
    },
    {
      title: 'Technical Co-Founder',
      company: 'ByBike Micromobility Technologies',
      period: '2022 - 2024',
      description: 'I led the end-to-end development of a scalable micromobility software infrastructure, ' +
          'from designing the system architecture to implementing backend services, ensuring a robust and efficient operational structure.'
    },
    {
      title: 'Product Development Specialist',
      company: 'Bitay Turkiye (Coincenter) Inc.',
      period: '2022 - 2023',
      description: 'I spearheaded the design and development of a comprehensive staking mechanism and a customer loyalty program.'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-section-modern"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg font-poppins text-gray-900 dark:text-white mb-6 text-shadow-soft">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg md:text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            I&apos;m a passionate software developer with a love for creating innovative solutions 
            that bridge the gap between design and functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-6 text-shadow-soft">
                <span className="text-gradient-blue">My Story</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed text-lg">
                With over <span className="font-semibold text-blue-600 dark:text-blue-400">4 years</span> of experience as a <span className="font-semibold text-blue-600 dark:text-blue-400">product developer</span> and
                <span className="font-semibold text-blue-600 dark:text-blue-400"> software developer</span>,
                I specialize in building end-to-end products—from designing intuitive user experiences and scalable infrastructures to delivering production-ready software
                aligned with business needs.</p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed text-lg">
                My journey began with a curiosity about how things work, evolving into a passion for transforming ideas into impactful digital
                products. I excel at understanding <span className="font-semibold text-blue-600 dark:text-blue-400">business requirements</span> and translating them into efficient, maintainable,
                and scalable software solutions, ensuring that every product I build serves real user needs while maintaining technical excellence.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed text-lg">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When I’m not coding, I’m exploring new frameworks,
                contributing to open-source projects, or sharing knowledge with the developer community, always aiming to grow while enabling others to grow alongside me.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 dark:text-white mb-8 text-shadow-soft">
                <span className="text-gradient">Experience</span>
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                      <div className="pl-4">
                        <h4 className="text-lg font-poppins font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base mt-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center mt-2 mb-3">
                          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                            <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 dark:text-white mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</span>
            </h3>
            
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-8 pb-4 border-b-2 border-blue-600 tracking-wide">
                    <span className="text-gray-900 dark:text-white">
                      {category.category}
                    </span>
                  </h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                          scale: 1.05,
                          rotate: [0, -1, 1, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (techIndex * 0.05),
                          ease: "easeOut"
                        }}
                        viewport={{ 
                          once: true,
                          margin: "-50px",
                          amount: 0.3
                        }}
                        className="group"
                      >
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1">
                          <div className="flex justify-center items-center mb-2 group-hover:scale-110 transition-transform duration-300">
                            {typeof tech.icon === 'string' ? (
                              <span className="text-2xl">{tech.icon}</span>
                            ) : (
                              tech.icon
                            )}
                          </div>
                          <p className="text-sm font-poppins font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-wide">
                            {tech.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}