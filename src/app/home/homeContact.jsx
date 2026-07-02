"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Share2, Globe } from 'lucide-react';

const contactOptions = [
  {
    id: 1,
    icon: <Phone size={24} />,
    title: "Call Us",
    value: "+91 80112 34567",
    desc: "Available Mon-Sat, 9AM-7PM",
    color: "var(--primaryColor)"
  },
  {
    id: 2,
    icon: <Mail size={24} />,
    title: "Email Us",
    value: "info@chrisgrace.edu",
    desc: "We usually reply within 24 hours",
    color: "var(--secondaryColor)"
  },
  {
    id: 3,
    icon: <MapPin size={24} />,
    title: "Visit Us",
    value: "Chennai, Tamil Nadu",
    desc: "Book an appointment for face-to-face counseling",
    color: "var(--tertiaryColor)"
  }
];

export default function HomeContact() {
  return (
    <section className="contact-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">CONTACT US</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Reach out to us for any queries about study abroad or domestic admissions.</p>
        </motion.div>

        <div className="contact-grid">
          
          {/* Left Side: Contact Cards */}
          <div className="contact-info">
            {contactOptions.map((opt, index) => (
              <motion.div 
                key={opt.id}
                className="contact-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ '--accent': opt.color }}
              >
                <div className="card-icon">{opt.icon}</div>
                <div className="card-details">
                  <h4>{opt.title}</h4>
                  <p className="value">{opt.value}</p>
                  <p className="desc">{opt.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="social-links-wrap">
              <h4>Follow Our Journey</h4>
              <div className="links">
                <a href="#"><Share2 size={20} /></a>
                <a href="#"><MessageCircle size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-head">
                <h3>Quick Inquiry</h3>
                <p>Send us a message and our counselor will call you back.</p>
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select defaultValue="">
                  <option value="" disabled>Select Destination</option>
                  <option value="germany">Germany</option>
                  <option value="japan">Japan</option>
                  <option value="india">India (Domestic)</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
