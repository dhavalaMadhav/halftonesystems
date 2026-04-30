import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Activity, Shield, Zap, CheckCircle2, Clock, Navigation, 
    Heart, Smartphone, Lock, Stethoscope, Users, 
    ChevronRight, ArrowRight, Server, Database, Globe, 
    Smartphone as PhoneIcon, Monitor, Settings, Layout, 
    Cloud, Code, Cpu, Target, Eye, XCircle, TrendingUp,
    Baby, Building2, Home, Leaf
} from 'lucide-react';
import './VayucareForgePage.css';
import heroBg from '../assets/vayucare.app.jpg';
import techBg from '../assets/hero_bg_tech.png';
import heroVideo from '../assets/videos/Vayucare1.mp4';

const VayucareForgePage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stats = [
        { label: "Integrated Services", value: "120+" },
        { label: "Combined Market TAM", value: "$106B+" },
        { label: "Emergency SOS Response", value: "8 Sec" },
        { label: "Microservices Architecture", value: "5-Layer" }
    ];

    return (
        <div className="vayucare-page">
            {/* ── HERO SECTION ───────────────────────────────────────── */}
            <section id="hero" className="v-hero" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="hero-video-container">
                    <video src={heroVideo} autoPlay loop muted playsInline></video>
                    <div className="hero-video-overlay"></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="v-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
                        <motion.div className="v-hero-content" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="v-badge" style={{ backgroundColor: '#2563EB', color: 'white', alignSelf: 'flex-start', marginLeft: '0' }}>NEW PRODUCT</div>
                            <h1 className="v-hero-title" style={{ color: 'white' }}>
                                VAYUCARE<br />
                                <span style={{ color: 'var(--v-secondary)' }}>One Tap. One Life Saved.</span>
                            </h1>
                            <p className="v-hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.4rem', fontWeight: '600' }}>
                                PRODUCT DEVELOPMENT<br />
                                <span style={{ fontSize: '1.1rem', fontWeight: '400', opacity: 0.8 }}>Building India's Most Advanced Integrated Healthcare Platform</span>
                            </p>
                            <div className="v-hero-actions">
                                <Link to="/contact" className="vayucare-forge-btn-large hide-mobile" style={{ textDecoration: 'none' }}>Explore Platform</Link>
                                <Link to="/contact" className="book-call-btn-large" style={{ textDecoration: 'none' }}>Request Demo</Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="v-hero-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="visual-outer" style={{ position: 'relative', width: '100%', height: '540px', background: 'transparent', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div 
                                    className="main-mockup glass-card" 
                                    style={{ width: '280px', height: '560px', border: '8px solid #1a1a1a', borderRadius: '40px', position: 'relative', overflow: 'hidden', transform: 'rotate(-5deg)' }}
                                >
                                    <div className="mockup-screen" style={{ width: '100%', height: '100%', background: 'white', padding: '20px' }}>
                                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff4d4d', margin: '40px auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', boxShadow: '0 0 20px rgba(255,77,77,0.5)' }}>SOS</div>
                                        <div style={{ height: '10px', width: '80%', background: '#f3f4f6', margin: '10px auto', borderRadius: '5px' }}></div>
                                        <div style={{ height: '10px', width: '60%', background: '#f3f4f6', margin: '10px auto', borderRadius: '5px' }}></div>
                                        <div className="glass-card" style={{ marginTop: '40px', padding: '15px', background: '#f9fafb' }}>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '8px', color: '#111827' }}>Active Providers</div>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                {[1,2,3,4].map(i => <div key={i} style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#e5e7eb' }}></div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="floating-card" style={{ top: '10%', right: '-20px', background: '#000000', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}>
                                    <Activity color="#0B8CFF" size={20} />
                                    <span style={{ fontWeight: 'bold' }}>Real-time Vitals</span>
                                </div>
                                <div className="floating-card" style={{ bottom: '20%', left: '-10%', background: '#000000', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}>
                                    <Navigation color="#10B981" size={20} />
                                    <span style={{ fontWeight: 'bold' }}>GPS Tracking</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="hero-stats-row glass-card">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item-premium">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 01: PRODUCT DEVELOPMENT OVERVIEW ──────────────── */}
            <section className="v-overview">
                <div className="container">
                    <div className="section-id">01</div>
                    <motion.h2 className="section-title" {...fadeIn}>PRODUCT DEVELOPMENT OVERVIEW</motion.h2>
                    <p className="section-subtitle-text" {...fadeIn}>What We Are Building & Why It Matters</p>
                    <div className="section-spacer"></div>
                    
                    <div className="overview-container">
                        <motion.div className="overview-text" {...fadeIn}>
                            <p className="lead-text">
                                VAYUCARE is not an incremental improvement on what already exists — it is a fundamental reimagining of how healthcare is delivered in India.
                            </p>
                            <p>
                                Developed and engineered exclusively by Halftone Systems Pvt. Ltd. (HTS), VAYUCARE is India's first unified, on-demand home medical and holistic wellness super-platform. It integrates over 120 services spanning emergency medicine, specialist home visits, Ayurveda, AYUSH, Naturopathy, Homeopathy, Yoga Therapy, and a practitioner-guided natural pharmacy — all accessible through a single, intuitive one-tap interface.
                            </p>
                            <p>
                                The product is architected as a SaaS-based, cloud-native platform engineered for the realities of Indian healthcare: diverse geographies, multi-language requirements, constrained infrastructure in semi-urban regions, and a population with deeply rooted preferences for both modern medicine and traditional healing practices.
                            </p>
                            <p>
                                VAYUCARE stands at the convergence of two powerful megatrends — a critically under-resourced conventional healthcare system and the world's largest post-COVID surge in natural and Ayurvedic wellness demand. No existing platform has bridged this gap. VAYUCARE does.
                            </p>
                        </motion.div>
                        
                        <div className="mission-vision-grid">
                            <motion.div className="wa-pillar-card mission-card" {...fadeIn}>
                                <div className="wa-pillar-header">
                                    <div className="wa-pillar-top">
                                        <span className="wa-pillar-id">MISSION</span>
                                        <span className="wa-pillar-icon"><Target color="var(--v-primary)" /></span>
                                    </div>
                                    <h5 className="wa-pillar-title">Platform Mission</h5>
                                </div>
                                <div className="wa-pillar-content">
                                    <p>Ensure every Indian — regardless of geography, income, or belief system — can access the right care within minutes, whether through the precision of modern medicine or the wisdom of ancient healing traditions.</p>
                                </div>
                            </motion.div>

                            <motion.div className="wa-pillar-card vision-card" {...fadeIn}>
                                <div className="wa-pillar-header">
                                    <div className="wa-pillar-top">
                                        <span className="wa-pillar-id">VISION</span>
                                        <span className="wa-pillar-icon"><Eye color="var(--v-primary)" /></span>
                                    </div>
                                    <h5 className="wa-pillar-title">Platform Vision</h5>
                                </div>
                                <div className="wa-pillar-content">
                                    <p>Become the definitive healthcare operating system for 1.4 billion Indians and the Indian diaspora globally.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 02: VISION & APPROACH ──────────────────────────── */}
            <section className="v-vision">
                <div className="container">
                    <div className="section-id" style={{ color: 'white' }}>02</div>
                    <motion.h2 className="section-title" {...fadeIn}>VISION & APPROACH</motion.h2>
                    <p className="section-subtitle-text" {...fadeIn}>Strategic Philosophy Behind Every Product Decision</p>
                    <div className="section-spacer"></div>

                    <div className="approach-intro" {...fadeIn}>
                        <h3>A Platform Built for Scale, Trust, and Real-World Impact</h3>
                        <p>The product development philosophy at VAYUCARE is guided by three core principles: build for the hardest use case first, ensure every module is independently scalable, and never compromise on clinical integrity.</p>
                    </div>

                    <div className="wa-pillars-grid">
                        {[
                            {
                                id: '01',
                                title: "Human-Centric Design",
                                items: ["Emergency-first UI architecture", "Offline-capable SOS — works on 2G", "Multi-language: Hindi, Telugu, English", "Designed for 60+ demographic accessibility", "Zero-login emergency access"],
                                icon: <Users />
                            },
                            {
                                id: '02',
                                title: "Clinical Integrity First",
                                items: ["All practitioners are verified and credentialed", "AI recommendations are advisory, not prescriptive", "Dual-system healthcare: Allopathy + AYUSH", "Digital audit trail for every service interaction", "ABDM-compliant health records"],
                                icon: <Shield />
                            },
                            {
                                id: '03',
                                title: "Platform as Infrastructure",
                                items: ["SaaS-ready multi-tenant architecture", "API-first design for third-party integration", "Modular microservices for rapid feature deployment", "Enterprise-grade uptime SLAs for health use cases", "White-label readiness for B2B expansion"],
                                icon: <Zap />
                            }
                        ].map((card, i) => (
                            <motion.div 
                                className="wa-pillar-card" 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="wa-pillar-header">
                                    <div className="wa-pillar-top">
                                        <span className="wa-pillar-id">{card.id}</span>
                                        <span className="wa-pillar-icon" style={{ color: 'var(--v-primary)' }}>{card.icon}</span>
                                    </div>
                                    <h5 className="wa-pillar-title">{card.title}</h5>
                                </div>
                                <div className="wa-pillar-content">
                                    <ul className="pillar-list">
                                        {card.items.map((item, j) => (
                                            <li key={j}>
                                                <CheckCircle2 size={16} color="var(--v-primary)" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className="approach-methodology wa-pillar-card" style={{ marginTop: '3rem' }} {...fadeIn}>
                        <div className="wa-pillar-header">
                            <h5 className="wa-pillar-title">Our Development Approach</h5>
                        </div>
                        <div className="wa-pillar-content">
                            <p>VAYUCARE is developed using an agile, milestone-driven SDLC methodology with clearly defined phases: Discovery, Architecture Design, Core Platform Build, Vertical Integration, Testing & Compliance, and Phased Go-Live. Every development sprint is tied to measurable patient-outcome KPIs, not just engineering benchmarks. This ensures that what is built always serves the person in medical need — not just the technology roadmap.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SECTION 03: KEY FEATURES & CAPABILITIES ───────────────── */}
            <section className="v-pillars">
                <div className="container">
                    <div className="section-id">03</div>
                    <motion.h2 className="section-title" {...fadeIn}>KEY FEATURES & CAPABILITIES</motion.h2>
                    <p className="section-subtitle-text" {...fadeIn}>120+ Services. One Platform. Unlimited Possibilities.</p>
                    <div className="section-spacer"></div>

                    <div className="pillars-intro" {...fadeIn}>
                        <h3>The Three Strategic Pillars</h3>
                        <p>VAYUCARE's capabilities are organized across three deeply integrated service pillars, each addressing a distinct and critical dimension of healthcare in India. Together, they form an ecosystem that no single-service platform can replicate.</p>
                    </div>

                    <div className="wa-pillars-grid">
                        {[
                            { 
                                id: 'PILLAR 1', 
                                title: 'Emergency & Conventional Medicine', 
                                icon: <Activity />, 
                                content: "Ambulance Dispatch • Emergency SOS • GP at Home • Specialist Visits • ICU at Home • Nursing • Diagnostics • Pharmacy" 
                            },
                            { 
                                id: 'PILLAR 2', 
                                title: 'Ayurveda & AYUSH at Home', 
                                icon: <Heart />, 
                                content: "Vaidya Visits • Panchakarma • Shirodhara • Yoga Therapy • Homeopathy • Siddha • Unani • Naturopathy" 
                            },
                            { 
                                id: 'PILLAR 3', 
                                title: 'Natural Products & Pharmacy', 
                                icon: <Smartphone />, 
                                content: "200+ Herbal Products • Moringa • Ashwagandha • Custom Formulations • Practitioner Prescriptions • Same-Day Delivery" 
                            },
                        ].map((pillar, i) => (
                            <motion.div className="wa-pillar-card" key={i} {...fadeIn}>
                                <div className="wa-pillar-header" style={{ padding: '2rem' }}>
                                    <div className="wa-pillar-top">
                                        <span className="wa-pillar-id" style={{ fontSize: '1rem', color: 'var(--v-primary)' }}>{pillar.id}</span>
                                        <span className="wa-pillar-icon" style={{ color: 'var(--v-primary)' }}>{pillar.icon}</span>
                                    </div>
                                    <h5 className="wa-pillar-title" style={{ fontSize: '1.2rem' }}>{pillar.title}</h5>
                                </div>
                                <div className="wa-pillar-content" style={{ padding: '2rem' }}>
                                    <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.6' }}>{pillar.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="section-spacer"></div>
                    <motion.h3 className="sub-title-center" {...fadeIn}>Signature Platform Capabilities</motion.h3>
                    <div className="section-spacer"></div>

                    <div className="wa-pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {[
                            { title: "8-Second Emergency SOS", icon: <Clock />, desc: "One tap simultaneously dispatches an ALS ambulance, connects a live cardiologist via video, activates CPR audio guidance in the local language, and alerts family — all within 8 seconds. Built for zero-login access with offline fallback." },
                            { title: "AI Prakriti Assessment Engine", icon: <Activity />, desc: "A proprietary AI engine powered by advanced NLP analyzes a patient's constitution (Prakriti) through an intelligent questionnaire, delivering personalized Ayurvedic health recommendations and supplements." },
                            { title: "Live GPS Provider Tracking", icon: <Navigation />, desc: "Real-time ambulance and healthcare provider tracking — similar to rideshare applications — with live ETA, status updates, and route visualization. Built to function reliably on 2G/3G networks." },
                            { title: "Family Health Hub", icon: <Users />, desc: "A unified family health dashboard enabling caregivers to manage bookings, track health records, set up emergency contacts, and receive health alerts for multiple family members under one subscription." },
                            { title: "HD Teleconsultation Suite", icon: <Smartphone />, desc: "Encrypted, high-definition video consultations with digital prescription generation, medical file sharing, and seamless handoff to home visit services when physical care is required." },
                            { title: "Panchakarma at Home Programme", icon: <Stethoscope />, desc: "Complete 7–21 day Ayurvedic detox and rejuvenation programmes delivered entirely at the patient's home by certified therapists — from Abhyanga to full Panchakarma protocols." },
                            { title: "Personal Health Record Vault", icon: <Lock />, desc: "An ABDM-compliant digital health record system enabling patients to upload, organize, and securely share diagnostic reports, prescriptions, and health history with any provider on the platform." },
                            { title: "Natural Pharmacy & Subscription", icon: <CheckCircle2 />, desc: "India's first clinically guided natural pharmacy, with 200+ practitioner-prescribed organic and herbal products available for same-day delivery and wellness programmes." }
                        ].map((cap, i) => (
                            <motion.div 
                                className="v-capability-card" 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="cap-icon-box">{cap.icon}</div>
                                <div className="cap-content-box">
                                    <h5>{cap.title}</h5>
                                    <p>{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 04: TECHNOLOGY & ARCHITECTURE HIGHLIGHTS ────────── */}
            <section className="v-tech" style={{ backgroundImage: `linear-gradient(rgba(10,10,10,0.92), rgba(10,10,10,0.92)), url(${techBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <div className="container">
                    <div className="section-id" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)' }}>04</div>
                    <motion.h2 className="section-title" style={{ color: 'white' }} {...fadeIn}>
                        TECHNOLOGY & ARCHITECTURE HIGHLIGHTS
                    </motion.h2>
                    <p className="section-subtitle-text" style={{ color: 'rgba(255,255,255,0.6)' }} {...fadeIn}>Enterprise-Grade Engineering for Life-Critical Healthcare</p>
                    <div className="section-spacer"></div>

                    <div className="tech-intro" style={{ color: 'white' }} {...fadeIn}>
                        <h3 style={{ color: 'white' }}>Architecture Philosophy</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>The platform follows Domain-Driven Design (DDD) principles with strict separation of concerns, independent service deployment, and polyglot persistence. Built for 100M+ users with life-critical reliability.</p>
                        
                        <div className="tech-points-grid">
                            <div className="tech-point">
                                <Cloud size={24} color="var(--v-primary)" />
                                <div>
                                    <h5>Cloud-Native Microservices</h5>
                                    <p>Independent scaling, fault isolation, and zero-downtime deployments.</p>
                                </div>
                            </div>
                            <div className="tech-point">
                                <Zap size={24} color="var(--v-primary)" />
                                <div>
                                    <h5>Event-Driven Design</h5>
                                    <p>Real-time event bus for sub-second communication in emergency workflows.</p>
                                </div>
                            </div>
                            <div className="tech-point">
                                <Globe size={24} color="var(--v-primary)" />
                                <div>
                                    <h5>Multi-Cloud Infrastructure</h5>
                                    <p>AWS + Azure active-active failover for healthcare-grade uptime.</p>
                                </div>
                            </div>
                            <div className="tech-point">
                                <Smartphone size={24} color="var(--v-primary)" />
                                <div>
                                    <h5>Offline-First Emergency Core</h5>
                                    <p>SOS module works on 2G connectivity with local caching.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-spacer"></div>
                    <h3 className="sub-title-center" style={{ color: 'white' }}>Five Application Layers</h3>
                    <div className="section-spacer"></div>

                    <div className="tech-grid">
                        {[
                            { title: "Patient & Consumer App", icon: <PhoneIcon />, desc: "iOS & Android native apps supporting offline SOS, tracking, teleconsultation, and records management." },
                            { title: "Provider & Practitioner App", icon: <Users />, desc: "For doctors, Vaidyas, and nurses — with job management, schedule control, and digital prescriptions." },
                            { title: "Operations & Dispatch Console", icon: <Monitor />, desc: "Mission control for real-time emergency coordination, provider assignment, and SLA monitoring." },
                            { title: "Admin & Analytics Platform", icon: <Settings />, desc: "Full-stack portal for user management, service configuration, and business intelligence." },
                            { title: "Partner & B2B SaaS Portal", icon: <Layout />, desc: "Dedicated portal for hospitals, labs, and insurance partners to integrate VAYUCARE via white-label APIs." }
                        ].map((layer, i) => (
                            <motion.div className="tech-card" key={i} {...fadeIn}>
                                <div className="tech-icon-box">{layer.icon}</div>
                                <h5>{layer.title}</h5>
                                <p>{layer.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="section-spacer"></div>
                    <h3 className="sub-title-center" style={{ color: 'white' }}>Technology Stack Highlights</h3>
                    <div className="section-spacer"></div>

                    <div className="tech-stack-details-grid">
                        <motion.div className="tech-stack-card" {...fadeIn}>
                            <h5>Backend & APIs</h5>
                            <ul>
                                <li>Node.js / Python (FastAPI) microservices</li>
                                <li>GraphQL & REST API gateway (HAWK)</li>
                                <li>Apache Kafka event streaming</li>
                                <li>Redis for real-time caching</li>
                                <li>PostgreSQL, MongoDB, InfluxDB</li>
                            </ul>
                        </motion.div>

                        <motion.div className="tech-stack-card" {...fadeIn}>
                            <h5>Infrastructure & Security</h5>
                            <ul>
                                <li>AWS + Azure multi-cloud deployment</li>
                                <li>Kubernetes orchestration (EKS/AKS)</li>
                                <li>Terraform IaC provisioning</li>
                                <li>End-to-end AES-256 encryption</li>
                                <li>HIPAA and DPDP Bill compliant</li>
                            </ul>
                        </motion.div>

                        <motion.div className="tech-stack-card" {...fadeIn}>
                            <h5>AI, Integrations & Real-Time</h5>
                            <ul>
                                <li>Proprietary AI Prakriti engine (NLP/ML)</li>
                                <li>Agora.io HD video suite</li>
                                <li>Google Maps Platform tracking</li>
                                <li>Razorpay / UPI orchestration</li>
                                <li>ABDM health ID integration</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="security-compliance-box" style={{ marginTop: '4rem', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Shield color="var(--v-primary)" /> Security & Compliance Framework</h4>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                            Healthcare data is among the most sensitive personal data in existence. VAYUCARE's security architecture reflects this reality with a defense-in-depth approach including end-to-end encryption, RBAC, full audit logging, and compliance with India's Digital Personal Data Protection (DPDP) Act. The platform is architected toward HIPAA standards and aligns with the Ayushman Bharat Digital Mission (ABDM) framework.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 05: INNOVATION & DIFFERENTIATION ───────────────── */}
            <section className="v-innovation">
                <div className="container">
                    <div className="section-id">05</div>
                    <motion.h2 className="section-title" {...fadeIn}>INNOVATION & DIFFERENTIATION</motion.h2>
                    <p className="section-subtitle-text" {...fadeIn}>Why VAYUCARE Is Unlike Anything Built Before</p>
                    <div className="section-spacer"></div>

                    <div className="innovation-intro" {...fadeIn}>
                        <h3>The Problem: A Fragmented Healthcare Ecosystem</h3>
                        <p>India's healthcare landscape is defined by fragmentation. Conventional medicine and traditional healing exist in separate silos. Emergency services are disconnected from chronic care. VAYUCARE bridges these gaps.</p>
                    </div>

                    <div className="comparison-container">
                        <motion.div className="comp-box problem-box" {...fadeIn}>
                            <h4 className="comp-box-title">The Challenges That Persist Today</h4>
                            <ul className="comp-list">
                                <li><XCircle size={22} color="#ef4444" /> Average emergency response times exceed 18–25 mins.</li>
                                <li><XCircle size={22} color="#ef4444" /> 1.1B+ Indians use traditional medicine, but no verified on-demand platform exists.</li>
                                <li><XCircle size={22} color="#ef4444" /> 80% of doctors are in cities, leaving semi-urban areas under-resourced.</li>
                                <li><XCircle size={22} color="#ef4444" /> Ayurvedic products lack practitioner guidance and quality assurance.</li>
                                <li><XCircle size={22} color="#ef4444" /> Healthcare data is scattered across incompatible paper and digital systems.</li>
                            </ul>
                        </motion.div>
                        <motion.div className="comp-box solution-box" {...fadeIn}>
                            <h4 className="comp-box-title">How VAYUCARE Solves Each One</h4>
                            <ul className="comp-list">
                                <li><CheckCircle2 size={22} color="#10b981" /> 8-second SOS dispatch: Ambulance + Live Doctor + Local Audio alert.</li>
                                <li><CheckCircle2 size={22} color="#10b981" /> Verified Vaidyas and Panchakarma therapists dispatched to any home.</li>
                                <li><CheckCircle2 size={22} color="#10b981" /> Distributed network extends care into Tier 2 and Tier 3 cities.</li>
                                <li><CheckCircle2 size={22} color="#10b981" /> Clinically guided natural pharmacy with verified practitioner prescriptions.</li>
                                <li><CheckCircle2 size={22} color="#10b981" /> ABDM-compliant health record vault — unified and portable history.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="section-spacer"></div>
                    <h3 className="sub-title-center">Our Unique Value Proposition</h3>
                    <div className="section-spacer"></div>

                    <div className="wa-pillars-grid">
                        {[
                            { title: "Dual-Medicine Platform", icon: <Activity />, desc: "The only platform in India integrating modern allopathic medicine and all six AYUSH systems with verified practitioners." },
                            { title: "One App Connectivity", icon: <PhoneIcon />, desc: "Spans the full healthcare continuum from life-threatening emergencies to chronic management and preventive wellness." },
                            { title: "Clinically Guided Commerce", icon: <Smartphone />, desc: "Practitioner-prescribed natural products, creating a clinical integrity layer that unorganized commerce cannot replicate." },
                            { title: "Network Effect Moat", icon: <TrendingUp />, desc: "Two-sided network effect where provider growth improves service quality, deepening platform loyalty and position." },
                            { title: "Offline-Capable Infra", icon: <Cloud />, desc: "SOS module is engineered to function on 2G networks, ensuring emergency access regardless of connectivity." },
                            { title: "Blockchain Records", icon: <Cpu />, desc: "Immutable health record storage, ensuring data integrity and patient-controlled access — a first in Indian healthcare." }
                        ].map((uvp, i) => (
                            <motion.div className="v-capability-card" key={i} {...fadeIn}>
                                <div className="cap-icon-box">{uvp.icon}</div>
                                <div className="cap-content-box">
                                    <h5>{uvp.title}</h5>
                                    <p>{uvp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 06: USE CASES & APPLICATIONS ──────────────────── */}
            <section className="v-innovation" style={{ backgroundColor: '#f0f4f8' }}>
                <div className="container">
                    <div className="section-id">06</div>
                    <motion.h2 className="section-title" {...fadeIn}>USE CASES & APPLICATIONS</motion.h2>
                    <p className="section-subtitle-text" {...fadeIn}>Real Scenarios. Real Solutions. Real Impact.</p>
                    <div className="section-spacer"></div>

                    <div className="use-cases-grid">
                        {[
                            { id: '01', title: "Cardiac Emergency Response", desc: "A suspect cardiac event initiates one-tap SOS. Within 8 seconds: ambulance dispatch, cardiologist video, local local-audio instructions, and family alerts. Hospital intake is pre-notified automatically.", icon: <Activity /> },
                            { id: '02', title: "Post-COVID Recovery via Ayurveda", desc: "BAMS Vaidya visits patient at home, assesses Prakriti, and designs a 14-day Panchakarma programme. Therapists visit daily, formulations delivered in hours.", icon: <Leaf /> },
                            { id: '03', title: "Elderly Home Care Management", desc: "NRI family managing aging parents uses the Family Hub to schedule nurse visits, manage prescriptions, and receive health alerts cross-continent.", icon: <Home /> },
                            { id: '04', title: "Corporate Employee Health", desc: "Enterprise deploys VAYUCARE SaaS to power employee wellness with teleconsultation, diagnostics, and mental health support via white-labeled interface.", icon: <Building2 /> },
                            { id: '05', title: "Maternity & Neonatal Care", desc: "Antenatal monitoring at home, midwife dispatch with birth kit, and post-delivery nursing for newborn care and lactation support.", icon: <Baby /> }
                        ].map((uc, i) => (
                            <motion.div className="wa-pillar-card" key={i} {...fadeIn} style={{ marginBottom: i < 4 ? '0' : '2rem' }}>
                                <div className="wa-pillar-header">
                                    <div className="wa-pillar-top">
                                        <span className="wa-pillar-id">{uc.id}</span>
                                        <span className="wa-pillar-icon" style={{ color: 'var(--v-primary)' }}>{uc.icon}</span>
                                    </div>
                                    <h5 className="wa-pillar-title" style={{ fontSize: '1.2rem' }}>{uc.title}</h5>
                                </div>
                                <div className="wa-pillar-content">
                                    <p style={{ color: '#4b5563', lineHeight: '1.7' }}>{uc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ──────────────────────────────────────────── */}
            <section className="v-final-cta">
                <div className="container">
                    <motion.div 
                        className="final-cta-box glass-card"
                        initial={{ scale: 0.95, opacity: 0 }} 
                        whileInView={{ scale: 1, opacity: 1 }} 
                        viewport={{ once: true }}
                        style={{ 
                            padding: '100px 40px', 
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${heroBg})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '24px'
                        }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: '800', marginBottom: '1.5rem', color: 'white', textAlign: 'center' }}>Where Ancient Wisdom Meets Modern Technology</h2>
                        <p style={{ fontSize: '1.45rem', color: 'rgba(255,255,255,0.95)', fontWeight: '600', textAlign: 'center', marginBottom: '0.75rem' }}>
                            The right care is never more than one tap away.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '3.5rem' }}>
                            Build India's health future with us.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="vayucare-forge-btn-large" style={{ border: 'none', textDecoration: 'none' }}>Request Demo</Link>
                            <Link to="/contact" className="book-call-btn" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'white', border: '1px solid #e5e7eb', color: '#111827', textDecoration: 'none' }}>Contact Team</Link>
                        </div>
                    </motion.div>
                    <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.6, fontSize: '0.9rem', color: '#4b5563' }}>
                        Developed & Engineered by Halftone Systems Pvt. Ltd. (HTS)  |  Hyderabad, India  |  2026
                    </div>
                </div>
            </section>

            {/* ── FLOATING CTA ───────────────────────────────────────── */}
            <div className="floating-cta-right">
                <Link to="/contact" className="cta-btn-vertical" style={{ textDecoration: 'none' }}>
                    EXPLORE VAYUCARE FORGE
                </Link>
            </div>
        </div>
    );
};

export default VayucareForgePage;
