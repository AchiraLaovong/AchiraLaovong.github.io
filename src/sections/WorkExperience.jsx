import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import scbTechXLogo from '../assets/images/Logo_SCB_TechX.svg';
import muicLogo from '../assets/images/Mahidol_U.png';

const WorkExperience = () => {
  const experiences = [
    {
      company: "SCB TechX",
      role: "Data Science Intern",
      type: "Internship",
      duration: "May 2025 - Aug 2025 · 4 mos",
      location: "Hybrid",
      logo: scbTechXLogo,
      description: "Worked on building a Text-to-SQL system with a multi-RAG framework and schema-linking via knowledge graphs, supporting both Thai and English.",
      keyContributions: [
        "Designed, implemented and optimized table metadata retrieval using Neo4j knowledge graph for effective schema-linking.",
        "Dockerized microservices ensuring reproducibility and maintainability.",
        "Built and optimized API communication with FastAPI and Nginx, enabling efficient integration between components.",
        "Migrated and cleaned large-scale databases to ensure data quality and consistency."
      ],
      additionalActivities: [
        "Delivered a knowledge-sharing session to Data Science and Data Engineering teams on knowledge graphs and their applications.",
        "Actively engaged in SCB TechX internship programs and team activities."
      ],
      skills: ["Natural Language Processing (NLP)", "Knowledge Graphs", "Python", "Neo4j", "FastAPI"]
    },
    {
      company: "Mahidol University",
      role: "Teaching Assistant",
      type: "Part-time",
      duration: "Sep 2023 - Sep 2024 · 1 yr 1 mo",
      location: "On-site",
      logo: muicLogo,
      description: "Assist with grading and collaboration with other TAs and Instructors.",
      keyContributions: [
        "Provided academic support to students in programming courses",
        "Collaborated with instructors to develop course materials and assessments",
        "Maintained consistent grading standards across multiple sections"
      ],
      skills: ["Teamwork", "Python (Programming Language)", "Teaching", "Communication"]
    }
  ];

  return (
    <section className="zzz-section bg-zzz-grey-0">
      <div className="zzz-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zzz-white rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-zzz-primary" />
            <span className="text-sm zzz-text-secondary">Experience</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold zzz-text-title mb-4">
            Work <span className="zzz-accent-primary">Experience</span>
          </h2>

          <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
            My professional journey and contributions in data science and education
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index !== experiences.length - 1 ? 'mb-12' : ''}`}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-zzz-grey-2 -z-10"></div>
              )}

              <div className="zzz-card p-8 ml-0 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-zzz-primary rounded-full border-4 border-zzz-white"></div>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg p-2 border border-zzz-grey-2 flex items-center justify-center">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain"
                        style={{ backgroundColor: 'white' }}
                      />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold zzz-text-title mb-1">
                          {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 zzz-text-secondary mb-2">
                          <span className="font-medium">{experience.company}</span>
                          <span>·</span>
                          <span className="text-sm bg-zzz-grey-1 px-2 py-1 rounded">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm zzz-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="zzz-text-body mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Contributions */}
                    {experience.keyContributions && (
                      <div className="mb-4">
                        <h4 className="font-semibold zzz-text-title mb-2">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {experience.keyContributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start gap-2 zzz-text-body">
                              <ChevronRight className="w-4 h-4 text-zzz-primary mt-0.5 flex-shrink-0" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Additional Activities */}
                    {experience.additionalActivities && (
                      <div className="mb-4">
                        <h4 className="font-semibold zzz-text-title mb-2">Additional Activities:</h4>
                        <ul className="space-y-2">
                          {experience.additionalActivities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 zzz-text-body">
                              <ChevronRight className="w-4 h-4 text-zzz-primary mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold zzz-text-title mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zzz-primary-light text-zzz-primary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="zzz-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold zzz-text-title mb-4">
              Interested in Working Together?
            </h3>
            <p className="zzz-text-secondary mb-6">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <a
              href="#contact"
              className="zzz-button-primary inline-flex items-center gap-2"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
