"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';

const AboutMissionVision = () => {
  const [hovered, setHovered] = useState(null);

  const data = [
    {
      id: 'mission',
      title: "Our Mission",
      subtitle: "Empowering Ambitions",
      icon: <Rocket />,
      image: "/assets/images/about-mission.png",
      color: "#F26522",
      desc: "Our mission is to provide world-class educational consultancy and language training that simplifies the journey for students aspiring to study abroad. We strive to be the most trusted partner by offering transparent, efficient, and student-centric solutions.",
      list: [
        "Integrity in every interaction",
        "Excellence in service delivery",
        "Student success as priority"
      ]
    },
    {
      id: 'vision',
      title: "Our Vision",
      subtitle: "The Global Standard",
      icon: <Eye />,
      image: "/assets/images/about-vision.png",
      color: "#007236",
      desc: "We envision a future where every student has seamless access to the finest educational opportunities across the globe. Our vision is to become the leading global educational bridge, recognized for our commitment to quality and innovation.",
      list: [
        "Global reach and influence",
        "Innovative ed-tech solutions",
        "Shaping future leaders"
      ]
    }
  ];

  return (
    <section className="mission-vision-interactive">
      <div className="container-full">
        <div className="mv-interactive-wrapper">
          {data.map((item) => (
            <motion.div 
              key={item.id}
              className={`mv-panel ${hovered === item.id ? 'active' : ''} ${hovered && hovered !== item.id ? 'inactive' : ''}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              layout
            >
              <div className="panel-bg">
                <img src={item.image} alt={item.title} />
                <div className="panel-overlay" style={{ '--accent': item.color }}></div>
              </div>

              <div className="panel-content-wrap">
                <div className="panel-header">
                  <div className="p-icon" style={{ backgroundColor: item.color }}>{item.icon}</div>
                  <div className="p-titles">
                    <span>{item.subtitle}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <AnimatePresence>
                  {(hovered === item.id || !hovered) && (
                    <motion.div 
                      className="panel-body"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <p>{item.desc}</p>
                      <div className="panel-list">
                        {item.list.map((li, i) => (
                          <div key={i} className="list-item">
                            <CheckCircle2 size={16} />
                            <span>{li}</span>
                          </div>
                        ))}
                      </div>
                      <button className="panel-btn" style={{ backgroundColor: item.color }}>
                        Learn More <ArrowUpRight size={16} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="vertical-label">
                <h2>{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
