"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

const destinations = [
  {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    tagline: 'Study in the Heart of Europe',
    desc: "Experience world-class education seamlessly blended with rich history. Germany powers Europe's economy and offers exceptional tuition-free public university programs.",
    features: [
      "Tuition-free public universities",
      "Up to 18-month post-study work visa",
      "Thriving engineering & IT job market"
    ],
    colorTheme: 'var(--primaryColor)',
    bgImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'japan',
    country: 'Japan',
    flag: '🇯🇵',
    tagline: 'Where Tradition Meets Innovation',
    desc: "Dive into cutting-edge technology wrapped in centuries of culture. Japan offers incredible scholarship structures and is increasingly welcoming international talent.",
    features: [
      "Government & university scholarships",
      "World-leading tech & innovation hubs",
      "Part-time work allowed (28 hrs/week)"
    ],
    colorTheme: 'var(--tertiaryColor)',
    bgImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function HomeDestination() {
  return (
    <section className="destination-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">STUDY ABROAD</span>
          <h2 className="section-title">Choose Your Destination</h2>
          <p className="section-subtitle">Unlock global opportunities with our specialized education pathways.</p>
        </motion.div>

        {/* Dual Interactive Cards */}
        <div className="destination-grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id} 
              className="premium-dest-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ '--hover-color': dest.colorTheme }}
            >
              {/* Background Image Layer */}
              <div 
                className="card-bg"
                style={{ backgroundImage: `url(${dest.bgImage})` }}
              />
              
              {/* Overlay Gradient Layer */}
              <div className="card-overlay" />

              {/* Floating Flag */}
              <div className="card-flag">{dest.flag}</div>

              {/* Content Layer */}
              <div className="card-content">
                <div className="content-visible">
                  <div className="location-pin"><MapPin size={18} /> {dest.country}</div>
                  <h3 className="country-name">{dest.country}</h3>
                  <p className="country-tagline">{dest.tagline}</p>
                </div>
                
                {/* Hidden content that slides up on hover */}
                <div className="content-reveal">
                  <p className="country-desc">{dest.desc}</p>
                  
                  <ul className="country-features">
                    {dest.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="explore-btn">
                    Explore {dest.country} <ArrowRight size={16} className="arrow" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
