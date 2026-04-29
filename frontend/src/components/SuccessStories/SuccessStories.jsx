import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingCart,
    Smartphone,
    Ambulance,
    GraduationCap,
    TestTube2,
    Network,
    Building2,
    Cpu,
    Wheat,
    Zap,
    Landmark,
    Globe2
} from 'lucide-react';
import './SuccessStories.css';
import successStoriesVideo from '../../assets/videos/HTS_Success Stories.mp4';

export const SuccessStories = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = [
        'All',
        'Retail',
        'Mobility',
        'Healthcare',
        'Public Sector',
        'Technology',
        'Global'
    ];

    // Reveal animation state removed per user request

    // 1. Container Stagger Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // 2. Individual Item Fade-in-up Animation
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                mass: 1
            }
        }
    };



    const stories = [
        {
            icon: <ShoppingCart size={28} />,
            title: "DICK'S SPORTING GOODS",
            desc: "Delivered high-performance technology services for Dick's Sporting Goods — supporting digital commerce operations and enterprise scale excellence.",
            tag: "Retail",
            category: "Retail"
        },
        {
            icon: <Smartphone size={28} />,
            title: "OHM",
            desc: "End-to-end delivery of iOS and Android mobile applications paired with a comprehensive Fleet Management system for real-time visibility.",
            tag: "Mobility",
            category: "Mobility"
        },
        {
            icon: <Ambulance size={28} />,
            title: "BHARAT CARE",
            desc: "Architected and deployed a full mobile application ecosystem with integrated fleet management — dramatically improving emergency response.",
            tag: "Healthcare",
            category: "Healthcare"
        },
        {
            icon: <GraduationCap size={28} />,
            title: "CREIGHTON UNIVERSITY",
            desc: "Delivered strategic technology services to Creighton University — supporting their academic digital ecosystem and institutional technology goals.",
            tag: "Education",
            category: "Public Sector"
        },
        {
            icon: <TestTube2 size={28} />,
            title: "VIRCHOW BIOTECH",
            desc: "Provided specialised technology services to Virchow Biotech — enabling them to optimise operations and accelerate digital transformation.",
            tag: "Pharma",
            category: "Healthcare"
        },
        {
            icon: <Network size={28} />,
            title: "RAGHAVA LIFE SCIENCES",
            desc: "Designed and deployed a robust enterprise networking architecture — ensuring secure, high-availability connectivity across critical environments.",
            tag: "Life Sciences",
            category: "Healthcare"
        },
        {
            icon: <Building2 size={28} />,
            title: "TFMC",
            desc: "Delivered comprehensive technology services to the Telangana Facility Management Council — supporting their digital operations and governance.",
            tag: "Government",
            category: "Public Sector"
        },
        {
            icon: <Cpu size={28} />,
            title: "PROMEA®",
            desc: "Provided end-to-end technology services to Promea — helping them build scalable digital infrastructure and accelerate high-growth operation.",
            tag: "Tech Services",
            category: "Technology"
        },
        {
            icon: <Wheat size={28} />,
            title: "MITHUNA FOODS",
            desc: "Supported Mithuna Foods with technology services enabling smarter supply chain management and operational efficiency.",
            tag: "Agri Trade",
            category: "Retail"
        },
        {
            icon: <Zap size={28} />,
            title: "WPP ENERGY",
            desc: "Partnered with WPP Energy on their technology journey — supporting their mission to deliver innovative, sustainable energy production.",
            tag: "Energy",
            category: "Technology"
        },
        {
            icon: <Landmark size={28} />,
            title: "ROYAL ORBIT",
            desc: "Delivered technology services to Royal Orbit Holding Group — enabling cross-portfolio digital integration and strategic technology advisory.",
            tag: "Finance",
            category: "Global"
        },
        {
            icon: <Globe2 size={28} />,
            title: "PX NORDIC · DARIAN",
            desc: "Extended our global footprint to Nordic, Middle Eastern, and European markets — providing specialised technology services across IT and trading.",
            tag: "Global Tech",
            category: "Global"
        },
    ];

    const filteredStories = activeFilter === 'All' 
        ? stories 
        : stories.filter(story => story.category === activeFilter);

    return (
        <div className="success-stories-wrapper">
            <section id="success-stories-hero" className="success-stories-section hero-format-standard" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100px' }}>
                {/* Background Video */}
                <div className="hero-video-container">
                    <video src={successStoriesVideo} autoPlay loop muted playsInline></video>
                    <div className="hero-video-overlay"></div>
                </div>

                <div className="ss-container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ss-header-block" style={{ marginBottom: 0 }}>
                        <span className="ss-overline">SUCCESS STORIES</span>
                        <h1 className="universal-hero-title" style={{ color: '#ffffff' }}>
                            Trusted by Industry Leaders<br />
                            <span className="ss-highlight">Worldwide</span>
                        </h1>
                        <p className="ss-vision-desc text-over-video-muted">Our success stories span industries, continents, and ambitions. Select an industry below to explore our impact.</p>
                    </div>
                </div>
            </section>

            <section id="success-stories-body" className="success-stories-section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
                <div className="ss-container">
                    <div className="ss-filter-nav">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`ss-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="ss-uniform-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredStories.map((story) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={story.title}
                                className="ss-story-card"
                            >
                                <div className="ss-card-content">
                                    <div className="ss-card-header">
                                        <div className="ss-icon-wrapper">
                                            {story.icon}
                                        </div>
                                        <h5 className="ss-card-title">{story.title}</h5>
                                    </div>

                                    <p className="ss-card-desc">{story.desc}</p>

                                    <div className="ss-card-footer">
                                        <div className="ss-glowing-pill">
                                            <div className="ss-pill-dot"></div>
                                            {story.tag}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
        </div>
    );
};
