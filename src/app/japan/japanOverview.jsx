"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe } from 'lucide-react';

const JapanOverview = () => {
    return (
        <section className="dest-overview">
            <div className="container">
                <div className="overview-cards">
                    {[
                        { icon: <GraduationCap />, title: "Scholarship Ease", desc: "MEXT and JASSO scholarships cover tuition and living." },
                        { icon: <BookOpen />, title: "Language Support", desc: "English-taught programs available in major universities." },
                        { icon: <Globe />, title: "Post-study Work", desc: "Extended job hunting visas for international graduates." }
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

export default JapanOverview;
