import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, Folder, Calendar, CheckCircle, X, Code, Globe, Users, Clock, ZoomIn, BookOpen, FileText, Code2, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getStatusColor, getPrimaryTag } from '../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Helper function to render mathematical expressions
  const renderMathContent = (text) => {
    if (text.startsWith('MATH_BLOCK: ')) {
      const mathExpression = text.replace('MATH_BLOCK: ', '');
      return (
        <div className="math-block">
          {mathExpression}
        </div>
      );
    }
    return <p className="zzz-text-body leading-relaxed">{text}</p>;
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
              title={project.githubUrl.includes('colab.research.google.com') ? "View Colab" : "View Code"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubUrl.includes('colab.research.google.com') ? (
                <BookOpen className="w-5 h-5" />
              ) : (
                <Github className="w-5 h-5" />
              )}
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
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

            {/* Liquid Glass UI for "More Projects" indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="zzz-card p-8 text-center relative overflow-hidden">
                {/* Liquid Glass Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zzz-primary/10 via-transparent to-zzz-primary/5 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zzz-white/20 to-transparent animate-pulse"></div>

                {/* Floating Dots Animation */}
                <div className="relative flex items-center justify-center gap-2 mb-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className="w-3 h-3 bg-zzz-primary rounded-full"
                    />
                  ))}
                </div>

                <h3 className="text-lg font-semibold zzz-text-title mb-2">
                  And More Projects...
                </h3>
                <p className="zzz-text-secondary mb-4">
                  Discover additional projects showcasing diverse technologies and methodologies
                </p>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zzz-primary/20 backdrop-blur-md text-zzz-primary font-medium rounded-lg border border-zzz-primary/30 hover:bg-zzz-primary hover:text-zzz-white transition-all duration-300 group"
                >
                  <span>Explore All Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
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
              <Link to="/projects" className="zzz-button-primary">
                View All Projects
              </Link>
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
                          className={detail.startsWith('MATH_BLOCK: ') ? "" : "flex items-start gap-3"}
                        >
                          {!detail.startsWith('MATH_BLOCK: ') && (
                            <div className="w-2 h-2 bg-zzz-primary rounded-full mt-2 flex-shrink-0"></div>
                          )}
                          {renderMathContent(detail)}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  {selectedProject.technologies && (
                    <div>
                      <h3 className="text-lg font-semibold zzz-text-title mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="px-3 py-2 bg-zzz-primary-light text-zzz-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {selectedProject.tags && (
                    <div>
                      <h3 className="text-lg font-semibold zzz-text-title mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="px-3 py-2 bg-zzz-grey-2 text-zzz-grey-8 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

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
                      {selectedProject.githubUrl.includes('colab.research.google.com') ? (
                        <>
                          <BookOpen className="w-4 h-4" />
                          View Colab
                        </>
                      ) : (
                        <>
                          <Github className="w-4 h-4" />
                          View Code
                        </>
                      )}
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
