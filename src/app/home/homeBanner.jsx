"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Globe2, BookOpenCheck, Headphones } from 'lucide-react';

const bannerData = [
  {
    id: 1,
    tag: "GLOBAL OPPORTUNITIES",
    title: "EXCELLENCE IN",
    subtitle: "GERMANY",
    desc: "Join the world’s elite engineering and technical universities with zero tuition fees. We guide you from language training to final visa approval.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=90",
    themeColor: "#FFCE00",
    benefits: ["Free Tuition", "Work Rights", "High Salary"],
    floatingCard: {
      title: "Germany 2026",
      desc: "Enroll in top public universities.",
      btnText: "Start Application",
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&q=80"
    }
  },
  {
    id: 2,
    tag: "FUTURE TECHNOLOGY",
    title: "INNOVATE IN",
    subtitle: "JAPAN",
    desc: "Master the Japanese language and technical skills in Asia's innovation hub. We offer complete support for vocational and language school admissions.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85",
    themeColor: "#BC002D",
    benefits: ["Study & Work", "Tech Hub", "Culture"],
    floatingCard: {
      title: "Japan Intake",
      desc: "Work + Study programs today.",
      btnText: "Explore Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
    }
  },
  {
    id: 3,
    tag: "DOMESTIC EXCELLENCE",
    title: "ADMISSIONS IN",
    subtitle: "INDIA",
    desc: "Secure direct admission to India's top Engineering, Medical, and Management colleges. We bridge the gap to your dream campus in India.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85",
    themeColor: "#F26522",
    benefits: ["Top Colleges", "Direct Admission", "NEET/JEE"],
    floatingCard: {
      title: "India 2025",
      desc: "Direct admissions open for 2025.",
      btnText: "Consult Now",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80"
    }
  }
];

export default function HomeBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = bannerData[index];

  return (
    <section className="homeBanner" style={{ '--accentColor': current.themeColor }}>
      {/* Country Selection - Fixed Alignment */}
      <div className="banner-nav-bar">
        <div className="nav-chips-container">
          {bannerData.map((item, i) => (
            <button 
              key={item.id}
              className={`nav-chip ${index === i ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              style={{ 
                '--chipAccent': item.themeColor 
              }}
            >
              {item.subtitle}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="banner-slide"
          style={{ backgroundImage: `url(${current.image})` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container">
            <div className="banner-content">
              <motion.div 
                className="banner-tag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ color: current.themeColor }}
              >
                {current.tag}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {current.title} <br />
                <span className="accent-text" style={{ color: current.themeColor }}>{current.subtitle}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {current.desc}
              </motion.p>

              {/* Updated Benefits Content Instead of Award Badges */}
              <div className="banner-benefits">
                {current.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="benefit-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <CheckCircle2 size={16} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions Support Icons */}
              <div className="banner-support">
                  <div className="support-icon"><Globe2 size={18} /></div>
                  <div className="support-icon"><BookOpenCheck size={18} /></div>
                  <div className="support-icon"><Headphones size={18} /></div>
                  <span className="support-text">24/7 Expert Support Available</span>
              </div>
            </div>

            {/* Floating Card Content */}
            <motion.div 
              className="banner-card"
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="card-top">
                   <img src={current.floatingCard.image} alt="Program" className="mini-img" />
                   <div className="card-status-badge" style={{ background: current.themeColor }}>ENROLLING NOW</div>
              </div>
              <h4>{current.floatingCard.title}</h4>
              <p>{current.floatingCard.desc}</p>
              <button className="btn-cta" style={{ background: current.themeColor }}>
                {current.floatingCard.btnText} <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}