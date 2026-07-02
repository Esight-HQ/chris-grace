"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Globe, GraduationCap, Briefcase, IndianRupee, Landmark, ShieldCheck } from 'lucide-react';

const GermanyAusbilding = () => {
    const highlights = [
        { icon: <GraduationCap size={20} />, text: "Zero Tuition Fee" },
        { icon: <Briefcase size={20} />, text: "Confirmed Job" },
        { icon: <Landmark size={20} />, text: "No Blocked Account for Visa" },
        { icon: <IndianRupee size={20} />, text: "Fixed Salary Between 1100-1500 Euro" },
        { icon: <Globe size={20} />, text: "Easy PR and Citizenship" },
        { icon: <ShieldCheck size={20} />, text: "Academic & Work Qualification" },
    ];

    return (
        <section className="ausbildung-section">
            <div className="container">
                <motion.div 
                    className="section-header-left mb-50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Best <span>Ausbildung in Germany Consultant</span> in Kerala</h2>
                    <p className="subtitle-alt">Unlock global opportunities with our specialized education pathways.</p>
                </motion.div>

                <div className="ausbildung-grid">
                    <motion.div 
                        className="content-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            If you are searching for the <strong>best Ausbildung in Germany Consultant in Kerala</strong>, then look no further than Chris Grace. Instead of purely theoretical knowledge, if you prefer real-life working experience and want to launch your career in one of the most advanced economies in the world, the Ausbildung program is your best path.
                        </p>
                        <p>
                            In the German education system, Ausbildung courses play a pivotal role. Designed specifically to bridge the gap between academic learning and industrial requirements, these programs provide the precise skills demanded by top-tier industries.
                        </p>
                        <p>
                            The German Government is committed to this dual-education system, allowing international students to work in German companies as apprentices. Students from across the globe can join these courses to gain hands-on experience, develop essential industry skills, and build a foundation for a successful career or even their own business ventures.
                        </p>
                        <div className="brand-tag">Chris Grace — Best Ausbildung Institute in Kerala</div>
                    </motion.div>

                    <motion.div 
                        className="content-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="ausbildung-card">
                            <div className="card-image-bg">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Ausbildung Students" />
                                <div className="overlay-gradient"></div>
                                <div className="card-header-floating">
                                    <span className="badge">Vocational Training</span>
                                    <h3>AUSBILDUNG IN GERMANY</h3>
                                    <p>Start your global education journey today</p>
                                </div>
                            </div>
                            
                            <div className="card-body">
                                <div className="highlights-grid">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="highlight-item">
                                            <div className="icon-box">
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="card-footer">
                                    <div className="contact-info">
                                        <div className="info-item">
                                            <Phone size={16} />
                                            <span>+91 987-111-2994</span>
                                        </div>
                                        <div className="info-item">
                                            <Globe size={16} />
                                            <span>www.chrisgrace.com</span>
                                        </div>
                                    </div>
                                    <button className="btn-enquire">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyAusbilding;
