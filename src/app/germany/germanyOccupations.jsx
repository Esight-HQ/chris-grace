"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Flag, 
    Passport, 
    ClipboardCheck,
    Briefcase,
    Zap
} from 'lucide-react';

const GermanyOccupations = () => {
    const occupations = [
        {
            title: "Nursing",
            learn: "Caring for patients, security/safety, monitoring conditions, collaborating with doctors, following routine medical procedures, and maintaining critical health records.",
            task: "Professional nursing in hospitals, specialized clinics, retirement homes, social facilities, and advanced home-care settings.",
            color: "#fbe2d3"
        },
        {
            title: "Hospitality Experts",
            learn: "Hotel management, administrative workflows, kitchen hygiene standards, restaurant service (billing/serving), and front-office reception coordination.",
            task: "Executive roles in hotel departments including office management, reception, and guest services coordination.",
            color: "#e2f2d5"
        },
        {
            title: "Mechatronics Technician",
            learn: "Building/commissioning mechatronic systems, automation components, system programming, support services, and advanced repair protocols.",
            task: "Specialized work in assembly lines, system maintenance, component installation, and precision system testing.",
            color: "#d5f2f2"
        },
        {
            title: "Salesman & Saleslady",
            learn: "Sales strategies, customer relationship management, data recording, billing, team coordination, lead identification, and professional communication.",
            task: "Setting sales goals, developing market strategies, managing inquiries, proposal preparation, and team targets coordination.",
            color: "#f2eed5"
        },
        {
            title: "Warehouse & Logistics",
            learn: "Storage systems, inventory management, stock room oversight, and specialized requirement handling for diverse goods.",
            task: "Proper goods storage, space allocation, label updates, receipt processing, and delivery planning.",
            color: "#d5d9f2"
        },
        {
            title: "Office Management",
            learn: "Corporate administration, department workflows, business trip planning, meeting organization, accounting, and office supply management.",
            task: "Managing office operations, appointments, business documentation, conferences, and organizational coordination.",
            color: "#e2f2d5"
        },
        {
            title: "Food Technology",
            learn: "Food science, chemical/nutritional testing, machinery design, recipe improvement, and industrial hygiene safety standards.",
            task: "Modifying recipes, sample examination, manufacturing management, and safety monitoring in laboratory settings.",
            color: "#d5d9f2"
        },
        {
            title: "Industrial Clerk",
            learn: "Operational business management, finance, accounting, costing, material management, marketing, and human resource negotiation.",
            task: "Administrative roles in purchasing, work preparation, sales, marketing, and shipping departments.",
            color: "#fbe2d3"
        },
        {
            title: "Restaurant Expert",
            learn: "Front desk operations, table settings, guest advisory, hospitality marketing, event catering, and nutritional value calculations.",
            task: "Management roles in guest reception, sales promotion, and accounting within high-end restaurant environments.",
            color: "#e2f2d5"
        },
        {
            title: "Gardener",
            learn: "Industrial tree cultivation, landscape greenery maintenance, pond creation, soil enhancement, and heavy tool/machinery operation.",
            task: "Managing professional gardens, public parks, sports grounds, and green architecture for government offices.",
            color: "#d5f2f2"
        },
        {
            title: "Cook or Chef",
            learn: "Menu engineering, culinary chemistry, hygiene regulations, mass catering management (1000+), and experimental recipe development.",
            task: "Executive chef roles in hotels, food industry, and cruise ships, managing end-to-end food production.",
            color: "#fbe2d3"
        },
        {
            title: "Baker",
            learn: "Professional baking practices, safe food handling, sanitation, machine operation, and industrial safety regulations.",
            task: "Industrial production planning, material storage management, and advanced bakery manufacturing.",
            color: "#e2f2d5"
        },
        {
            title: "Commercial Driver",
            learn: "Traffic legislation, vehicle maintenance, customer contact protocols, and advanced logistics trip planning.",
            task: "Professional logistics planning, vehicle inspection, and loading/unloading cargo management.",
            color: "#fbe2d3"
        },
        {
            title: "Animal Husbandry",
            learn: "Feed ration preparation, mixtures, healthcare, cleaning protocols, and intensive care of diverse animals.",
            task: "Management of zoos or farms, animal care planning, data recording, and intensive care monitoring.",
            color: "#e2f2d5"
        }
    ];

    const techTracks = [
        "Electrician / Industrial Electrician",
        "Spa & Wellness Specialist",
        "Metal & Electrician Profession",
        "Automobile Profession",
        "Cosmetics Specialty"
    ];

    return (
        <section className="germany-occupations-section">
            <div className="container">
                {/* 1. Visa Guidance Section */}
                <div className="visa-guidance-wrapper mb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <motion.div 
                                className="section-header-left mb-40"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="title-alt">Visa Rules <span>Guidance</span> by Top Consultants</h2>
                                <p className="subtitle-alt">Standardized visa protocols for international Ausbildung candidates in Germany.</p>
                            </motion.div>
                            
                            <div className="visa-check-grid">
                                {[
                                    "To join the respective course, the candidate is granted a student visa.",
                                    "After joining, the TRC (Temporary Residence Card) is issued to the candidate.",
                                    "Spouse visa eligibility upon receiving TRC, allowing full-time work permissions.",
                                    "Schengen Visa access, allowing travel across 26 European countries."
                                ].map((text, i) => (
                                    <motion.div 
                                        key={i} 
                                        className="visa-item"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <ClipboardCheck size={20} />
                                        <p>{text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* 2. List of Occupations Grid */}
                <motion.div 
                    className="section-header-left mb-60"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">List of <span>Occupations</span></h2>
                    <p className="subtitle-alt">Explore over 300+ specialized tracks available for vocational training in Germany.</p>
                </motion.div>

                <div className="occupation-grid-system">
                    {occupations.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="occupy-card"
                            style={{ '--card-bg': item.color }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 3) * 0.1 }}
                        >
                            <div className="card-top-accent"></div>
                            <h3>{item.title}</h3>
                            <div className="card-body">
                                <div className="info-block">
                                    <h6>You will learn:</h6>
                                    <p>{item.learn}</p>
                                </div>
                                <div className="info-block">
                                    <h6>Work task:</h6>
                                    <p>{item.task}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Specialized Tracks Card */}
                    <motion.div 
                        className="occupy-card special"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-top-accent"></div>
                        <h3>Technical & Specialized Tracks</h3>
                        <div className="card-body">
                            <div className="special-list">
                                {techTracks.map((track, i) => (
                                    <div key={i} className="s-item">
                                        <Zap size={14} />
                                        <span>{track}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyOccupations;
