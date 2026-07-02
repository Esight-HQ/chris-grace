"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, School, CheckCircle, Clock } from 'lucide-react';

const counterData = [
  {
    id: 1,
    title: "Students Placed",
    value: 500,
    suffix: "+",
    icon: <Users size={32} />,
    color: "#ff814d" // Vivid Pure Orange
  },
  {
    id: 2,
    title: "Partner Universities",
    value: 50,
    suffix: "+",
    icon: <School size={32} />,
    color: "#5fa07a" // Solid Rich Green
  },
  {
    id: 3,
    title: "Visa Success Rate",
    value: 98,
    suffix: "%",
    icon: <CheckCircle size={32} />,
    color: "#7493cc" // Solid Bright Blue
  },
  {
    id: 4,
    title: "Years Experience",
    value: 10,
    suffix: "+",
    icon: <Clock size={32} />,
    color: "#ff814d" // Consistent Pure Orange
  }
];

const StatCard = ({ item, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = item.value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [item.value]);

  return (
    <motion.div 
      className="stat-card"
      style={{ 
        background: `${item.color}`, 
        opacity: 1, // Forced solid
        boxShadow: `0 25px 50px -12px ${item.color}80` 
      }}
      initial={{ opacity: 1, y: 0 }} // Remove entrance animation for solid look
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="stat-icon-wrapper">
        {item.icon}
      </div>
      <div className="stat-content">
        <h3 className="stat-value">
          {count}{item.suffix}
        </h3>
        <p className="stat-label">{item.title}</p>
      </div>
    </motion.div>
  );
};

export default function HomeCounter() {
  return (
    <section className="homeCounterSection">
      <div className="container">
        <div className="stat-grid">
          {counterData.map((item, index) => (
            <StatCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
