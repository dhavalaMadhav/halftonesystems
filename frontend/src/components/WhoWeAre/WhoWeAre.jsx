import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Activity, Leaf, Factory, Server, Rocket, ShoppingCart, Linkedin } from 'lucide-react';
import './WhoWeAre.css';
import founderImage from '../../assets/halftone_profile_image.jpeg';
import ceoImage from '../../assets/dr_sri.jpg';
import whoWeAreVideo from '../../assets/videos/Who We Are.mp4';
import behindOurNameImage from '../../assets/HALFTONE_Behind Our Name.png';

export const WhoWeAre = () => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const floatVariants = {
        float: {
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const metrics = [
        { value: '19+', label: 'YEARS OF EXPERTISE' },
        { value: '4', label: 'COUNTRIES SERVED' },
        { value: '30+', label: 'TECHNOLOGY PARTNERS' },
        { value: '14+', label: 'INDUSTRY VERTICALS' },
    ];

    const pillars = [
        { id: '01', icon: <Activity size={32} />, title: 'Healthcare AI & Smart Ambulance Systems', desc: 'AI-powered emergency response platforms and intelligent patient care applications that reduce response times and improve care outcomes through real-time data intelligence.' },
        { id: '02', icon: <Leaf size={32} />, title: 'Sustainable Mobility & EV Fleet Management', desc: 'Electric fleet management platforms with real-time tracking, route optimisation, and predictive maintenance — driving the future of sustainable transportation.' },
        { id: '03', icon: <Factory size={32} />, title: 'Smart Manufacturing & Industry 4.0', desc: 'Intelligent automation, predictive analytics, and IoT-enabled tools that revolutionise operational efficiency and drive manufacturing excellence.' },
        { id: '04', icon: <Server size={32} />, title: 'Enterprise AI & ERP Transformation', desc: 'Modernising legacy systems with SAP, cloud technologies, and AI-driven analytics — empowering enterprises with agile, scalable, future-ready infrastructure.' },
        { id: '05', icon: <Rocket size={32} />, title: 'AI Solutions for MSMEs', desc: 'Democratising advanced technology through low-code/no-code AI applications — enabling small and medium businesses to compete and scale at unprecedented speeds.' },
        { id: '06', icon: <ShoppingCart size={32} />, title: 'E-commerce & Digital Platforms', desc: 'Custom AI-powered commerce solutions that elevate user experiences, optimise conversions, and accelerate growth for B2B and B2C businesses globally.' },
    ];



    return (
        <div className="who-we-are-page-wrapper">
            <section id="who-we-are" className="who-we-are-section hero-format-standard" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '80px' }}>
                {/* Background Video */}
                <div className="hero-video-container">
                    <video src={whoWeAreVideo} autoPlay loop muted playsInline></video>
                    <div className="hero-video-overlay"></div>
                </div>

                <motion.div
                    className="who-we-are-container"
                    style={{ position: 'relative', zIndex: 2, width: '100%' }}
                >
                    {/* Core Narrative */}
                    <motion.div className="wa-core-narrative" style={{ marginBottom: 0 }}>
                        <p className="eyebrow-format-standard" style={{
                            color: 'var(--c-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', system-ui, sans-serif",
                        }}>
                            Who We Are
                        </p>
                        <h1 className="universal-hero-title wa-headline" style={{ color: '#ffffff' }}>We Don't Just Build Technology.<br /><span className="wa-accent">We Build Futures.</span></h1>
                        <p className="wa-description text-over-video-muted">
                            Halftone Systems is a global technology powerhouse — engineering transformative digital solutions that turn ambitious visions into measurable competitive advantages.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Partitioning Line */}
            <div style={{ height: '1px', background: 'rgba(37, 99, 235, 0.3)', width: '100%' }}></div>

            {/* Body Section */}
            <section className="who-we-are-section" style={{ paddingTop: '80px', overflow: 'visible' }}>
                <motion.div
                    className="who-we-are-container"
                    style={{ position: 'relative', zIndex: 2, width: '100%' }}
                >
                    {/* Metric Cards */}
                    <motion.div className="wa-metrics-grid">
                        {metrics.map((metric, idx) => (
                            <div
                                key={idx}
                                className={`wa-metric-card ${idx !== metrics.length - 1 ? 'wa-metric-border' : ''}`}
                            >
                                <h3 className="wa-metric-value">{metric.value}</h3>
                                <p className="wa-metric-label">{metric.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <motion.div className="wa-divider"></motion.div>

                    {/* Behind Our Name Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 4rem', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                    >
                        <img src={behindOurNameImage} alt="Behind Our Name" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </motion.div>

                    <motion.div id="our-history" className="wa-founder-section">
                        <h4 className="wa-section-title">OUR HISTORY</h4>
                        <h3 className="wa-section-subtitle">Our vision is to transform the world</h3>

                        <div className="wa-founder-content">
                            <div className="wa-founder-text">
                                <p>Halftone Systems was founded by Nagaraj Adireddy — a technology visionary with a Master's in Computer Science from SRH University Heidelberg, Germany, and advanced business systems expertise from the University of Stralsund, Germany.</p>
                                <p>Over a remarkable 19-year international career spanning Germany, USA, UK, and India, Nagaraj became a trusted strategic advisor to Fortune 500 enterprises and high-growth businesses across the globe — before channelling that expertise into Halftone Systems.</p>
                                <p>Today, the company stands as a crossroads of deep technical excellence and strategic business intelligence, delivering breakthrough solutions across 14+ industry verticals worldwide.</p>
                            </div>

                            <div className="wa-founder-quote-box wa-glass-card">
                                <div className="wa-founder-image-container">
                                    <img src={founderImage} alt="Nagaraj Adireddy" className="wa-founder-image" />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <h5 className="wa-founder-name" style={{ margin: 0 }}>NAGARAJ ADIREDDY</h5>
                                    <a href="https://www.linkedin.com/in/nagrajadireddy" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', color: '#0A66C2', transition: 'opacity 0.2s', marginTop: '-2px' }}>
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <p className="wa-founder-title">FOUNDER & MANAGING DIRECTOR · HALFTONE SYSTEMS</p>
                                <blockquote className="wa-quote">
                                    "Technology is not just about digital adoption; it's about business transformation. Every solution we architect must drive measurable value, enhance competitive positioning, and create sustainable growth for our clients."
                                </blockquote>
                            </div>
                        </div>

                        <div className="wa-divider" style={{ margin: '4rem 0' }}></div>

                        <div className="wa-founder-content wa-ceo-content">
                            <div className="wa-founder-quote-box wa-glass-card">
                                <div className="wa-founder-image-container">
                                    <img src={ceoImage} alt="Dr. SRI" className="wa-founder-image" />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <h5 className="wa-founder-name" style={{ margin: 0 }}>Dr. SRI</h5>
                                </div>
                                <p className="wa-founder-title">GLOBAL CEO · HALFTONE SYSTEMS</p>
                            </div>

                            <div className="wa-founder-text">
                                <p>Mr. SRI, is the visionary Global CEO of Halftone Systems (HTS), with 25+ years of leadership as Chairman, CEO, CFO, and Board Member, SRI has driven global ventures in investment, infrastructure, real estate, and manufacturing.</p>
                                <p>He is an expert in capital raising through structured equity and debt financing across diverse sectors. SRI has served on global boards including PMI and ITIL UK Swiss Chapter, contributing to voluntary and developmental initiatives.</p>
                                <p>He leads White Capital Group, First Boston Group Consortium, and manages multi-billion-dollar portfolios with Global Private Investment Group. A global speaker and mentor, SRI supports humanitarian missions and guides businesses, families, and institutions worldwide.</p>
                            </div>
                        </div>

                        <div className="wa-industries-list">
                            <span className="wa-list-label">Cross-Industry Expertise:</span>
                            <p className="wa-list-items">Financial Services · Healthcare & Pharma · Retail & E-commerce · Manufacturing · Energy & Utilities · Oil & Gas · Logistics · GovTech · Agritech · Education · Food Import/Export · Drones · Facility Management</p>
                        </div>
                    </motion.div>

                    <motion.div id="our-journey" className="wa-journey-section">
                        <h4 className="wa-section-title">OUR JOURNEY</h4>
                        <h3 className="wa-section-subtitle">A Timeline of Excellence</h3>

                        <div className="wa-timeline" ref={timelineRef}>
                            <div className="wa-timeline-line-bg"></div>
                            <motion.div
                                className="wa-timeline-line-fill"
                                style={{ scaleY: scrollYProgress }}
                            />
                            <div className="wa-timeline-item">
                                <div className="wa-timeline-dot"></div>
                                <div className="wa-timeline-content">
                                    <h5>GENESIS</h5>
                                    <p>Nagaraj begins his international technology journey in Germany, building expertise in enterprise systems, cloud architecture, and strategic consulting across European Fortune 500 clients.</p>
                                </div>
                            </div>
                            <div className="wa-timeline-item">
                                <div className="wa-timeline-dot"></div>
                                <div className="wa-timeline-content">
                                    <h5>EXPANSION</h5>
                                    <p>Extends practice to USA and UK, advising global enterprises on digital transformation, SAP modernisation, and AI-driven analytics strategies.</p>
                                </div>
                            </div>
                            <div className="wa-timeline-item">
                                <div className="wa-timeline-dot"></div>
                                <div className="wa-timeline-content">
                                    <h5>HALFTONE SYSTEMS FOUNDED</h5>
                                    <p>With 19 years of international mastery, Nagaraj launches Halftone Systems — architecting a firm built to deliver Fortune 500-grade technology to organisations of every scale.</p>
                                </div>
                            </div>
                            <div className="wa-timeline-item">
                                <div className="wa-timeline-dot"></div>
                                <div className="wa-timeline-content">
                                    <h5>TODAY</h5>
                                    <p>Halftone Systems powers organisations across Healthcare, Energy, Pharmaceuticals, Education, Logistics, Retail and beyond — on four continents.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div id="six-pillars" className="wa-vision-section">
                        <h4 className="wa-section-title">OUR VISION</h4>
                        <h3 className="wa-section-subtitle">Six Pillars of Innovation</h3>
                        <p className="wa-vision-desc">Halftone Systems delivers breakthrough solutions across six core practice areas — each engineered to give clients an enduring competitive advantage.</p>

                        <div className="wa-pillars-grid">
                            {pillars.map((pillar) => (
                                <motion.div
                                    key={pillar.id}
                                    className="wa-pillar-card"
                                >
                                    <div className="wa-pillar-header">
                                        <div className="wa-pillar-top">
                                            <span className="wa-pillar-id">{pillar.id}</span>
                                            <span className="wa-pillar-icon">{pillar.icon}</span>
                                        </div>
                                        <h5 className="wa-pillar-title">{pillar.title}</h5>
                                    </div>
                                    <div className="wa-pillar-content">
                                        <p className="wa-pillar-desc">{pillar.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </section>
        </div>
    );
};
