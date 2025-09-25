import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Folder, Calendar, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Customer Analytics Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Advanced analytics dashboard for customer behavior analysis and prediction.",
      tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
      status: "Completed",
      date: "2024",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Machine learning system for industrial equipment maintenance prediction.",
      tags: ["Python", "Scikit-learn", "Docker", "AWS"],
      status: "In Progress",
      date: "2024",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Financial Risk Assessment",
      description: "Duis aute irure dolor in reprehenderit in voluptate. AI-powered risk assessment tool for financial institutions.",
      tags: ["Python", "XGBoost", "Flask", "MongoDB"],
      status: "Completed",
      date: "2023",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Fraud Detection",
      description: "Excepteur sint occaecat cupidatat non proident. Real-time fraud detection system using machine learning algorithms.",
      tags: ["Python", "Kafka", "Redis", "FastAPI"],
      status: "Completed",
      date: "2023",
      githubUrl: "#",
      liveUrl: "#",
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
      className={`zzz-card p-6 zzz-hover-lift ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="space-y-4">
        {/* Project Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zzz-grey-1 rounded-lg">
              <Folder className="w-5 h-5 text-zzz-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold zzz-text-title mb-1">{project.title}</h3>
              <div className="flex items-center gap-2 text-sm zzz-text-tertiary">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
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
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              className="p-2 zzz-text-tertiary hover:text-zzz-primary transition-colors duration-200"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <button className="zzz-button-ghost text-sm flex items-center gap-2 group">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="zzz-grid zzz-grid-3 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="zzz-card p-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold zzz-text-title mb-2">20+</div>
              <div className="zzz-text-secondary">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold zzz-text-title mb-2">15+</div>
              <div className="zzz-text-secondary">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold zzz-text-title mb-2">5+</div>
              <div className="zzz-text-secondary">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold zzz-text-title mb-2">100%</div>
              <div className="zzz-text-secondary">Success Rate</div>
            </div>
          </div>
        </motion.div>

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
            <button className="zzz-button-secondary">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
