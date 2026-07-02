"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight, Quote } from 'lucide-react';

const GermanyApply = () => {
    return (
        <section className="germany-apply-section">
            <div className="container">
                <motion.div 
                    className="section-header-left mb-60"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="title-alt">How to apply for <span>Ausbildung (Vocational Training) in Germany</span></h2>
                    <p className="subtitle-alt">A comprehensive guide to launching your professional career through Germany's world-class dual education system.</p>
                </motion.div>

                <div className="apply-intro">
                    <p>
                        Applying for an <strong>Ausbildung program in Germany</strong> is a great way to gain hands-on professional training while earning a monthly stipend. The process begins with selecting the right occupation from hundreds of options — such as <strong>nursing, hospitality, IT, engineering, or automotive</strong>. After choosing your field, the next step is to prepare your documents, including your CV in the German format, educational certificates, passport, and motivation letter.
                    </p>
                    <p>
                        If you're an international applicant, it's important to have <strong>German language proficiency</strong>—usually a B1 or B2 level under the CEFR. You can obtain this through a certified institute or language course in your country. Once you're ready, you can start applying directly to German companies, training institutions, or through trusted Ausbildung consultants who assist with matching you to suitable employers.
                    </p>
                    <p>
                        After receiving a training contract (<strong>Ausbildungsvertrag</strong>), you can apply for a German visa at your nearest embassy by submitting all required documents. Upon approval, you can travel to Germany and start your vocational training, which lasts 2 to 3 years.
                    </p>
                    <p>
                        Through Ausbildung, you gain practical experience, earn a salary, and open the door to long-term career and settlement opportunities in Germany.
                    </p>
                </div>

                <div className="apply-grid">
                    {/* Left Card */}
                    <motion.div 
                        className="apply-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-top">
                            <div className="brand-side">
                                <h4>Ausbildung<br/>(Vocational)<br/>Training in Germany</h4>
                            </div>
                            <div className="detail-side">
                                <h3>Theoretical Class</h3>
                                <h2>(30%)</h2>
                            </div>
                        </div>
                        
                        <div className="card-middle">
                            <div className="info-side">
                                <div className="info-text">
                                    <ArrowRight size={20} className="red-arrow" />
                                    <p>Everything you need to know about Ausbildung (Vocational) Training</p>
                                </div>
                                <div className="quote-icon">
                                    <Quote size={20} fill="currentColor" />
                                </div>
                            </div>
                            <div className="mockup-side">
                                <div className="mobile-mockup">
                                    <div className="mockup-header">Chris Grace</div>
                                    <div className="mockup-icons">
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                    </div>
                                    <div className="mockup-footer">
                                        <div className="phone-line">
                                            <Smartphone size={10} />
                                            <span>987-111-2994</span>
                                        </div>
                                        <button className="btn-mini">Enquire Now</button>
                                        <div className="red-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <span>Ausbildung Training in Germany</span>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div 
                        className="apply-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-top">
                            <div className="brand-side">
                                <h4>Ausbildung<br/>(Vocational)<br/>Training in Germany</h4>
                            </div>
                            <div className="detail-side">
                                <h3>On The Job Training</h3>
                                <h2>(70%)</h2>
                            </div>
                        </div>
                        
                        <div className="card-middle">
                            <div className="info-side">
                                <div className="info-text">
                                    <ArrowRight size={20} className="red-arrow" />
                                    <p>Everything you need to know about Ausbildung (Vocational) Training</p>
                                </div>
                                <div className="quote-icon reverse">
                                    <Quote size={20} fill="currentColor" />
                                </div>
                            </div>
                            <div className="mockup-side">
                                <div className="mobile-mockup">
                                    <div className="mockup-header">Chris Grace</div>
                                    <div className="mockup-icons">
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                        <div className="icon-item"></div>
                                    </div>
                                    <div className="mockup-footer">
                                        <div className="phone-line">
                                            <Smartphone size={10} />
                                            <span>987-111-2994</span>
                                        </div>
                                        <button className="btn-mini">Enquire Now</button>
                                        <div className="red-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <span>Ausbildung in Germany Consultants</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GermanyApply;
