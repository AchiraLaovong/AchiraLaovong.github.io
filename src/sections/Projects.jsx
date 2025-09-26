import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Folder, Calendar, CheckCircle, X, Code, Globe, Users, Clock, ZoomIn } from 'lucide-react';
import kibanaViz from '../assets/images/kibana_viz.png';
import dockerStructure from '../assets/images/structure.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Kafka-Driven Data Streaming Pipeline with Dashboard",
      description: "Collaborated in a team to design and implement a comprehensive data streaming pipeline using Apache Kafka, processing anime data from multiple sources with real-time visualization through Kibana dashboards.",
      showcaseImage: kibanaViz,
      projectImages: [
        {
          src: kibanaViz,
          alt: "Kibana Dashboard Visualization",
          title: "Real-time Analytics Dashboard",
          description: "Interactive Kibana dashboard showing anime trends, genre distributions, and real-time data insights from the streaming pipeline."
        },
        {
          src: dockerStructure,
          alt: "Docker Architecture Structure",
          title: "Containerized System Architecture",
          description: "Docker ecosystem architecture showing the interconnected containers: Zookeeper, Kafka-Broker, Elasticsearch, Kibana, and Kafka-Connect with persistent volumes."
        }
      ],
      detailedDescription: [
        "Challenge: Built a robust data streaming solution to process large volumes of anime data from MyAnimeList (MAL) API and Kaggle datasets, requiring real-time processing, data enrichment, and visualization capabilities. The challenge was to handle both batch and streaming data efficiently while ensuring data quality and exactly-once delivery semantics.",

        "Architecture Design: Designed and deployed a containerized microservices ecosystem using Docker with 5 interconnected containers: Zookeeper (coordination), Kafka-Broker (message streaming), Elasticsearch (data storage), Kibana (visualization), and Kafka-Connect (data integration) with persistent volumes for data recovery.",

        "Data Pipeline Implementation: Developed three different pipeline versions - evolved from traditional Producer-Consumer model to advanced KStream processing. The final version (CSVDataStream) processes anime data from Kaggle CSV files, enriches it with real-time MAL API calls, and filters explicit content using family-friendly filters.",

        "Advanced Stream Processing: Implemented KStream processing with state stores for caching API responses to avoid redundant calls, configured transactional messaging for exactly-once delivery guarantees, and built intelligent data transformation logic that enriches anime records with additional metadata from external APIs.",

        "Real-time Data Enrichment: Created CSVDataProducer.java to read anime IDs and titles from Kaggle dataset, then CSVKStreamProcessor.java enriches this data by making API calls to MyAnimeList for additional details like ratings, genres, and descriptions while filtering out explicit content for family-friendly recommendations.",

        "Performance & Reliability Results: Achieved reliable real-time data processing with exactly-once delivery semantics, eliminated redundant API calls through intelligent state store caching, and successfully processed thousands of anime records with sub-second latency for real-time dashboard updates.",

        "Visualization & Insights: Delivered comprehensive Kibana dashboards providing real-time insights into anime trends, genre distributions, and rating analytics. The system processes both historical batch data and live streaming updates seamlessly, enabling dynamic data exploration and monitoring.",

        "Technical Innovation: Evolved through multiple architectural iterations - from simple throughput testing (Version 0) to traditional Producer-Consumer chains (Versions 1-2) to the final advanced KStream implementation, demonstrating progressive enhancement of streaming data processing capabilities."
      ],
      tags: ["Apache Kafka", "Kafka Streams", "Elasticsearch", "Kibana", "Docker", "Java", "Maven"],
      status: "Completed",
      date: "2024",
      githubUrl: "https://github.com/maythaswang/streaming-data-pipeline",
      teamProject: true,
      duration: "1 month",
      featured: true
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      description: "Machine learning system for industrial equipment maintenance prediction using advanced analytics.",
      detailedDescription: [
        "Developed a comprehensive predictive maintenance solution for industrial equipment.",
        "Implemented machine learning algorithms to predict equipment failures before they occur.",
        "Built data pipelines to process sensor data and maintenance logs.",
        "Created interactive dashboards for maintenance teams to monitor equipment health.",
        "Achieved 85% accuracy in predicting equipment failures, reducing downtime by 40%."
      ],
      tags: ["Python", "Scikit-learn", "Docker", "AWS"],
      status: "In Progress",
      date: "2024",
      githubUrl: "#",
      teamProject: false,
      duration: "4 months",
      featured: true
    },
    {
      id: 3,
      title: "Financial Risk Assessment",
      description: "AI-powered risk assessment tool for financial institutions using advanced machine learning.",
      detailedDescription: [
        "Built an AI-powered risk assessment platform for financial institutions.",
        "Implemented advanced machine learning models to evaluate loan default risk.",
        "Designed RESTful APIs for real-time risk scoring.",
        "Created comprehensive reporting dashboards for risk analysts.",
        "Integrated with existing banking systems through secure API connections."
      ],
      tags: ["Python", "XGBoost", "Flask", "MongoDB"],
      status: "Completed",
      date: "2023",
      githubUrl: "#",
      teamProject: false,
      duration: "6 months",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Fraud Detection",
      description: "Real-time fraud detection system using machine learning algorithms for financial transactions.",
      detailedDescription: [
        "Developed a real-time fraud detection system for financial transactions.",
        "Implemented streaming data processing for instant transaction analysis.",
        "Built machine learning models to identify fraudulent patterns.",
        "Created alert systems for immediate fraud notification.",
        "Achieved sub-second response times for fraud detection."
      ],
      tags: ["Python", "Kafka", "Redis", "FastAPI"],
      status: "Completed",
      date: "2023",
      githubUrl: "#",
      teamProject: true,
      duration: "5 months",
      featured: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'zzz-green';
      case 'In Progress': return 'zzz-orange';
      case 'Planning': return 'zzz-primary';
      default: return 'zzz-grey-6';
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="zzz-card p-6 zzz-hover-lift w-full"
    >
      <div className="space-y-4">
        {/* Project Showcase Image */}
        {project.showcaseImage && (
          <div
            className="w-full h-64 rounded-lg overflow-hidden bg-zzz-grey-1 cursor-pointer relative group"
            onClick={() => setZoomedImage(project.showcaseImage)}
          >
            <img
              src={project.showcaseImage}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Zoom indicator overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                <ZoomIn className="w-5 h-5 text-zzz-primary" />
              </div>
            </div>
          </div>
        )}

        {/* Project Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zzz-grey-1 rounded-lg">
              <Folder className="w-5 h-5 text-zzz-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold zzz-text-title mb-1">{project.title}</h3>
              <div className="flex items-center gap-4 text-sm zzz-text-tertiary">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                {project.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamProject && (
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Team Project</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(project.status)}-light text-${getStatusColor(project.status)}`}>
              <CheckCircle className="w-3 h-3" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <p className="zzz-text-body leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zzz-grey-1 text-zzz-grey-8 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              className="p-2 zzz-text-tertiary hover:text-zzz-primary transition-colors duration-200"
              title="View Code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setSelectedProject(project)}
            className="zzz-button-ghost text-sm flex items-center gap-2 group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section className="zzz-section bg-zzz-grey-1">
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
              <Folder className="w-4 h-4 text-zzz-primary" />
              <span className="text-sm zzz-text-secondary">My Work</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold zzz-text-title mb-4">
              Featured <span className="zzz-accent-primary">Projects</span>
            </h2>

            <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
              A showcase of my data science and machine learning projects, from real-time streaming pipelines to predictive analytics solutions.
            </p>
          </motion.div>

          {/* Projects Grid - Single column layout */}
          <div className="space-y-6 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold zzz-text-title mb-4">
              Interested in working together?
            </h3>
            <p className="zzz-text-secondary mb-6">
              Let's discuss your next data science project and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="zzz-button-primary">
                View All Projects
              </button>
              <a href="#contact" className="zzz-button-secondary">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-zzz-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-zzz-white border-b border-zzz-grey-3 p-6 rounded-t-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold zzz-text-title mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4 text-sm zzz-text-tertiary">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedProject.date}</span>
                      </div>
                      {selectedProject.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{selectedProject.duration}</span>
                        </div>
                      )}
                      {selectedProject.teamProject && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>Team Project</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-zzz-grey-1 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 zzz-text-secondary" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-${getStatusColor(selectedProject.status)}-light text-${getStatusColor(selectedProject.status)}`}>
                      <CheckCircle className="w-4 h-4" />
                      {selectedProject.status}
                    </span>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-lg font-semibold zzz-text-title mb-3">Project Overview</h3>
                    <p className="zzz-text-body leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-lg font-semibold zzz-text-title mb-3">Key Achievements</h3>
                    <div className="space-y-3">
                      {selectedProject.detailedDescription.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-zzz-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="zzz-text-body leading-relaxed">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-lg font-semibold zzz-text-title mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="px-3 py-2 bg-zzz-primary-light text-zzz-primary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Images - New Section */}
                  {selectedProject.projectImages && selectedProject.projectImages.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold zzz-text-title mb-3">Project Images</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.projectImages.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="cursor-pointer group"
                            onClick={() => setZoomedImage(image.src)}
                          >
                            <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="mt-2">
                              <h4 className="text-md font-semibold zzz-text-title">{image.title}</h4>
                              <p className="text-sm zzz-text-secondary">{image.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-zzz-grey-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zzz-grey-8 text-zzz-white rounded-lg hover:bg-zzz-grey-9 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal - New Component */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-[95vw] max-h-[95vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedImage}
                alt="Zoomed Project Image"
                className="block w-auto h-auto max-w-none rounded-lg shadow-2xl"
                style={{
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  objectFit: 'contain'
                }}
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-all duration-200 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
