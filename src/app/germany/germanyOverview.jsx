"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, Globe } from 'lucide-react';

const GermanyOverview = () => {
    return (
        <section className="dest-overview">
            <div className="container">
                <div className="overview-cards">
                    {[
                        { icon: <Zap />, title: "Zero Tuition", desc: "Most public universities offer free education for international students." },
                        { icon: <Building2 />, title: "Industrial Hub", desc: "Home to giants like BMW, Siemens, and SAP for internship & jobs." },
                        { icon: <Globe />, title: "Job Seeker Visa", desc: "18-month post-study work permit to find your dream role." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            className="overview-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GermanyOverview;
