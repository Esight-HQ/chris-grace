"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What are the basic requirements to study abroad?",
    answer: "Generally, you need a strong academic record, language proficiency test scores (like IELTS/TOEFL), valid passport, letters of recommendation, and a statement of purpose. Requirements vary widely by country and course."
  },
  {
    id: 2,
    question: "Do you guarantee MBBS admissions in Germany/Japan?",
    answer: "While we have a near 100% success rate for eligible candidates, admissions depend on your academic performance, entrance exam scores, and interview results. We provide comprehensive training to maximize your chances."
  },
  {
    id: 3,
    question: "Do you help with scholarships and educational loans?",
    answer: "Yes, we actively assist students in finding and applying for university-specific, government, and private scholarships. We also have tie-ups with leading banks to expedite education loan processing."
  },
  {
    id: 4,
    question: "Can I work part-time while studying abroad?",
    answer: "Most countries allow international students to work part-time (usually 20 hours/week during sessions and full-time during holidays). Our counselors will guide you on specific visa regulations for your destination."
  },
  {
    id: 5,
    question: "What does your domestic admission process involve?",
    answer: "We help you shortlist top Indian colleges based on your ranks (NEET, JEE, etc.) or merit, assist with management quota formalities if needed, and handle the complete application and precise counseling processes to secure your desired course."
  }
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="container">
        
        <div className="faq-grid">
          {/* Left Side: Header & Graphic */}
          <div className="faq-header-side">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">FAQ</span>
              <h2 className="section-title">Got Questions?</h2>
              <p className="section-subtitle">We have compiled the most commonly asked queries from our students and parents.</p>
            </motion.div>
            
            <motion.div 
              className="faq-graphic"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="graphic-circle c1"></div>
              <div className="graphic-circle c2"></div>
              <div className="question-mark">?</div>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="faq-accordion-side">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    <ChevronDown size={20} />
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
