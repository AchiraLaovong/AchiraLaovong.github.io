import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowLeft, Calendar, CheckCircle, Users, Clock, ZoomIn, BookOpen, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getStatusColor, getPrimaryTag } from '../data/projectsData';

const AllProjects = () => {
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

  // Set first project as default selected
  React.useEffect(() => {
    if (projects.length > 0 && !selectedProject) {
      setSelectedProject(projects[0]);
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-zzz-bg">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zzz-white/80 backdrop-blur-md border-b border-zzz-grey-3">
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-zzz-grey-7 hover:text-zzz-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold zzz-text-title">All Projects</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full px-8 py-8">
        <div className="grid grid-cols-10 gap-8 h-[calc(100vh-12rem)]">
          {/* Left Sidebar - Projects List */}
          <div className="col-span-3">
            <div className="zzz-card h-full p-6 overflow-y-auto">
              <h2 className="text-lg font-semibold zzz-text-title mb-6">Projects ({projects.length})</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedProject?.id === project.id
                        ? 'bg-zzz-primary-light border-2 border-zzz-primary'
                        : 'bg-zzz-grey-1 hover:bg-zzz-grey-2 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    {project.showcaseImage && (
                      <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                        <img
                          src={project.showcaseImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Project Info */}
                    <div>
                      <h3 className="font-semibold zzz-text-title text-sm mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs zzz-text-tertiary mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.date}</span>
                        </div>
                        {project.teamProject && (
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>Team</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-${getStatusColor(project.status)}-light text-${getStatusColor(project.status)}`}>
                          <CheckCircle className="w-2 h-2" />
                          {project.status}
                        </span>
                        {/* Single primary tag */}
                        <span className="px-2 py-1 bg-zzz-grey-2 text-zzz-grey-8 rounded text-xs">
                          {getPrimaryTag(project)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Project Details */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="zzz-card h-full p-8 overflow-y-auto"
                >
                  {/* Project Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold zzz-text-title mb-2">
                          {selectedProject.title}
                        </h1>
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
                      <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-${getStatusColor(selectedProject.status)}-light text-${getStatusColor(selectedProject.status)}`}>
                        <CheckCircle className="w-4 h-4" />
                        {selectedProject.status}
                      </span>
                    </div>

                    {/* Main Project Image */}
                    {selectedProject.showcaseImage && (
                      <div
                        className="w-full h-64 rounded-lg overflow-hidden mb-6 cursor-pointer group"
                        onClick={() => setZoomedImage(selectedProject.showcaseImage)}
                      >
                        <img
                          src={selectedProject.showcaseImage}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="space-y-8">
                    {/* Project Overview */}
                    <div>
                      <h3 className="text-lg font-semibold zzz-text-title mb-3">Project Overview</h3>
                      <p className="zzz-text-body leading-relaxed">{selectedProject.description}</p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold zzz-text-title mb-4">Key Achievements</h3>
                      <div className="space-y-4">
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

                    {/* Project Images */}
                    {selectedProject.projectImages && selectedProject.projectImages.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold zzz-text-title mb-4">Project Images</h3>
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
                    <div className="flex gap-3 pt-6 border-t border-zzz-grey-3">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
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
    </div>
  );
};

export default AllProjects;
