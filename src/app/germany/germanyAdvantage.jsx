"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    CheckCircle2, 
    ShieldCheck, 
    Zap, 
    Star, 
    TrendingUp, 
    Globe, 
    Euro, 
    Heart, 
    Award,
    Clock,
    UserCheck,
    ArrowRight
} from 'lucide-react';

const GermanyAdvantage = () => {
    const mainBenefits = [
        { title: "Employment", desc: "Better Chances of Employment", icon: <UserCheck size={24} /> },
        { title: "Standard", desc: "Higher Learning Levels", icon: <Award size={24} /> },
        { title: "Lifestyle", desc: "Increased Job Satisfaction", icon: <Heart size={24} /> },
        { title: "Freedom", desc: "Increased Flexibility and Mobility", icon: <Globe size={24} /> },
        { title: "Impact", desc: "VET provides Mental Health Benefits", icon: <ShieldCheck size={24} /> },
        { title: "Future", desc: "Lifelong Learning Paths", icon: <TrendingUp size={24} /> },
        { title: "Financial", desc: "High Paying Job Prospects", icon: <Euro size={24} /> }
    ];

    const advantageList = [
        "Variety of professions to choose from based on interest and career aspirations",
        "No prior requirement of specific educational qualification for easy entry",
        "Training combines theory and practices - study and work simultaneously",
        "Massive demand for young professionals in the German market",
        "Stipend is paid from the start to the end of the program",
        "Ample jobs available across Europe post-completion",
        "State-controlled education system offering world-class standards"
    ];

    const consultantBenefits = [
        "Official work contract and guaranteed employment in German companies",
        "Local support services provided until successful settlement",
        "Employer-provided food, housing and health insurance during training",
        "Eligibility for Permanent Residency (PR) in Germany after 5 years",
        "Spousal visa and work rights allowed for candidate's partner",
        "Free education for self and all family members",
        "Expert guidance from the top Ausbildung consultants in Delhi"
    ];

    return (
        <section className="germany-advantage-section">
            <div className="container">
                {/* Header Section */}
                <motion.div 
                    className="section-header-left mb-50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Your Future in <span>Germany</span></h2>
                    <p className="subtitle-alt">Unlock premium vocational training with guaranteed career growth and global recognition.</p>
                </motion.div>

                {/* Part 1: Feature Grid */}
                <div className="benefits-grid">
                    {mainBenefits.map((benefit, i) => (
                        <motion.div 
                            key={i}
                            className="benefit-box"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-ring">{benefit.icon}</div>
                            <h4>{benefit.title}</h4>
                            <p>{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Part 2: Twin Advantage Block */}
                <div className="twin-advantage-wrap">
                    <motion.div 
                        className="adv-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Key Advantages</h3>
                        <div className="list-wrap">
                            {advantageList.map((item, i) => (
                                <div key={i} className="list-item">
                                    <ArrowRight size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="adv-card highlight"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Candidate Benefits</h3>
                        <div className="list-wrap">
                            {consultantBenefits.map((item, i) => (
                                <div key={i} className="list-item">
                                    <CheckCircle2 size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Part 3: Duration Banner */}
                <motion.div 
                    className="duration-banner"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="banner-content">
                        <h2>Duration of Ausbildung Course</h2>
                        <div className="para-wrap">
                            <p>
                                The duration of an Ausbildung (Vocational Training) course in Germany generally ranges from <strong>2 to 3.5 years</strong>, depending on the profession and program type. Most programs last 3 years, split between theoretical classes at a vocational school (<em>Berufsschule</em>) and practical training at a company.
                            </p>
                            <p>
                                Some fields like nursing or mechatronics may take up to 3.5 years, while commercial or hospitality programs can be completed in just 2 years. Shortening the training by 6-12 months is possible for exceptional performance or prior experience.
                            </p>
                            <p>
                                Trainees receive a <strong>monthly stipend (salary)</strong> starting from approx. <strong>1000€ - 1500€ gross</strong>, which increases every year. Completion leads to a recognized German qualification, opening doors to work across the EU and providing a pathway to <strong>Permanent Residency</strong>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GermanyAdvantage;
