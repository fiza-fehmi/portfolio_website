import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Tailwind', icon: '🌊' },
      ],
    },
    {
      category: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
      ],
    },
    {
      category: 'Database',
      color: 'from-pink-500 to-violet-500',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
      ],
    },
    {
      category: 'Tools',
      color: 'from-violet-600 to-purple-600',
      skills: [
        { name: 'Git', icon: '📊' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'REST API', icon: '🔌' },
        { name: 'ImageKit', icon: '🖼️' },
        { name: 'Nodemailer', icon: '📧' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${category.color}`}></div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -5, 0],
                    } : {}}
                    transition={{ 
                      opacity: { duration: 0.3, delay: 0.3 + categoryIndex * 0.05 + skillIndex * 0.03 },
                      scale: { duration: 0.3, delay: 0.3 + categoryIndex * 0.05 + skillIndex * 0.03 },
                      y: { duration: 2 + skillIndex * 0.2, repeat: Infinity, ease: "easeInOut", delay: skillIndex * 0.1 }
                    }}
                    whileHover={{ scale: 1.1, y: -8, rotate: [0, -5, 5, 0] }}
                    className="group relative"
                  >
                    <motion.div 
                      className="glass px-3 py-2 rounded-lg hover:border-primary/40 transition-all flex items-center gap-2 relative overflow-hidden"
                      whileHover={{
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                      }}
                    >
                      {/* Hover glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Icon */}
                      <motion.span 
                        className="text-lg relative z-10"
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: skillIndex * 0.2
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                      {/* Skill Name */}
                      <span className="text-xs font-medium whitespace-nowrap relative z-10">{skill.name}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
