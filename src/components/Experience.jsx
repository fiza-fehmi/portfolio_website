import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, Award, X } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showCertificate, setShowCertificate] = useState(false);

  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'TechSpine LLC (AITechSpine)',
      period: '22 June – 22 September 2026',
      description: 'Completed a three-month MERN Stack development internship at AITechSpine, contributing to the development and testing of full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Demonstrated good technical skills, dedication, and a willingness to learn.',
      achievements: [
        'Built responsive web applications using React and modern UI frameworks',
        'Developed backend services with Node.js and Express.js',
        'Integrated RESTful APIs into web applications',
        'Worked with MongoDB for database management',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      role: 'MERN Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building custom web applications for clients using MongoDB, Express.js, React, and Node.js. Delivering scalable solutions with modern UI/UX design and robust backend architecture.',
      achievements: [
        'Developed full-stack e-commerce platforms with payment integration',
        'Created responsive web applications with React and Tailwind CSS',
        'Implemented RESTful APIs and database management with MongoDB',
        'Integrated third-party services like ImageKit and Nodemailer',
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      role: 'Web Developer',
      company: 'Various Projects',
      period: '2022 - 2023',
      description: 'Focused on frontend development and building responsive web applications. Gained expertise in modern JavaScript frameworks and CSS styling.',
      achievements: [
        'Built interactive user interfaces with React and JavaScript',
        'Implemented responsive designs using Tailwind CSS',
        'Collaborated on projects using Git and GitHub',
        'Developed reusable components and optimized performance',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in web development and the milestones along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.3 }}
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} transform -translate-x-1/2 md:translate-x-0 ${
                  index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                }`}
              >
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color}`}
                />
                
                {/* Extra pulse rings */}
                <motion.div
                  animate={{
                    scale: [1, 3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3 + 0.5,
                  }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color}`}
                />
              </motion.div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:mx-8">
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                  }}
                  className="glass p-6 md:p-8 rounded-3xl hover:border-primary/30 transition-all relative overflow-hidden group"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  {/* Period Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                    </div>
                    {index === 0 && (
                      <motion.button
                        onClick={() => setShowCertificate(true)}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-colors cursor-pointer"
                      >
                        <Award size={14} className="text-green-400" />
                        <span className="text-xs font-medium text-green-400">View Certificate</span>
                      </motion.button>
                    )}
                  </div>

                  {/* Role & Company */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${exp.color} bg-opacity-10`}>
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.3 + achIndex * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`}></span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {showCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertificate(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-dark-lighter rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowCertificate(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Certificate Image */}
                <div className="relative bg-white">
                  <iframe
                    src="/certificates/certificate.html"
                    className="w-full h-[80vh] border-0"
                    title="AITechSpine Experience Letter"
                  />
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    Experience Letter - TechSpine LLC (AITechSpine)
                  </p>
                  <a
                    href="/certificates/certificate.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
                  >
                    Open Full View
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
