"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Globe, Shield } from 'lucide-react';

const HomeParallax = () => {
    return (
        <section className="parallax-section">
            <div className="parallax-bg-wrapper">
                <div className="parallax-bg-overlay"></div>
            </div>
            <div className="container">
                <div className="parallax-content">
                    <motion.div 
                        className="parallax-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GraduationCap size={16} />
                        <span>TRANSFORMING FUTURES</span>
                    </motion.div>

                    <motion.h2 
                        className="parallax-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Your Global Education <br /> <span>Journey Starts Here</span>
                    </motion.h2>

                    <motion.div 
                        className="parallax-features"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="p-feat">
                            <Globe size={24} />
                            <div>
                                <h4>Global Reach</h4>
                                <p>Access to 500+ Top Universities</p>
                            </div>
                        </div>
                        <div className="p-feat">
                            <Shield size={24} />
                            <div>
                                <h4>Trusted Advice</h4>
                                <p>10+ Years of Excellence</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="parallax-actions"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/contact" className="p-btn-primary">
                            Begin Your Application
                            <ArrowUpRight size={18} />
                        </Link>
                        <Link href="/about" className="p-btn-secondary">
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeParallax;
