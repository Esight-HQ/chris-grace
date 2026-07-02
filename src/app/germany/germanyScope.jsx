"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const GermanyScope = () => {
    return (
        <section className="germany-scope-section">
            <div className="container">
                <motion.div 
                    className="section-header-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title">Scope of <span>Ausbildung in Germany</span></h2>
                    <div className="title-decorator">
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                    </div>
                </motion.div>

                <div className="scope-container">
                    <div className="scope-grid">
                        <motion.div 
                            className="scope-content-box"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="icon-badge">
                                <Briefcase size={28} />
                            </div>
                            <p>
                                Through this apprenticeship system, you will gain **practical skills and professional experience** that are highly valued by German employers, paving the way for a successful and long-term career in Germany's robust job market.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="scope-content-box"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="icon-badge">
                                <GraduationCap size={28} />
                            </div>
                            <p>
                                Ausbildung program in Germany offers international candidates a **unique pathway** to gain world-class vocational training while receiving a monthly stipend.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="scope-footer-tag"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="tag-content">
                            <span>Future Proof</span>
                            <strong>Choose Chris Grace</strong>
                            <ArrowRight size={18} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyScope;
