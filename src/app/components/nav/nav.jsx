"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  const courseCategories = [
    {
      title: "Germany",
      flag: "🇩🇪",
      tagline: "Engineering Excellence",
      desc: "Tuition-free public universities & world-class tech hubs.",
      href: "/germany",
      color: "#ef4444"
    },
    {
      title: "Japan",
      flag: "🇯🇵",
      tagline: "Innovation & Culture",
      desc: "Unique scholarship structures and cutting-edge academics.",
      href: "/japan",
      color: "#f59e0b"
    },
    {
      title: "Domestic Admissions",
      flag: "🇮🇳",
      tagline: "Premium Indian Colleges",
      desc: "Direct admissions into the top-tier institutions across India.",
      href: "/courses",
      color: "#10b981"
    }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div 
            className="nav-glass-pill"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">C</div>
            <div className="logo-text">
              CHRIS <span>EDU SOLUTIONS</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="nav-links-inner">
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li 
                  key={index} 
                  className="nav-item-wrapper"
                  onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setShowDropdown(false)}
                >
                  <Link 
                    href={link.href} 
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  >
                    {link.name}
                    {pathname === link.href && (
                        <motion.div 
                            layoutId="nav-pill"
                            className="nav-active-bg"
                            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#111827', borderRadius: 50, zIndex: -1 }}
                        />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div 
                          className="simple-dropdown"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="dropdown-inner">
                            {courseCategories.map((cat, i) => (
                              <Link href={cat.href} key={i} className="dropdown-item">
                                <span className="item-flag">{cat.flag}</span>
                                <div className="item-text">
                                  <h4>{cat.title}</h4>
                                  <p>{cat.tagline}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="nav-actions">
            <Link href="/contact" className="btn-quote">
              Get Started
              <div className="arrow-box">
                  <ArrowUpRight size={14} />
              </div>
            </Link>
            <button 
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu-overlay"
            style={{ position: 'fixed', top: 100, left: 20, right: 20, background: 'white', padding: 30, borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', zIndex: 999 }}
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {navLinks.map((link, i) => (
                <li key={i} style={{ marginBottom: 15 }}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontSize: 18, fontWeight: 700, color: '#111827', textDecoration: 'none' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
