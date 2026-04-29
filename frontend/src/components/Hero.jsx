import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Linkedin, Phone } from 'lucide-react';
import homeVideo from '../assets/videos/HTS_Home.mp4';
import './Hero.css';
import { Link } from 'react-router-dom';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

export const Hero = () => {
    const fullText = "WE RUN TECHNOLOGY";
    const [text, setText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 100);

        const cursorInterval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-main-box" style={{ position: 'relative', zIndex: 3, overflow: 'hidden' }}>
                {/* Background Video */}
                <div className="hero-video-container">
                    <video src={homeVideo} autoPlay loop muted playsInline></video>
                    <div className="hero-video-overlay"></div>
                </div>
                
                <div className="container hero-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                {text}<span className="hero-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
                            </h1>
                            <p className="hero-subtitle">
                                Businesses with Information Technology & Technology Products
                            </p>
                            <div className="hero-actions">
                                <Link to="/what-we-do" className="btn btn-primary hero-btn">
                                    Explore Our Services <ArrowRight size={18} className="hero-btn-arrow" />
                                </Link>
                                <Link to="/success-stories" className="btn btn-outline hero-btn">
                                    View Success Stories
                                </Link>
                            </div>
                        </div>

                        <div className="hero-stats-column">
                            <div className="hero-stat-card">
                                <h3 className="hero-stat-number"><CountUp end={100} suffix="+" /></h3>
                                <p className="hero-stat-label">Projects Delivered</p>
                            </div>
                            <div className="hero-stat-card">
                                <h3 className="hero-stat-number"><CountUp end={15} suffix="+" /></h3>
                                <p className="hero-stat-label">Industries Served</p>
                            </div>
                            <div className="hero-stat-card">
                                <h3 className="hero-stat-number"><CountUp end={2} /></h3>
                                <p className="hero-stat-label">Continents. One Vision.</p>
                            </div>
                            <div className="hero-stat-card">
                                <h3 className="hero-stat-number"><CountUp end={100} suffix="%" /></h3>
                                <p className="hero-stat-label">Client Referenceable</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll hint now inside the 85% container box for desktop */}
                <div className="hero-scroll-hint">
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </div>
            </div>

            {/* Fixed Contact Widgets (Desktop Only) */}
            <div className="fixed-contact-widgets">
                <a href="mailto:info@halftonesystems.com" className="widget-icon" aria-label="Email Us">
                    <Mail size={22} />
                </a>
                <a href="https://www.linkedin.com/company/halftone-systems" target="_blank" rel="noopener noreferrer" className="widget-icon" aria-label="LinkedIn">
                    <Linkedin size={22} />
                </a>

            </div>
        </section>
    );
};
