import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Zap } from 'lucide-react';
import profileImage from '../assets/images/ProfileEdited.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-zzz-bg relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-16 h-16 bg-zzz-yellow opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-zzz-primary opacity-15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-zzz-green opacity-25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="zzz-container relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zzz-white rounded-full shadow-zzz-card"
              >
                <Star className="w-4 h-4 text-zzz-yellow" fill="currentColor" />
                <span className="text-sm zzz-text-secondary">Aspiring Data Scientist</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold zzz-text-title leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm{' '}
                <span className="relative">
                  <span className="zzz-accent-yellow">Achira</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-zzz-yellow opacity-30 rounded-full"></div>
                </span>
                <br />
                Laovong
              </motion.h1>

              <motion.p
                className="text-xl zzz-text-secondary max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Mahidol University International College Graduate
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="zzz-button-primary">
                View My Work
              </button>

              <a href="#contact" className="zzz-button-secondary">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="zzz-card p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zzz-yellow via-zzz-primary to-zzz-green"></div>

                <div className="space-y-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <img
                      src={profileImage}
                      alt="Achira Laovong Profile"
                      className="w-full h-full object-cover rounded-full border-4 border-zzz-grey-2"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zzz-primary/20 to-zzz-yellow/20"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold zzz-text-title">Portfolio Showcase</h3>
                    <p className="zzz-text-secondary">Explore all my projects!</p>
                  </div>

                  <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 bg-zzz-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-zzz-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-zzz-green rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 zzz-card p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-zzz-yellow" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 zzz-card p-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Star className="w-6 h-6 text-zzz-primary" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm zzz-text-tertiary">Scroll</span>
          <ChevronDown className="w-5 h-5 text-zzz-grey-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
