import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Database } from 'lucide-react';
import profileImage from '../assets/images/ProfileEdited.png';

const About = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6" />, label: "Certified Data Scientist" },
    { icon: <Target className="w-6 h-6" />, label: "ML Specialist" },
    { icon: <Database className="w-6 h-6" />, label: "Big Data Expert" }
  ];

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
              </p>
              <p className="zzz-text-body leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold zzz-text-title">Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-zzz-grey-1 rounded-lg text-zzz-primary">
                      {achievement.icon}
                    </div>
                    <span className="zzz-text-body">{achievement.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold zzz-text-title">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'AWS', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-zzz-grey-1 text-zzz-grey-8 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
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
              <p className="zzz-text-secondary mb-4">Aspiring Data Scientist</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
