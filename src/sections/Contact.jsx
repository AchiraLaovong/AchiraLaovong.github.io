import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Job Inquiry');
      const body = encodeURIComponent(
        `Hi Achira,\n\n${formData.message}\n\nBest regards,\n${formData.firstName} ${formData.lastName}\n\nContact: ${formData.email}`
      );
      const mailtoLink = `mailto:achiralaovong@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="zzz-section bg-zzz-white" id="contact">
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
            Let's Work <span className="zzz-accent-primary">Together</span>
          </h2>

          <p className="text-xl zzz-text-secondary max-w-3xl mx-auto">
            Looking to hire a data scientist? I'm actively seeking new opportunities where I can apply my skills in machine learning, data analysis, and building data-driven solutions.
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

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-zzz-green bg-opacity-10 border border-zzz-green text-zzz-green rounded-lg">
                Message sent successfully! Your email client should have opened with the message.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-zzz-red bg-opacity-10 border border-zzz-red text-zzz-red rounded-lg">
                There was an error sending your message. Please try again or contact me directly.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="zzz-grid zzz-grid-2">
                <div>
                  <label className="block text-sm font-medium zzz-text-secondary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="zzz-input"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium zzz-text-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="zzz-input"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="zzz-input"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="zzz-input"
                  placeholder="Job Opportunity / Interview Request / Team Opening"
                />
              </div>

              <div>
                <label className="block text-sm font-medium zzz-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="zzz-input resize-none"
                  placeholder="Tell me about the role, your team, and what you're looking for. I'd love to learn more about the opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="zzz-button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <h3 className="text-2xl font-semibold zzz-text-title mb-6">Ready to Hire</h3>
              <p className="zzz-text-body leading-relaxed mb-6">
                I'm currently seeking full-time opportunities in data science, machine learning, or analytics roles. Whether you have an opening for a junior data scientist, need someone for a specific project, or want to discuss potential fit for your team, I'd be excited to hear from you.
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
            <div className="zzz-card p-6 text-center bg-zzz-grey-1">
              <h4 className="text-lg font-semibold zzz-text-title mb-2">
                Available for Hire
              </h4>
              <p className="zzz-text-secondary text-sm mb-4">
                Currently looking for my next opportunity. I respond to all hiring inquiries within 24 hours and am available for interviews.
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-zzz-green rounded-full animate-pulse"></div>
                <span className="text-sm text-zzz-green font-medium">Actively job searching</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
