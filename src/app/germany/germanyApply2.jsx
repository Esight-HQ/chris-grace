"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, UserCog, GraduationCap, MapPin, Users, Globe, Wallet } from 'lucide-react';

const GermanyApply2 = () => {
    const youtubeLinks = [
        { icon: <UserCog size={24} />, url: "https://www.youtube.com/watch?v=sXhSRoSFxuU", color: "#000" },
        { icon: <Users size={24} />, url: "https://www.youtube.com/watch?v=q6inrT5tm1M", color: "#e11d48" },
        { icon: <GraduationCap size={24} />, url: "https://www.youtube.com/watch?v=BXjaoH5gMVE", color: "#fbbd08" },
    ];

    const consultantBenefits = [
        {
            icon: <UserCog size={32} />,
            text: "The student who prefer the working knowledge and experience instead of the theoretical learning",
            color: "#3b82f6"
        },
        {
            icon: <Globe size={32} />,
            text: "The student who is looking for a gateway to make a career in Europe",
            color: "#fbbd08"
        },
        {
            icon: <Wallet size={32} />,
            text: "The student who is looking for study/work abroad with cost effective path",
            color: "#3b82f6"
        }
    ];

    return (
        <section className="germany-apply2-section">
            <div className="container">
                {/* Header Section */}
                <motion.div 
                    className="section-header-left mb-60"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Application <span>Procedure</span> & Strategy</h2>
                    <p className="subtitle-alt">Our step-by-step roadmap to securing your vocational training contract with top German employers.</p>
                </motion.div>

                {/* Map and Links Section */}
                <div className="map-links-container">
                    <motion.div 
                        className="map-side"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="germany-map-wrapper">
                            <img 
                                src="/assets/images/img11.png" 
                                alt="Germany Map" 
                                className="map-img"
                            />
                            {/* Connection Lines (CSS Powered) */}
                            <div className="connector-lines">
                                <span className="dot dot-black"></span>
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                            </div>
                        </div>
                    </motion.div>
                    
                    <div className="links-side">
                        {youtubeLinks.map((link, i) => (
                            <motion.a 
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="yt-link-item"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon-box" style={{ color: link.color }}>
                                    {link.icon}
                                </div>
                                <span className="url-text">{link.url}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Consultant CTA Section */}
                <motion.div 
                    className="section-header-left mb-40 mt-100"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Connect with <span>Top Experts</span> in Kerala</h2>
                    <p className="subtitle-alt">Get professional guidance from India's leading Ausbildung consultancy network.</p>
                </motion.div>

                <div className="consultant-benefits-grid">
                    {consultantBenefits.map((benefit, i) => (
                        <motion.div 
                            key={i}
                            className="benefit-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="benefit-icon" style={{ backgroundColor: benefit.color }}>
                                {benefit.icon}
                            </div>
                            <p>{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* New Info Sections Grid */}
                <div className="info-sections-grid mt-100">
                    <motion.div 
                        className="info-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-header-left mb-30">
                            <h2 className="title-alt" style={{ fontSize: '28px' }}>Program <span>Roadmap</span></h2>
                        </div>
                        <p>
                            The <strong>Ausbildung Courses in Germany</strong> year usually starts with two intakes. The first intake is in the month of April (summer intake) and second intake is in the month of August 1st or September 1st (winter intake). As already said, the Ausbildung in Germany is spread over the times at the company and at school wherein two-thirds of the lessons consist of those topics that are relevant and related to your apprenticeship/course. During this <strong>Ausbildung training in Germany</strong>, the vacation is provided to apprentices and they are entitled to four weeks or 24 working days per year vacation — this is available during the period when the vacation time is going on in school. Choose Migr8 <strong>– Best Ausbildung Consultant in Kerala</strong>
                        </p>
                    </motion.div>

                    <motion.div 
                        className="info-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="section-header-left mb-30">
                            <h2 className="title-alt" style={{ fontSize: '28px' }}>Monthly <span>Stipend</span> Benefits</h2>
                        </div>
                        <p>
                            A monthly salary is given to the student by the employer during the whole duration of training. This is the reason why there is no need to open the blocked account to pursue Ausbildung training in Germany. Currently, the student is earning monthly approx.. 1000 to 1500 euros gross on an average. It also depends on the region where you are undergoing Ausbildung Courses in Germany. Also the salary/stipend is increases every year of apprenticeship.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyApply2;
