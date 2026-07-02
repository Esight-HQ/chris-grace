"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Languages, 
    FileSignature, 
    School, 
    FileEdit, 
    BadgeCheck, 
    Plane, 
    Globe2,
    CheckCircle2,
    Plus,
    Minus,
    HelpCircle,
    ChevronDown
} from 'lucide-react';

const GermanyProcessAdmission = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    const steps = [
        { 
            title: "Study and Learning of German Language", 
            icon: <Languages size={24} />,
            desc: "The foundation of Ausbildung. You typically need to reach B1 or B2 level proficiency to secure a contract and communicate effectively in a German workplace."
        },
        { 
            title: "Translation and Legitimation of Documents", 
            icon: <FileSignature size={24} />,
            desc: "All your academic and professional documents must be translated by certified translators and legalized for recognition in Germany."
        },
        { 
            title: "School Certificate Recognition", 
            icon: <School size={24} />,
            desc: "Comparison of your home country qualifications with the German education system (Anerkennung) to ensure eligibility."
        },
        { 
            title: "CV and Motivational Letters", 
            icon: <FileEdit size={24} />,
            desc: "Crafting a professional 'Lebenslauf' and a compelling cover letter tailored to the specific Ausbildung position you are targeting."
        },
        { 
            title: "Apply to Ausbildung Program", 
            icon: <BadgeCheck size={24} />,
            desc: "Direct applications to German companies. This involve interviews and selection processes common in the German corporate world."
        },
        { 
            title: "Apply to Visa", 
            icon: <Plane size={24} />,
            desc: "Once you have your training contract, you apply for a National Visa for vocational training at the German embassy."
        },
        { 
            title: "Arrival at Germany", 
            icon: <Globe2 size={24} />,
            desc: "Final step: Traveling to Germany, registering your address (Anmeldung), and starting your exciting journey as an apprentice."
        }
    ];

    const faqItems = [
        {
            q: "What certification do I get after the training ends?",
            a: "The Ausbildung training ends with a state-certified exam. You become a certified skilled worker, which is a pivotal step for securing a German permanent residence permit."
        },
        {
            q: "Can I stay with the same employer after graduation?",
            a: "Yes. In fact, most candidates prefer staying, and employers highly value apprentices who are already trained in their specific workflow and culture."
        },
        {
            q: "Is the certificate recognized outside of Germany?",
            a: "Absolutely. Graduates can work globally. Countries like Austria, Switzerland, Finland, and Luxembourg give high preference to German-trained professionals."
        },
        {
            q: "Can I work permanently in Germany?",
            a: "Yes, you receive immediate legal permission to work permanently for German firms upon the successful completion of your apprenticeship."
        },
        {
            q: "When can I apply for German Citizenship?",
            a: "German Citizenship typically becomes available after a few years of professional work in the country, following your graduation."
        },
        {
            q: "Are there options for further studies or self-employment?",
            a: "Skilled candidates have the option to upgrade their education, specialize in niche fields, advance their career further, or even choose self-employment."
        }
    ];

    return (
        <section className="germany-process-section">
            <div className="container">
                {/* 1. Interactive Step Roadmap */}
                <motion.div 
                    className="section-header-left mb-60"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Admission <span>Step-by-Step</span></h2>
                    <p className="subtitle-alt">A transparent roadmap for international students aiming for the German dual education system.</p>
                </motion.div>

                <div className="steps-accordion-wrap mb-100">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            className="roadmap-accordion-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="step-header">
                                <div className="step-count">0{idx + 1}</div>
                                <div className="step-icon-main">{step.icon}</div>
                                <div className="step-title-wrap">
                                    <h4>{step.title}</h4>
                                </div>
                                <div className="step-status">
                                    <CheckCircle2 size={18} />
                                </div>
                            </div>
                            <div className="step-desc-minimal">
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. FAQ Style Section for Challenges & After-Career */}
                <div className="ausbildung-faq-section py-80">
                    <motion.div 
                        className="section-header-left mb-50"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="title-alt">Common Questions & <span>Future Impact</span></h2>
                        <p className="subtitle-alt">Everything you need to know about the impact of completing Ausbildung.</p>
                    </motion.div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-pills-container">
                                {faqItems.map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`faq-pill-item ${activeFaq === i ? 'active' : ''}`}
                                        onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                                    >
                                        <div className="faq-pill-header">
                                            <div className="q-wrap">
                                                <HelpCircle size={18} className="h-icon" />
                                                <h4>{item.q}</h4>
                                            </div>
                                            <div className="toggle-box">
                                                {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {activeFaq === i && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="faq-pill-content"
                                                >
                                                    <div className="p-inner">
                                                        <p>{item.a}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GermanyProcessAdmission;
