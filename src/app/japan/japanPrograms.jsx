"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const JapanPrograms = () => {
    return (
        <section className="dest-programs">
            <div className="container">
                <div className="section-header-centered">
                    <h2>Popular <span>Programs</span></h2>
                    <p>Join the next generation of innovators in these high-demand fields.</p>
                </div>
                
                <div className="programs-grid">
                    {[
                        "Robotics & AI",
                        "Data Science",
                        "Automotive Engineering",
                        "Game Design & Animation",
                        "Business & Management",
                        "Japanese Studies"
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

export default JapanPrograms;
