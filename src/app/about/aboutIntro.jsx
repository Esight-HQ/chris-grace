"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Target, Award, Users, ArrowRight } from 'lucide-react';

const AboutIntro = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section 
      className="about-intro-section" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className="intro-grid">
          {/* Left Content */}
          <div className="intro-content">
            <motion.div 
              className="section-badge"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              WHO WE ARE
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Your Gateway to <br />
              <span className="gradient-text">International Excellence</span>
            </motion.h2>
            
            <motion.p
              className="main-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Christ Grace stands at the forefront of global educational consultancy, bridging the gap between ambitious students and world-class institutions. 
            </motion.p>
            
            <div className="intro-features">
              {[
                { icon: <Target />, title: "Personalized Strategy", desc: "Tailored roadmaps for every unique student journey." },
                { icon: <Award />, title: "Expert Mentorship", desc: "Guidance from seasoned international professionals." },
                { icon: <Users />, title: "Global Network", desc: "Direct connections with top-tier universities worldwide." }
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  className="feat-card-interactive"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ x: 10 }}
                >
                  <div className="feat-icon-glow">{feat.icon}</div>
                  <div className="feat-info">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                  <ArrowRight className="feat-arrow" size={18} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image with Parallax */}
          <div className="intro-image-wrapper">
            <motion.div 
              className="main-image-container"
              style={{
                rotateX: mousePos.y * 10,
                rotateY: mousePos.x * 10,
                transition: { type: "spring", stiffness: 100, damping: 30 }
              }}
            >
              <div className="image-glass-frame">
                <img src="/assets/images/about-intro.png" alt="About Christ Grace" className="hero-img" />
              </div>
              
              {/* Floating Interactive Badges */}
              <motion.div 
                className="floating-badge experience"
                animate={{ 
                  y: [0, -10, 0],
                  x: mousePos.x * 30 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="badge-inner">
                  <span className="number">12+</span>
                  <span className="lbl">Years Success</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="floating-badge success"
                animate={{ 
                  y: [0, 10, 0],
                  x: mousePos.x * -20 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="badge-inner-alt">
                   <div className="success-icon"><Award size={20} /></div>
                   <div className="success-txt">
                      <strong>98%</strong>
                      <span>Visa Rate</span>
                   </div>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="decorative-blobs">
              <div className="blob-1"></div>
              <div className="blob-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
