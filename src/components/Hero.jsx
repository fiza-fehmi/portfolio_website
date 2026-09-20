import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="px-4 py-2 glass rounded-full text-sm font-medium text-primary inline-block">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Fiza Fehmi</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
              MERN Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl">
              I build modern, scalable, and visually engaging web applications using MongoDB, Express.js, React, and Node.js.
              Passionate about creating seamless user experiences and robust backend solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Skill Icons Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              </div>

              {/* All Skills - Icons Only */}
              {[
                { icon: '🍃', top: '5%', left: '10%', delay: 0.6, duration: 3 },
                { icon: '⚡', top: '8%', right: '15%', delay: 0.7, duration: 3.5 },
                { icon: '⚛️', top: '15%', left: '25%', delay: 0.8, duration: 4 },
                { icon: '🟢', top: '20%', right: '5%', delay: 0.9, duration: 3.2 },
                { icon: '📜', top: '35%', left: '5%', delay: 1.0, duration: 3.8 },
                { icon: '📄', top: '40%', right: '20%', delay: 1.1, duration: 3.3 },
                { icon: '🎨', top: '50%', left: '15%', delay: 1.2, duration: 3.6 },
                { icon: '🌊', top: '55%', right: '10%', delay: 1.3, duration: 3.4 },
                { icon: '📊', top: '65%', left: '8%', delay: 1.4, duration: 3.7 },
                { icon: '🐙', top: '70%', right: '25%', delay: 1.5, duration: 3.5 },
                { icon: '🔌', top: '80%', left: '20%', delay: 1.6, duration: 3.9 },
                { icon: '🖼️', top: '85%', right: '12%', delay: 1.7, duration: 3.2 },
                { icon: '📧', top: '45%', left: '50%', delay: 1.8, duration: 4.2 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -15, 0],
                  }}
                  transition={{
                    opacity: { delay: skill.delay, duration: 0.4 },
                    scale: { delay: skill.delay, duration: 0.4 },
                    y: { duration: skill.duration, repeat: Infinity, ease: "easeInOut", delay: skill.delay }
                  }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="absolute glass p-3 rounded-xl hover:border-primary/50 transition-all cursor-default"
                  style={{ 
                    top: skill.top, 
                    left: skill.left, 
                    right: skill.right 
                  }}
                >
                  <span className="text-3xl">{skill.icon}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
