"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonialsRow1 = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Medical Student, Germany",
    text: "The guidance I received for my MBBS in Germany was exceptional. They handled everything from documents to visa flawlessly.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    rating: 5
  },
  {
    id: 2,
    name: "Akash Patel",
    role: "Engineering, Japan",
    text: "Studying in Japan was my dream. Christ's Grace made it a reality with their specialized training and university tie-ups.",
    avatar: "https://i.pravatar.cc/150?u=akash",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Management, UK",
    text: "Very professional and transparent counseling. They really take the time to understand your career goals.",
    avatar: "https://i.pravatar.cc/150?u=priya",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "MBBS, India",
    text: "Best domestic admission support. Secured an MBBS seat in a top college within my budget.",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    rating: 4
  }
];

const testimonialsRow2 = [
  {
    id: 5,
    name: "Sneha Reddy",
    role: "Nursing, Canada",
    text: "Prompt responses and great attention to detail. My Canada study permit was approved without any issues.",
    avatar: "https://i.pravatar.cc/150?u=sneha",
    rating: 5
  },
  {
    id: 6,
    name: "Deepak Varma",
    role: "Engineering, India",
    text: "Excellent career guidance. They helped me choose the right branch based on my interests and market demand.",
    avatar: "https://i.pravatar.cc/150?u=deepak",
    rating: 5
  },
  {
    id: 7,
    name: "Anjali Gupta",
    role: "PG Medicine, USA",
    text: "Their USMLE guidance and clinical rotations support are top notch. Highly recommend to all medical aspirants.",
    avatar: "https://i.pravatar.cc/150?u=anjali",
    rating: 5
  },
  {
    id: 8,
    name: "Karthik Rajan",
    role: "Architecture, Japan",
    text: "The Japan pathway program is very well structured. I'm now studying in Tokyo thanks to them.",
    avatar: "https://i.pravatar.cc/150?u=karthik",
    rating: 5
  }
];

const TestimonialCard = ({ item }) => (
  <div className="testimonial-card">
    <div className="quote-icon"><Quote size={20} fill="currentColor" /></div>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill={i < item.rating ? "#FF9800" : "none"} stroke={i < item.rating ? "#FF9800" : "#ccc"} />
      ))}
    </div>
    <p className="testimonial-text">{item.text}</p>
    <div className="user-profile">
      <img src={item.avatar} alt={item.name} className="avatar" />
      <div className="user-info">
        <h4 className="name">{item.name}</h4>
        <span className="role">{item.role}</span>
      </div>
    </div>
  </div>
);

export default function HomeTestimonials() {
  return (
    <section className="testimonial-section">
      <div className="container-fluid px-0">
        
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">TESTIMONIALS</span>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Hear from thousands of students who have realized their dreams with us.</p>
          </motion.div>
        </div>

        <div className="marquee-wrapper">
          {/* Row 1: Right to Left (Wait, user said one moving right) */}
          <div className="marquee-container row-1">
            <motion.div 
              className="marquee-track"
              animate={{ x: [-1600, 0] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...testimonialsRow1, ...testimonialsRow1].map((item, index) => (
                <TestimonialCard key={`${item.id}-${index}`} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right (Wait, user said bottom row moving left) */}
          <div className="marquee-container row-2">
            <motion.div 
              className="marquee-track"
              animate={{ x: [0, -1600] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[...testimonialsRow2, ...testimonialsRow2].map((item, index) => (
                <TestimonialCard key={`${item.id}-${index}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
