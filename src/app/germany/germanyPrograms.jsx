"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const GermanyPrograms = () => {
    return (
        <section className="dest-programs">
            <div className="container">
                <div className="section-header-centered">
                    <h2>Top <span>Specializations</span></h2>
                    <p>Advance your career in Europe's strongest economy.</p>
                </div>
                
                <div className="programs-grid">
                    {[
                        "Mechanical Engineering",
                        "Information Technology",
                        "Sustainability Management",
                        "Biotechnology",
                        "International Business",
                        "Renewable Energy"
                    ].map((prog, i) => (
                        <motion.div 
                            key={i}
                            className="program-pill"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <CheckCircle size={18} className="check" />
                            <span>{prog}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GermanyPrograms;
