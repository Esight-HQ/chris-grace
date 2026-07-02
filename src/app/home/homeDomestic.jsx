"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Cpu, Briefcase, Atom } from 'lucide-react';

const domesticPrograms = [
  { id: 'medical', label: 'Medical', icon: <Stethoscope size={22} /> },
  { id: 'engineering', label: 'Engineering', icon: <Cpu size={22} /> },
  { id: 'management', label: 'Management', icon: <Briefcase size={22} /> },
  { id: 'arts', label: 'Arts & Science', icon: <Atom size={22} /> },
];

export default function HomeDomestic() {
  const containerRef = useRef(null);

  // Magic spotlight hover effect tracking mouse position
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="domestic-section">
      <div className="container">
        
        <motion.div 
          className="domestic-banner"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Background Layers */}
          <div className="glow-base"></div>
          <div className="dot-pattern"></div>
          <div className="spotlight-overlay"></div>

          <div className="domestic-content">
            
            {/* Left Side: Info */}
            <div className="info-side">
              <motion.div 
                className="flag-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="emoji">🇮🇳</span>
                <span className="badge-text">Study in India</span>
              </motion.div>
              
              <h2 className="title">Domestic Admissions</h2>
              <p className="desc">
                Expert guidance for MBBS, Engineering, Management and more at India's top colleges. Secure your future locally with our premier network.
              </p>
              
              <button className="explore-btn">
                <span>Explore Domestic</span>
                <div className="arrow-wrap">
                  <ArrowRight size={18} className="arrow" />
                </div>
              </button>
            </div>

            {/* Right Side: Interactive Morphing Pills */}
            <div className="programs-side">
              {domesticPrograms.map((prog, i) => (
                <motion.div 
                  key={prog.id}
                  className="program-pill"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), type: 'spring', stiffness: 80 }}
                >
                  <div className="hover-glow"></div>
                  <div className="pill-content">
                    <div className="pill-icon">{prog.icon}</div>
                    <span className="pill-label">{prog.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
