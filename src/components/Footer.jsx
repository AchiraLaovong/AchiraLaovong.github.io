import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AchiraLaovong",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/achira-laovong",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="zzz-section bg-zzz-grey-9 border-t border-zzz-grey-3">
      <div className="zzz-container">
        {/* Main Footer Content */}
        <div className="zzz-grid zzz-grid-3 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-zzz-white">Achira Laovong</h3>
            <p className="text-zzz-grey-4 leading-relaxed">
              Data Scientist & Machine Learning Engineer passionate about transforming
              data into actionable insights.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2 bg-zzz-grey-8 hover:bg-zzz-grey-7 text-zzz-grey-4 hover:text-zzz-white rounded-lg transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-zzz-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-zzz-grey-4 hover:text-zzz-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-zzz-white">Contact</h4>
            <div className="space-y-2 text-zzz-grey-4">
              <div>your.email@example.com</div>
              <div>Available for projects</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zzz-green rounded-full animate-pulse"></div>
                <span className="text-zzz-green text-sm">Online</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zzz-grey-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-zzz-grey-5 text-sm"
            >
              <span>© {currentYear} Achira Laovong. Made with</span>
              <Heart className="w-4 h-4 text-zzz-red fill-current" />
              <span>using React & Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="#home"
                className="text-zzz-grey-5 hover:text-zzz-white transition-colors duration-200 text-sm flex items-center gap-2"
              >
                Back to Top
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↑
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
