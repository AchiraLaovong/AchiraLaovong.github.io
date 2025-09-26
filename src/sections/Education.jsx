import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, X } from 'lucide-react';

// Import institution logos
import mahidolLogo from '../assets/images/Mahidol_U.png';
import beaconhouseLogo from '../assets/images/bys.webp';
import somtawinLogo from '../assets/images/stw.jpg';

const Education = () => {
  const [showCoursesModal, setShowCoursesModal] = useState(false);

  const education = [
    {
      degree: "Bachelor of Science - BS, Computer Science",
      institution: "Mahidol University International College",
      logo: mahidolLogo,
      location: "Bangkok, Thailand",
      period: "Sep 2021 - Sep 2025",
      gpa: "3.73/4.00",
      highlights: [
        "ICCS101 Introduction to Programming Teacher Assistance"
      ],
      courses: {
        "Computer Science": [
          "ICCS101 Introduction to Computer Programming",
          "ICCS121 System Skills and Low-level Programming",
          "ICCS206 Discrete Mathematics",
          "ICCS208 Data Structures and Abstractions",
          "ICCS225 Database Foundations",
          "ICCS271 Interaction Design",
          "ICCS311 Functional and Parallel Programming",
          "ICCS312 Algorithms and Tractability",
          "ICCS205 Numerical Computation",
          "ICCS227 Principles of Computer Systems and Architecture",
          "ICCS261 Principles of Data Science",
          "ICCS370 Software System Construction",
          "ICCS309 Scientific Research and Presentations",
          "ICCS461 Machine Learning",
          "ICCS323 IOT Electronics",
          "ICCS361 Data Mining (Data Engineering)",
          "ICCS424 Penetration Testing and Ethical Hacking"
        ],
        "Mathematics": [
          "ICMA106 Calculus I",
          "ICMA213 Calculus II",
          "ICMA223 Linear Algebra A",
          "ICMA216 Calculus IIIA",
          "ICMA393 Graph Theory and Combinatorics",
          "ICGN127 Practical Mathematics"
        ],
        "Physics": [
          "ICPY101 Physics I",
          "ICPY102 Physics II",
          "ICPY105 Integrated Laboratory in Physics I"
        ],
        "Statistics": [
          "ICMA151 Statistics for Science I",
          "ICMA253 Statistics for Science II",
          "ICMA344 Time Series Analysis"
        ]
      },
      hasViewAllButton: true
    },
    {
      degree: "High School Diploma",
      institution: "Beaconhouse Yamsaard Hua Hin School",
      logo: beaconhouseLogo,
      location: "Hua Hin, Thailand",
      period: "May 2020 - Apr 2021",
      gpa: "3.98/4.00",
      highlights: [
        "General Education Development (GED) 2020 - 675",
        "International English Language Testing System (IELTS) 2020 - 6.5",
        "Scholastic Assessment Test (SAT) 2020 - 1220",
        "Kumon Completion 2021"
      ]
    },
    {
      degree: "Primary & Secondary Education",
      institution: "Somtawin Witead Suksa Huaymongkon",
      logo: somtawinLogo,
      location: "Thailand",
      period: "May 2007 - Apr 2020",
      gpa: "3.83/4.00",
      highlights: [
        "Hong Kong International Mathematical Olympiad (HKIMO) 2017 Heat Round Silver Award",
        "Thailand International Mathematical Olympiad (TIMO) 2018 Heat Round Bronze Award"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-zzz-bg">
      <div className="zzz-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zzz-white rounded-full shadow-zzz-card">
              <GraduationCap className="w-4 h-4 text-zzz-primary" />
              <span className="text-sm zzz-text-secondary font-medium">Academic Background</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold zzz-text-title">
              Education
            </h2>

            <p className="text-lg zzz-text-secondary max-w-2xl mx-auto">
              My academic journey and the foundation that shaped my passion for technology and mathematics.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="zzz-card p-8 relative overflow-hidden"
              >
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zzz-primary via-zzz-yellow to-zzz-green"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start gap-4">
                        {/* Institution Logo */}
                        <div className="flex-shrink-0">
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm border border-zzz-grey-2"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold zzz-text-title mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-xl zzz-text-secondary font-medium mb-1">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1 bg-zzz-primary/10 rounded-full">
                          <Award className="w-4 h-4 text-zzz-primary" />
                          <span className="text-sm font-semibold text-zzz-primary">
                            Grade: {edu.gpa}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm zzz-text-tertiary">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold zzz-text-title">
                        {index === 0 ? "Activities and Societies" : "Key Achievements"}
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zzz-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="zzz-text-secondary">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Courses or Additional Info */}
                  <div className="space-y-4">
                    {edu.hasViewAllButton ? (
                      <>
                        <h4 className="font-semibold zzz-text-title">Coursework</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* Show only 3 specific featured courses */}
                          <span className="px-3 py-1 bg-zzz-grey-1 text-zzz-grey-8 text-sm rounded-full border border-zzz-grey-3">
                            ICCS461 Machine Learning
                          </span>
                          <span className="px-3 py-1 bg-zzz-grey-1 text-zzz-grey-8 text-sm rounded-full border border-zzz-grey-3">
                            ICMA344 Time Series Analysis
                          </span>
                          <span className="px-3 py-1 bg-zzz-grey-1 text-zzz-grey-8 text-sm rounded-full border border-zzz-grey-3">
                            ICCS361 Data Mining
                          </span>
                          {/* Ellipsis indicator */}
                          <span className="px-3 py-1 bg-zzz-grey-2 text-zzz-grey-6 text-sm rounded-full border border-zzz-grey-3 opacity-70">
                            ...
                          </span>
                        </div>
                        <motion.button
                          onClick={() => setShowCoursesModal(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-zzz-primary text-white rounded-lg hover:bg-zzz-primary/90 transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <BookOpen className="w-4 h-4" />
                          View All Courses
                        </motion.button>
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zzz-primary/5 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-zzz-yellow/10 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="zzz-card p-6 inline-block">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-zzz-primary" />
                <div className="text-left">
                  <p className="font-semibold zzz-text-title">Continuous Learning</p>
                  <p className="text-sm zzz-text-secondary">Always expanding my knowledge through academic excellence and practical application</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Courses Modal */}
      <AnimatePresence>
        {showCoursesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCoursesModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-zzz-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-zzz-grey-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-zzz-primary" />
                    <h3 className="text-2xl font-bold zzz-text-title">All Courses</h3>
                  </div>
                  <button
                    onClick={() => setShowCoursesModal(false)}
                    className="p-2 hover:bg-zzz-grey-1 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5 zzz-text-secondary" />
                  </button>
                </div>
                <p className="zzz-text-secondary mt-2">Mahidol University - Computer Science Program</p>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-8">
                  {Object.entries(education[0].courses).map(([category, courses], catIdx) => (
                    <motion.div
                      key={catIdx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIdx * 0.1 }}
                      className="space-y-4"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-zzz-primary rounded-full"></div>
                        <h4 className="text-lg font-bold zzz-text-title">{category}</h4>
                        <div className="flex-1 h-px bg-zzz-grey-2"></div>
                        <span className="text-sm zzz-text-tertiary bg-zzz-grey-1 px-2 py-1 rounded-full">
                          {courses.length} courses
                        </span>
                      </div>

                      {/* Courses Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {courses.map((course, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (catIdx * 0.1) + (idx * 0.02) }}
                            className="px-3 py-2 bg-zzz-grey-1 rounded-lg border border-zzz-grey-3 hover:border-zzz-primary/30 hover:shadow-sm transition-all duration-200"
                          >
                            <span className="zzz-text-title text-sm font-medium leading-tight">
                              {course}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
