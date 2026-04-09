/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import hsLogo from '../assets/HS_LOGO.png';
import hsName from '../assets/name.png';
import './Navbar.css';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            setIsHidden(false); // Make sure it's visible when open
        } else {
            document.body.style.overflow = '';
            setOpenMobileDropdown(null);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            // Hide navbar if scrolling down and we're past the top area
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                // Show navbar if scrolling up
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Also close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        {
            name: 'Home',
            href: '/',
            dropdown: []
        },
        {
            name: 'Industries',
            href: '/industries',
            dropdown: [
                { name: 'Automotive', href: '/industries#automotive' },
                { name: 'Healthcare', href: '/industries#healthcare' },
                { name: 'Pharmaceutical', href: '/industries#pharmaceutical' },
                { name: 'Life Sciences', href: '/industries#life-sciences' },
                { name: 'Retail', href: '/industries#retail' },
                { name: 'Travel & Tourism', href: '/industries#travel-tourism' },
                { name: 'Education & Research', href: '/industries#education-research' },
                { name: 'Media & Entertainment', href: '/industries#media-entertainment' }
            ]
        },
        {
            name: 'Who We Are',
            href: '/who-we-are',
            dropdown: [
                { name: 'Our History', href: '/who-we-are#our-history' },
                { name: 'Our Journey', href: '/who-we-are#our-journey' },
                { name: 'Six Pillars', href: '/who-we-are#six-pillars' }
            ]
        },
        {
            name: 'What We Do',
            href: '/what-we-do',
            dropdown: [
                { name: 'Why Choose Us', href: '/what-we-do#why-choose' },
                { name: 'Our Tech Suite', href: '/what-we-do#tech-suite' },
                { name: 'Specialized Services', href: '/what-we-do#specialized-services' }
            ]
        },
        {
            name: 'Success Stories',
            href: '/success-stories',
            dropdown: [
                { name: 'Case Studies', href: '/success-stories#success-stories' },
                { name: 'Global Presence', href: '/success-stories#partnerships' }
            ]
        },
        {
            name: 'Careers',
            href: '/careers',
            dropdown: [
                { name: 'Open Positions', href: '/careers#open-positions' },
                { name: 'Our Culture', href: '/careers#our-culture' },
                { name: 'Life at HTS', href: '/careers#life-at-hts' }
            ]
        },
        {
            name: 'Contact Us',
            href: '/contact',
            dropdown: [
                { name: 'Get in Touch', href: '/contact#getting-in-touch' },
                { name: 'Contact Us', href: '/contact#contact-us' }
            ]
        }
    ];

    const scrollToTop = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>

            {/* ── ROW 1: Brand + Utility actions ── */}
            <div className="navbar-top">
                <div className="container navbar-top-inner">
                    {/* Logo / Brand */}
                    <div className="navbar-logo">
                        <Link to="/" className="logo-link" onClick={scrollToTop}>
                            <img src={hsLogo} alt="Halftone Systems Logo" className="logo-img hs-logo" />
                            <img src={hsName} alt="Halftone Systems" className="logo-img name-img" />
                        </Link>
                    </div>

                    {/* Utility: VAYUCARE_FORGE + Mobile toggle */}
                    <div className="navbar-utility" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Link to="/vayucare-forge" className="vayucare-forge-btn hide-mobile">
                            VAYUCARE FORGE
                        </Link>
                        <button
                            className={`mobile-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── ROW 2: Navigation links with dividers ── */}
            <div className="navbar-bottom">
                <div className="container">
                    <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {isMobileMenuOpen ? (
                            <div className="mobile-menu-scrollable">
                                {navLinks.map((link, idx) => {
                                    if (link.name === 'Contact Us') return null;
                                    const isActive = location.pathname === link.href ||
                                        (link.href !== '/' && location.pathname.startsWith(link.href));
                                    return (
                                        <React.Fragment key={link.name}>
                                            <div className={`nav-item ${isActive ? 'active' : ''}`}>
                                                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <Link 
                                                        to={link.href} 
                                                        className="nav-link" 
                                                        style={{ flexGrow: 1 }} 
                                                        onClick={(e) => {
                                                            if (link.name === 'Careers') {
                                                                e.preventDefault();
                                                                setOpenMobileDropdown(openMobileDropdown === 'Careers' ? null : 'Careers');
                                                            } else {
                                                                setIsMobileMenuOpen(false);
                                                            }
                                                        }}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    {link.name === 'Careers' && link.dropdown && link.dropdown.length > 0 && (
                                                        <button 
                                                            onClick={(e) => { e.preventDefault(); setOpenMobileDropdown(openMobileDropdown === 'Careers' ? null : 'Careers'); }}
                                                            style={{ background: 'none', border: 'none', color: '#111827', padding: '10px 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <ChevronDown size={20} style={{ transform: openMobileDropdown === 'Careers' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                                                        </button>
                                                    )}
                                                </div>
                                                {link.name === 'Careers' && openMobileDropdown === 'Careers' && (
                                                    <div style={{ paddingLeft: '24px', paddingTop: '8px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '2px solid #2563eb', marginLeft: '1.5rem', marginBottom: '8px' }}>
                                                        {link.dropdown.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                style={{ color: '#2563eb', textDecoration: 'none', fontSize: '1rem', fontWeight: 700 }}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        ) : (
                            navLinks.map((link, idx) => {
                                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                                return (
                                    <React.Fragment key={link.name}>
                                        {idx > 0 && <span className="nav-divider" />}
                                        <div className={`nav-item ${isActive ? 'active' : ''}`}>
                                            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Link to={link.href} className="nav-link" style={{ flexGrow: 1 }}>
                                                    {link.name}
                                                </Link>
                                            </div>
                                            {link.dropdown && link.dropdown.length > 0 && (
                                                <div className="dropdown-menu">
                                                    {link.dropdown.map((item) => (
                                                        <a key={item.name} href={item.href} className="dropdown-item">
                                                            <span className="hover-tick"><Check size={14} strokeWidth={3} /></span>
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </React.Fragment>
                                );
                            })
                        )}
                        
                        {isMobileMenuOpen && (
                            <div className="mobile-menu-sticky-bottom">
                                <Link to="/vayucare-forge" className="mobile-contact-link vayucare-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>
                                    VAYUCARE FORGE
                                </Link>
                                <Link to="/contact" className="mobile-contact-link" onClick={() => setIsMobileMenuOpen(false)}>
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
};
