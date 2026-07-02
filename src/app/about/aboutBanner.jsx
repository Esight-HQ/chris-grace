"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const AboutBanner = ({ title = "About Us", subtitle = "Your Trusted Partner in Global Education & Careers" }) => {
  return (
    <section className="about-banner">
      <div className="banner-bg">
        <img 
          src="/assets/images/about-banner.png" 
          alt="About Christ Grace" 
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
            <span>{title}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
