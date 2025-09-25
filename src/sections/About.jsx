import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, TrendingUp, Award, Target, Users } from 'lucide-react';
import profileImage from '../assets/images/ProfileEdited.png';

const About = () => {
  const skills = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Python, R, SQL, Pandas",
      color: "zzz-primary",
      progress: 95
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn",
      color: "zzz-green",
      progress: 92
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Apache Spark, ETL, Cloud Platforms",
      color: "zzz-orange",
      progress: 88
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Statistical Modeling",
      description: "A/B Testing, Forecasting, NLP",
      color: "zzz-purple",
      progress: 90
    }
  ];

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
              <p className="zzz-text-secondary mb-4">Data Scientist & ML Engineer</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold zzz-text-title">5+</div>
                  <div className="text-sm zzz-text-tertiary">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold zzz-text-title">50+</div>
                  <div className="text-sm zzz-text-tertiary">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold zzz-text-title">10+</div>
                  <div className="text-sm zzz-text-tertiary">Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold zzz-text-title text-center mb-8">Core Skills</h3>
          <div className="zzz-grid zzz-grid-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="zzz-card p-6 text-center zzz-hover-lift"
              >
                <div className={`inline-flex p-3 rounded-lg bg-${skill.color}-light text-${skill.color} mb-4`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold zzz-text-title mb-2">{skill.title}</h4>
                <p className="zzz-text-secondary text-sm mb-4">{skill.description}</p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="zzz-text-tertiary">Proficiency</span>
                    <span className="zzz-text-body font-medium">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-zzz-grey-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
