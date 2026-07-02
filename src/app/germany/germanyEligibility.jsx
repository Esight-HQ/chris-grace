"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Languages, 
    GraduationCap, 
    FileText, 
    Calendar,
    ArrowRightCircle,
    CheckCircle2
} from 'lucide-react';

const GermanyEligibility = () => {
    const visaDocuments = [
        "Confirmation letter from employer/training company",
        "Confirmation letter from the training school",
        "Language Proficiency Proof (B1/B2 Goethe Certificate)",
        "Updated Professional Resume",
        "Educational Qualification (Marksheet / Certificate / Degree)",
        "Comprehensive Health and Travel Insurance",
        "Biometric Photos (Passport Size)",
        "Covid Vaccination Certificate",
        "Police Clearance Certificate (PCC)"
    ];

    return (
        <section className="germany-eligibility-v3">
            <div className="container">
                {/* Minimal Header */}
                <motion.div 
                    className="section-header-left mb-50"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">Eligibility <span>& Path</span></h2>
                    <p className="subtitle-alt">Standardized requirements for entry into the German Vocational Training system.</p>
                </motion.div>

                <div className="eligibility-flow">
                    {/* Requirement 1 */}
                    <motion.div 
                        className="flow-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flow-side">
                            <div className="flow-icon orange"><Languages size={32} /></div>
                            <div className="flow-line"></div>
                        </div>
                        <div className="flow-content">
                            <h3>Language Proficiency</h3>
                            <p>
                                Ausbildung is primarily conducted in German. You need <strong>Level B1 (General)</strong> or <strong>B2 (Nursing)</strong> Goethe/Telc certificates. Strong communication is key for workplace integration.
                            </p>
                        </div>
                    </motion.div>

                    {/* Requirement 2 */}
                    <motion.div 
                        className="flow-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flow-side">
                            <div className="flow-icon green"><GraduationCap size={32} /></div>
                            <div className="flow-line"></div>
                        </div>
                        <div className="flow-content">
                            <h3>Academic Foundation</h3>
                            <p>
                                Minimum <strong>10+2 qualification</strong> in any stream with at least <strong>50% marks</strong>. Degree holders are also eligible for higher-level training programs.
                            </p>
                        </div>
                    </motion.div>

                    {/* Requirement 3 - Documents (Unboxed) */}
                    <motion.div 
                        className="flow-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flow-side">
                            <div className="flow-icon orange"><FileText size={32} /></div>
                            <div className="flow-line"></div>
                        </div>
                        <div className="flow-content">
                            <h3>Documentation Checklist</h3>
                            <ul className="clean-doc-list">
                                {visaDocuments.map((doc, i) => (
                                    <li key={i}>
                                        <ArrowRightCircle size={18} />
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Requirement 4 */}
                    <motion.div 
                        className="flow-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flow-side">
                            <div className="flow-icon green"><Calendar size={32} /></div>
                        </div>
                        <div className="flow-content">
                            <h3>Age Framework</h3>
                            <p>
                                Candidates should ideally be between <strong>18 to 30 years</strong> of age to align with the vocational training legal frameworks in Germany.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyEligibility;
