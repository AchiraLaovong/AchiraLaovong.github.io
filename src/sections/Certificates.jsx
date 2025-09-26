import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, X } from 'lucide-react';
import scbCertificate from '../assets/images/Certificate_Achira Laovong_page-0001.jpg';
import mlCertificate from '../assets/images/Machine_Learning_Certificate.png';

const Certificates = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Certificate of Internship",
      issuer: "SCB TechX",
      date: "September 2025",
      description: "Successfully completed a 4-month internship program focusing on Data Science and machine learning applications",
      imageUrl: scbCertificate,
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "September 2024",
      credentialId: "achiralaovong-mlwp",
      description: "Gained hands-on experience using TensorFlow to construct neural networks and develop skills in advanced machine learning techniques.",
      verifyUrl: "https://www.freecodecamp.org/certification/achiralaovong/machine-learning-with-python-v7",
      imageUrl: mlCertificate,
      featured: true
    }
  ];

  const CertificateCard = ({ certificate, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`zzz-card p-6 zzz-hover-lift w-full max-w-md mx-auto ${
        certificate.featured ? 'border-l-4 border-zzz-primary' : ''
      }`}
    >
      <div className="space-y-4">
        {/* Certificate Image */}
        {certificate.imageUrl && (
          <div
            className="w-full h-48 rounded-lg overflow-hidden bg-zzz-grey-1 cursor-pointer relative group flex items-center justify-center"
            onClick={() => setZoomedImage(certificate)}
          >
            <img
              src={certificate.imageUrl}
              alt={`${certificate.title} Certificate`}
              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Hide image if it fails to load
                e.target.style.display = 'none';
              }}
            />
            {/* Zoom indicator overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                <ExternalLink className="w-5 h-5 text-zzz-primary" />
              </div>
            </div>
          </div>
        )}

        {/* Certificate Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zzz-primary-light rounded-lg">
              <Award className="w-5 h-5 text-zzz-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold zzz-text-title mb-1">{certificate.title}</h3>
              <p className="text-sm font-medium text-zzz-primary">{certificate.issuer}</p>
            </div>
          </div>

          {certificate.featured && (
            <div className="flex items-center gap-1 px-2 py-1 bg-zzz-yellow-light text-zzz-yellow rounded-full text-xs font-medium">
              <CheckCircle className="w-3 h-3" />
              Featured
            </div>
          )}
        </div>

        {/* Certificate Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm zzz-text-tertiary">
            <Calendar className="w-4 h-4" />
            <span>Issued: {certificate.date}</span>
          </div>
          {certificate.credentialId && (
            <div className="text-sm zzz-text-tertiary">
              <span className="font-medium">Credential ID:</span> {certificate.credentialId}
            </div>
          )}
        </div>

        {/* Certificate Description */}
        <p className="zzz-text-body leading-relaxed">
          {certificate.description}
        </p>

        {/* Verify Link - Only show if verifyUrl exists */}
        <div className="flex items-center justify-between pt-2">
          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              className="inline-flex items-center gap-2 text-sm zzz-text-primary hover:text-zzz-primary-dark transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Verify Certificate
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
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
              <Award className="w-4 h-4 text-zzz-primary" />
              <span className="text-sm zzz-text-secondary">Certifications</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold zzz-text-title mb-4">
              Professional <span className="zzz-accent-primary">Certificates</span>
            </h2>

            <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
              Continuously expanding my expertise through professional certifications and specialized training programs.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
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
            <div className="zzz-card p-8">
              <h3 className="text-2xl font-semibold zzz-text-title mb-4">
                Committed to Continuous Learning
              </h3>
              <p className="zzz-text-secondary mb-6 max-w-2xl mx-auto">
                I believe in staying current with the latest technologies and methodologies.
                These certifications represent my dedication to professional growth and expertise validation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="zzz-button-primary">
                  View All Certificates
                </button>
                <a href="#contact" className="zzz-button-secondary">
                  Discuss Training Needs
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-zzz-primary transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Zoomed image */}
              <img
                src={zoomedImage.imageUrl}
                alt={`${zoomedImage.title} Certificate - Enlarged View`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Certificate info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-1">{zoomedImage.title}</h3>
                <p className="text-white text-opacity-80">{zoomedImage.issuer} • {zoomedImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
