'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Career Counseling",
        shortTitle: "Counseling",
        description: "Personalised one-on-one guidance to find the right course, country, and career path for you.",
        icon: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop",
        num: "01",
    },
    {
        title: "Documentation",
        shortTitle: "Docs",
        description: "Complete assistance with university applications, SOP writing, LORs, and all paperwork.",
        icon: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
        num: "02",
    },
    {
        title: "Visa Support",
        shortTitle: "Visa",
        description: "End-to-end visa application support with high success rates for study visas worldwide.",
        icon: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
        num: "03",
    },
    {
        title: "University Selection",
        shortTitle: "University",
        description: "Access to 200+ partner universities with guaranteed admission assistance.",
        icon: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000&auto=format&fit=crop",
        num: "04",
    },
    {
        title: "Pre-Departure",
        shortTitle: "Briefing",
        description: "Comprehensive orientation covering accommodation, banking, culture, and travel prep.",
        icon: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
        num: "05",
    },
    {
        title: "Post-Arrival",
        shortTitle: "Support",
        description: "Continuous support after you land — we stay with you throughout your journey.",
        icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
        num: "06",
    }
];

const HomeServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="services-section">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="container">
                <div className="section-header">
                    <span className="section-badge">WHAT WE DO</span>
                    <h2 className="section-title">Our Core Services</h2>
                    <p className="section-subtitle">
                        Comprehensive support from the moment you decide to study abroad to the day you land at your destination — and beyond.
                    </p>
                </div>

                <div className="services-accordion" onMouseLeave={() => setActiveIndex(0)}>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className={`service-panel ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div className="panel-bg">
                                <Image 
                                    src={service.icon} 
                                    alt={service.title}
                                    fill
                                    className="service-img"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="overlay"></div>
                            </div>
                            
                            <div className="panel-content">
                                <div className="panel-icon-wrap">
                                    {service.num}
                                </div>
                                <div className="panel-info">
                                    <h3 className="title-vertical">{service.shortTitle}</h3>
                                    <h3 className="title-horizontal">{service.title}</h3>
                                    <div className="panel-details">
                                        <p>{service.description}</p>
                                        <a href="#" className="learn-more">
                                            Learn More →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;

