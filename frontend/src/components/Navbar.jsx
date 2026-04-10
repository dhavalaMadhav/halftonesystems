/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import hsLogo from '../assets/HS_LOGO.png';
import hsName from '../assets/name.png';
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

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    // Handle screen resize: automatic close mobile menu when switching to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const navLinks = [
        {
            name: 'Home',
            href: '/',
            dropdown: []
        },
        {
            name: 'Industries',
            href: '/industries',
            dropdown: []
        },
        {
            name: 'Who We Are',
            href: '/who-we-are',
            dropdown: []
        },
        {
            name: 'What We Do',
            href: '/what-we-do',
            dropdown: []
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
                { name: 'Our Culture', href: '/careers#life-at-halftone-systems' },
                { name: 'Life at Halftone Systems', href: '/careers#life-at-halftone-systems' }
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
                            <>
                                <div className="mobile-menu-scrollable">
                                    {navLinks.map((link) => {
                                        if (link.name === 'Contact Us') return null;
                                        const hasDropdown = link.dropdown && link.dropdown.length > 0;
                                        const isActive = location.pathname === link.href;
                                        return (
                                            <div key={link.name} className={`nav-item ${isActive ? 'active' : ''}`}>
                                                <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <Link 
                                                        to={link.href} 
                                                        className="nav-link" 
                                                        style={{ flexGrow: 1 }} 
                                                        onClick={(e) => {
                                                            if (hasDropdown) {
                                                                e.preventDefault();
                                                                setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name);
                                                            } else {
                                                                setIsMobileMenuOpen(false);
                                                            }
                                                        }}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    {hasDropdown && (
                                                        <button 
                                                            onClick={(e) => { e.preventDefault(); setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name); }}
                                                            style={{ background: 'none', border: 'none', color: '#111827', padding: '10px 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <ChevronDown size={20} style={{ transform: openMobileDropdown === link.name ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                                                        </button>
                                                    )}
                                                </div>
                                                {hasDropdown && openMobileDropdown === link.name && (
                                                    <div style={{ paddingLeft: '48px', paddingTop: '8px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '0', marginBottom: '8px' }}>
                                                        {link.dropdown.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                style={{ 
                                                                    color: '#4b5563', 
                                                                    textDecoration: 'none', 
                                                                    fontSize: '1rem', 
                                                                    fontWeight: 500,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '12px'
                                                                }}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                <span style={{ color: '#2563eb', display: 'flex', alignItems: 'center' }}>
                                                                    <Check size={14} strokeWidth={3} />
                                                                </span>
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mobile-menu-sticky-bottom">
                                    <Link to="/vayucare-forge" className="mobile-contact-link vayucare-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>
                                        VAYUCARE FORGE
                                    </Link>
                                    <Link to="/contact" className="mobile-contact-link" onClick={() => setIsMobileMenuOpen(false)}>
                                        Contact Us
                                    </Link>
                                </div>
                            </>
                        ) : (
                            navLinks.map((link, idx) => {
                                const isActive = location.pathname === link.href ||
                                    (link.href !== '/' && location.pathname.startsWith(link.href));
                                return (
                                    <React.Fragment key={link.name}>
                                        {idx > 0 && <span className="nav-divider" />}
                                        <div className={`nav-item ${isActive ? 'active' : ''}`}>
                                            <Link to={link.href} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                {link.name}
                                                {link.dropdown && link.dropdown.length > 0 && (
                                                    <ChevronDown size={14} className="nav-arrow" />
                                                )}
                                            </Link>
                                            {link.dropdown && link.dropdown.length > 0 && (
                                                <div className="dropdown-menu">
                                                    {link.dropdown.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="dropdown-item"
                                                        >
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
                    </div>
                </div>
            </div>

        </nav>
    );
};
