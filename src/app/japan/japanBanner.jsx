"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const JapanBanner = () => {
  return (
    <section className="about-banner dest-banner japan-banner">
      <div className="banner-bg">
        <img 
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" 
          alt="Study in Japan" 
          className="bg-img"
        />
        <div className="banner-overlay"></div>
      </div>
      
      <div className="container">
        <div className="banner-content">
          <motion.div 
            className="breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses">Destinations</Link>
            <ChevronRight size={14} />
            <span>Japan</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Study in <span>Japan</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience the perfect blend of ancient tradition and futuristic innovation.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default JapanBanner;
