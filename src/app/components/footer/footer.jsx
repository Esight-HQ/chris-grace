"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        
        {/* Top Newsletter / CTA Section */}
        <div className="footer-cta-box">
          <div className="cta-content">
            <h2>Ready to start your journey?</h2>
            <p>Get a free counseling session with our expert advisors today.</p>
          </div>
          <div className="cta-action">
            <Link href="/contact" className="action-btn">
              Book Appointment <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-widget brand-widget">
            <div className="footer-logo">
              <Link href="/">
                {/* Fallback styling for logo text if img breaks */}
                <h2 style={{color: 'white', fontWeight: 800, fontFamily: 'var(--font-secondary)', margin: 0}}>
                  CHRIST'S <span style={{color: 'var(--primaryColor)'}}>GRACE</span>
                </h2>
              </Link>
            </div>
            <p className="brand-desc">
              Christ's Grace Edu Solution is your trusted partner for premium global education. We guide you from application to your dream destination with absolute transparency.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-widget links-widget">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/testimonials">Success Stories</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-widget links-widget">
            <h3>Study Destinations</h3>
            <ul>
              <li><Link href="/destinations/germany">Study in Germany</Link></li>
              <li><Link href="/destinations/japan">Study in Japan</Link></li>
              <li><Link href="/destinations/usa">Study in USA / UK</Link></li>
              <li><Link href="/destinations/canada">Study in Canada</Link></li>
              <li><Link href="/destinations/india">Domestic Admissions (India)</Link></li>
            </ul>
          </div>

          {/* Contact Widget */}
          <div className="footer-widget contact-widget">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="c-icon" />
                <span>123 Education Hub, Mount Road, Chennai, Tamil Nadu 600002</span>
              </li>
              <li>
                <Phone size={20} className="c-icon" />
                <div>
                  <a href="tel:+918011234567">+91 80112 34567</a>
                  <a href="tel:+918011234568">+91 80112 34568</a>
                </div>
              </li>
              <li>
                <Mail size={20} className="c-icon" />
                <a href="mailto:info@chrisgrace.edu">info@chrisgrace.edu</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-inner">
            <p>&copy; {currentYear} Christ's Grace Edu Solution. All Rights Reserved.</p>
            <div className="bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
