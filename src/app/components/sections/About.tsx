'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/app/data/portfolio-data';
import { Mail, Phone, MapPin, Code, Palette, Zap, Search, ArrowRight } from 'lucide-react';

const About = () => {
  // Remove unused springTransition
  const smoothTransition = {
    duration: 0.6
  };

  const quickTransition = {
    duration: 0.3
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1
    },
    hover: {
      scale: 1.02,
      y: -5
    }
  };

  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const serviceItems = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build responsive and interactive web applications using modern technologies",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly interfaces with modern design principles",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimize applications for speed, efficiency and better user experience",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Implement best practices for search engine visibility and ranking",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: "#",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={smoothTransition}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4"
          >
            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get to know more about my journey, skills, and what drives me
          </motion.p>
        </motion.div>
        
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={smoothTransition}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Personal Info */}
          <motion.div
            variants={itemVariants}
            transition={smoothTransition}
            className="space-y-6 sm:space-y-8"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              transition={smoothTransition}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary mb-4 sm:mb-6 relative z-10">
                Hello! I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h3>
              <motion.p
                variants={itemVariants}
                transition={smoothTransition}
                className="text-gray-600 text-lg sm:text-xl leading-relaxed sm:leading-loose relative z-10"
              >
                {portfolioData.personal.about}
              </motion.p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              transition={smoothTransition}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={quickTransition}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-semibold text-secondary mb-6"
              >
                Get In Touch
              </motion.h4>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...quickTransition, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group border border-transparent hover:border-gray-200"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${contact.color}`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                      <p className="text-gray-700 font-medium truncate">{contact.value}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-gray-400 group-hover:text-primary transition-colors duration-200"
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            variants={itemVariants}
            transition={smoothTransition}
            className="space-y-6 sm:space-y-8"
          >
            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              transition={smoothTransition}
              className="grid sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {serviceItems.map((service) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  transition={quickTransition}
                  whileHover="hover"
                  className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Animated background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                    <motion.div
                      animate={floatAnimation}
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                    <h5 className="text-lg sm:text-xl font-semibold text-secondary">
                      {service.title}
                    </h5>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              variants={itemVariants}
              transition={smoothTransition}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={quickTransition}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 relative z-10"
              >
                Tech Stack
              </motion.h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                {portfolioData.skills.flatMap(category => 
                  category.items.slice(0, 8).map((skill) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ ...quickTransition, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 cursor-default border border-white/10"
                    >
                      {skill.name}
                    </motion.span>
                  ))
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...quickTransition, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 pt-6 border-t border-white/20 relative z-10"
              >
                <p className="text-white/80 text-sm sm:text-base">
                  And many more technologies to bring your ideas to life
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={quickTransition}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4 relative z-10">
              Let&apos;s Build Something <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Amazing</span> Together
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl mb-6 relative z-10">
              Ready to bring your ideas to life? I&apos;m just one message away.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={quickTransition}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-lg relative z-10 group overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="ml-3 relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;