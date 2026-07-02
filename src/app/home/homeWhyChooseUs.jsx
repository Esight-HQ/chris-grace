"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Link, CheckCircle2, Globe, MessageCircle, Trophy } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Target size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "Personalised Counseling",
    desc: "Every student is unique. We tailor our guidance to your strengths, goals, and budget."
  },
  {
    id: 2,
    icon: <Link size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "200+ University Partners",
    desc: "Direct partnerships with top universities in Germany, Japan, and across India."
  },
  {
    id: 3,
    icon: <CheckCircle2 size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "98% Visa Success Rate",
    desc: "Our thorough preparation and documentation expertise means near-perfect visa approvals."
  },
  {
    id: 4,
    icon: <Globe size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "End-to-End Support",
    desc: "From counseling to post-arrival assistance — we're with you every step of the way."
  },
  {
    id: 5,
    icon: <MessageCircle size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "Transparent Process",
    desc: "No hidden fees. We keep you informed at every stage with regular WhatsApp updates."
  },
  {
    id: 6,
    icon: <Trophy size={30} strokeWidth={1.5} color="var(--primaryColor)" />,
    title: "10+ Years Experience",
    desc: "A decade of placing students in top institutions globally with proven results."
  }
];

export default function HomeWhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">WHY CHOOSE US</span>
          <h2 className="section-title">Putting Your Future <span className="highlight">First</span></h2>
          <p className="section-subtitle">We don't just process applications; we engineer successful global careers.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((item, index) => (
            <motion.div 
              key={item.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
