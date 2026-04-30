import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer" style={{ position: 'relative' }}>
            <div className="container">
                <div className="footer-top section-padding">
                    <div className="footer-col">
                        <h3 className="footer-logo">HALFTONE SYSTEMS</h3>
                        <p className="footer-desc">
                            Businesses with Information Technology & Technology Products
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/halftone-systems" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/halftonesystem" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.facebook.com/halftonesystemspvtltd/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/HalftoneSystems/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/who-we-are">Who We Are</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/success-stories">Success Stories</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>What We Do</h4>
                        <ul>
                            <li><Link to="/what-we-do#why-choose">Why Choose Us</Link></li>
                            <li><Link to="/what-we-do#tech-suite">Our Tech Suite</Link></li>
                            <li><Link to="/what-we-do#specialized-services">Specialized Services</Link></li>
                            <li><Link to="/industries">Industry Expertise</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Information</h4>
                        <ul className="footer-contact-info">
                            <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                <Mail size={16} style={{ color: 'var(--c-primary)', flexShrink: 0 }} />
                                <a href="mailto:info@halftonesystems.com" style={{ textDecoration: 'none', color: 'inherit' }}>info@halftonesystems.com</a>
                            </li>

                            <li style={{ display: 'flex', gap: '8px' }}>
                                <MapPin size={16} style={{ color: 'var(--c-primary)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.9rem' }}>Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Halftone Systems. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-use">Terms of Use</Link>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
