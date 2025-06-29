'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Modern Background Layer */}
      <div className="absolute inset-0 bg-hero-modern"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20"></div>
      
      {/* Floating Elements - More Subtle */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 floating-delay-1"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 floating-delay-2"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-8 floating"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Large Background Profile Image - Behind Name - Shifted Up and Bigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-0"
          >
            <div className="relative">
              {/* Multiple gradient layers for depth */}
              <div className="absolute -inset-16 bg-gradient-to-br from-blue-500/12 via-purple-500/12 to-cyan-500/12 rounded-full blur-3xl"></div>
              <div className="absolute -inset-12 bg-gradient-to-br from-blue-600/18 to-purple-600/18 rounded-full blur-2xl"></div>
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-35 blur-lg"></div>
              
              {/* Main photo with transparent background - Even Bigger */}
              <div className="relative w-[28rem] h-[28rem] flex items-center justify-center">
                <img 
                  src="/profile.png"
                  alt="Burak Karataş"
                  className="w-full h-full object-contain opacity-88"
                  style={{
                    filter: 'contrast(1.05) brightness(1.05) saturate(1.1)',
                  }}
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-10 h-10 bg-blue-500 rounded-full opacity-45 floating"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full opacity-45 floating-delay-1"></div>
              <div className="absolute top-1/3 -left-10 w-6 h-6 bg-cyan-500 rounded-full opacity-45 floating-delay-2"></div>
            </div>
          </motion.div>

          {/* Name and Title - Positioned in front of photo - Shifted Down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 pt-64 space-y-6"
          >
            <h1 className="heading-xl font-poppins mb-6">
              <span className="fade-in-up block text-gray-800 dark:text-gray-200 mb-2 font-medium" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent fade-in-up-delay-1 text-expand block font-bold" style={{textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
                Burak Karataş
              </span>
            </h1>
            <motion.p 
              className="text-xl md:text-3xl font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-8 tracking-wide relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{textShadow: '1px 1px 3px rgba(0,0,0,0.3)'}}
            >
              <span className="text-blue-600 dark:text-blue-400">
                Software & Product Developer
              </span>
            </motion.p>
          </motion.div>

          {/* Description - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative z-10 mt-12"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-lg border border-white/20 dark:border-gray-700/50">
              <p className="text-lg md:text-xl font-inter text-gray-800 dark:text-gray-200 leading-relaxed tracking-wide font-medium">
                <span className="block mb-3">
                  I build exceptional digital experiences that combine 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> innovative design</span>
                  {' '}with{' '}
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">robust functionality</span>.
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Passionate about creating solutions that make a difference.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Shifted Down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 mt-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-text-modern bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-text-modern border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-poppins font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}