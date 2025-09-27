import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import profileImage from '../assets/images/ProfileEdited.png';

const About = () => {
  return (
    <section className="zzz-section bg-zzz-white">
      <div className="zzz-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zzz-grey-1 rounded-full mb-4">
            <Users className="w-4 h-4 text-zzz-primary" />
            <span className="text-sm zzz-text-secondary">About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold zzz-text-title mb-4">
            Passionate About{' '}
            <span className="zzz-accent-primary">Data Science</span>
          </h2>

          <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
            Mahidol University International College graduate with a passion for data science and solving real-world problems through data.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="zzz-grid zzz-grid-2 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold zzz-text-title">My Journey</h3>
              <p className="zzz-text-body leading-relaxed">
                As a recent graduate from Mahidol University International College, I'm looking for opportunities where I can continue growing, contribute to meaningful projects, and work alongside people who share the same passion for data science.
              </p>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="zzz-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img
                  src={profileImage}
                  alt="Achira Laovong Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-zzz-grey-2"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zzz-primary/10 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold zzz-text-title mb-2">Achira Laovong</h3>

              {/* Personal Info */}
              <div className="space-y-3 mt-6">
                <div className="flex justify-between items-center py-2 border-b border-zzz-grey-3">
                  <span className="zzz-text-secondary text-sm">Education</span>
                  <span className="zzz-text-title font-medium">Mahidol University International College</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zzz-grey-3">
                  <span className="zzz-text-secondary text-sm">Interests</span>
                  <span className="zzz-text-title font-medium">Data Science</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="zzz-text-secondary text-sm">Location</span>
                  <span className="zzz-text-title font-medium">Thailand</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
