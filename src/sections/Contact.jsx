import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "achiralaovong@gmail.com",
      href: "mailto:achiralaovong@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+66 83 058 9596",
      href: "tel:+66830589596"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Amphoe Hua Hin, Prachuap Khiri Khan, Thailand",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/AchiraLaovong",
      description: "Check out my code"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/achira-laovong",
      description: "Professional network"
    }
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
            <MessageSquare className="w-4 h-4 text-zzz-primary" />
            <span className="text-sm zzz-text-secondary">Contact</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold zzz-text-title mb-4">
            Let's <span className="zzz-accent-primary">Connect</span>
          </h2>

          <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>

        <div className="zzz-grid zzz-grid-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="zzz-card p-8"
          >
            <h3 className="text-2xl font-semibold zzz-text-title mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div className="zzz-grid zzz-grid-2">
                <div>
                  <label className="block text-sm font-medium zzz-text-secondary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="zzz-input"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium zzz-text-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="zzz-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="zzz-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="zzz-input"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="zzz-input resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="zzz-button-primary w-full flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold zzz-text-title mb-6">Get in Touch</h3>
              <p className="zzz-text-body leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="zzz-card p-4 flex items-center gap-4 zzz-hover-lift block"
                  >
                    <div className="p-2 bg-zzz-grey-1 rounded-lg text-zzz-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium zzz-text-title">{info.label}</div>
                      <div className="zzz-text-secondary">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold zzz-text-title mb-4">Connect Online</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="zzz-card p-4 flex items-center gap-4 zzz-hover-lift block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 bg-zzz-grey-1 rounded-lg text-zzz-primary">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium zzz-text-title">{social.label}</div>
                      <div className="zzz-text-secondary text-sm">{social.description}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 zzz-text-tertiary" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="zzz-card p-6 text-center bg-zzz-primary-light bg-zzz-grey-1">
              <h4 className="text-lg font-semibold zzz-text-title mb-2">
                Quick Response Guaranteed
              </h4>
              <p className="zzz-text-secondary text-sm mb-4">
                I typically respond to messages within 24 hours
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-zzz-green rounded-full animate-pulse"></div>
                <span className="text-sm text-zzz-green font-medium">Available for projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
