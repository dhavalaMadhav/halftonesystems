import React, { useRef, useState, useEffect } from 'react';
import { LayoutGrid, List, MapPin, Briefcase, DollarSign, Clock, ChevronRight, X, Heart, Share2, Bookmark, Shield, Zap, Users, Globe, Smile, Rocket, Sparkles, MessageSquare, Coffee, Target, Award, CheckCircle, Star, Cpu, Lock, Database, Handshake, Activity, BarChart, TrendingUp, Cloud, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import careersVideo from '../assets/videos/HTS_Careers.mp4';

/* ══════════════════════════════════════
   INTERSECTION REVEAL HOOK
   Removed per user request for static load
   ══════════════════════════════════════ */

/* ══════════════════════════════════════
   DESIGN TOKENS  — WhoWeAre theme (Keep)
   ══════════════════════════════════════ */
const T = {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: 'rgba(37,99,235,0.08)',
    primaryMid: 'rgba(37,99,235,0.15)',
    primaryBorder: 'rgba(37,99,235,0.25)',
    primaryBorderHov: '#2563EB',
    bg: '#ffffff',
    bgAlt: '#f9fafb',
    textDark: '#111827',
    textBody: '#4b5563',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    blob1: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
    blob2: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
    blob3: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
    blob4: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
};

/* ══════════════════════════════════════
   JOBS DATA (Keep & Standardize)
   ══════════════════════════════════════ */
const JOBS = [
    {
        id: 'hcm-cloud',
        company: 'Halftone Systems',
        title: 'Senior Oracle HCM Cloud Consultant',
        tag: 'Cloud / ERP',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$120,000 - $160,000 a year',
        posted: '2d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'We are seeking a seasoned Oracle HCM Cloud Consultant to join our growing Enterprise Solutions team. You will be responsible for leading complex implementations for global clients, ensuring the successful delivery of HR technology solutions that drive business value.',
        responsibilities: [
            'Lead end-to-end Oracle HCM Cloud implementations (Core HR, Payroll, Absence, Talent).',
            'Conduct requirement gathering workshops with key stakeholders.',
            'Design and configure system solutions to meet business needs.',
            'Lead data migration strategy and execution.',
            'Provide expert guidance on best practices for cloud HR processes.'
        ],
        requirements: [
            '8+ years of experience in Oracle HCM (EBS or Cloud).',
            'Minimum 3 full-lifecycle Oracle HCM Cloud implementations.',
            'Deep expertise in Core HR and at least one other module.',
            'Strong client-facing communication and presentation skills.',
            'Oracle HCM Cloud certification is highly preferred.'
        ]
    },
    {
        id: 'ebs-hr',
        company: 'Halftone Systems',
        title: 'Oracle EBS HR',
        tag: 'ERP',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$90,000 - $120,000 a year',
        posted: '4d ago',
        hiringMultiple: false,
        extraInfo: '40 hours per week',
        about: 'Join our EBS practice to support and enhance Oracle E-Business Suite HRMS environments for major enterprise clients. You will play a key role in maintaining stability and driving efficiency in global HR operations.',
        responsibilities: [
            'Support and maintain Oracle EBS HRMS modules (HR, Payroll, OAB, OTL).',
            'Perform system configurations and custom developments.',
            'Troubleshoot complex functional and technical issues.',
            'Lead minor upgrades and patch applications.',
            'Liaise with business users to identify process improvement opportunities.'
        ],
        requirements: [
            '5+ years of Oracle EBS HRMS experience (R12 preferred).',
            'Strong SQL and PL/SQL skills.',
            'Experience with Fast Formulas and AME.',
            'Solid understanding of HR business processes.',
            'Ability to work independently in a fast-paced environment.'
        ]
    },
    {
        id: 'servicenow-hrsd',
        company: 'Halftone Systems',
        title: 'ServiceNow HRSD Developer',
        tag: 'Platform',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$100,000 - $140,000 a year',
        posted: '1w ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Help us transform employee experiences by building world-class HR service delivery solutions on the ServiceNow platform. This role involves designing automated workflows that simplify complex HR operations.',
        responsibilities: [
            'Develop and configure ServiceNow HRSD applications (Case Mgmt, Employee Service Center).',
            'Design and implement complex orchestration workflows.',
            'Build integrations with HCM systems like Oracle and Workday.',
            'Customize Portal widgets using AngularJS and CSS.',
            'Participate in platform upgrades and quality assurance.'
        ],
        requirements: [
            '3+ years of ServiceNow development experience.',
            'ServiceNow Certified Implementation Specialist (HRSD) preferred.',
            'Strong JavaScript and web service (REST/SOAP) skills.',
            'Experience with Agile development methodologies.',
            'Clear understanding of ITIL and HR service management principles.'
        ]
    },
    {
        id: 'full-stack',
        company: 'Halftone Systems',
        title: 'Full-Stack Developer (Node.js + React Native)',
        tag: 'Node.js · React',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$110k - $150k',
        posted: '3d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Work on cutting-edge mobile and web products as part of our core engineering team. You will own features from database design to UI polish, ensuring high performance and a great user experience.',
        responsibilities: [
            'Develop robust backend APIs using Node.js and TypeScript.',
            'Build responsive web interfaces with React.js.',
            'Contribute to React Native mobile app development.',
            'Optimize applications for maximum speed and scalability.',
            'Collaborate with designers to implement pixel-perfect UIs.'
        ],
        requirements: [
            '4+ years of full-stack development experience.',
            'Expertise in JavaScript/TypeScript and React.',
            'Proficiency in Node.js and Express/Fastify.',
            'Experience with PostgreSQL or MongoDB.',
            'Familiarity with AWS or GCP services.'
        ]
    },
    {
        id: 'ios-dev',
        company: 'Halftone Systems',
        title: 'iOS Developer (Swift)',
        tag: 'Mobile',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$100k - $140k',
        posted: '1d ago',
        about: 'Join our mobile team to build high-performance iOS applications. You will work on feature development, architectural improvements, and UI/UX implementation using modern Swift frameworks.',
        responsibilities: [
            'Develop new features using Swift and SwiftUI/UIKit.',
            'Write clean, maintainable, and well-tested code.',
            'Collaborate with backend engineers to integrate APIs.',
            'Optimize app performance and responsiveness.',
            'Participate in code reviews and architectural discussions.'
        ],
        requirements: [
            '3+ years of professional iOS development experience.',
            'Proficiency in Swift and modern iOS architectural patterns (MVVM, Clean).',
            'Experience with RESTful APIs and modern networking libraries.',
            'Familiarity with CI/CD pipelines for mobile apps.',
            'Strong understanding of Apple design guidelines.'
        ]
    },
    {
        id: 'android-dev',
        company: 'Halftone Systems',
        title: 'Android Developer (Kotlin)',
        tag: 'Mobile',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$100k - $140k',
        posted: '1d ago',
        about: 'We are looking for an Android Developer to build and scale our native mobile applications. You will be responsible for creating seamless user experiences using Kotlin and the latest Android Jetpack libraries.',
        responsibilities: [
            'Build high-performance Android apps using Kotlin.',
            'Implement complex UI components with Jetpack Compose.',
            'Integrate Third-party libraries and APIs.',
            'Ensure app quality through unit testing and debugging.',
            'Stay updated with the latest Android development trends.'
        ],
        requirements: [
            '3+ years of experience in Android development.',
            'Deep knowledge of Kotlin and Android SDK.',
            'Experience with Coroutines, Flow, and Dagger/Hilt.',
            'Solid understanding of Material Design principles.',
            'Strong problem-solving and collaboration skills.'
        ]
    },
    {
        id: 'ui-ux',
        company: 'Halftone Systems',
        title: 'UI/UX Designer',
        tag: 'Design',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$80k - $120k',
        posted: '2w ago',
        hiringMultiple: false,
        extraInfo: '40 hours per week',
        about: 'We believe design is more than aesthetics—it\'s about solving problems. As a UI/UX designer, you will work closely with product managers and engineers to create user-centric solutions from wireframes to high-fidelity prototypes.',
        responsibilities: [
            'Create wireframes, user flows, and interactive prototypes.',
            'Design high-fidelity UI mockups and visual assets.',
            'Conduct user research and usability testing.',
            'Maintain and evolve our internal design system.',
            'Work closely with developers to ensure design fidelity.'
        ],
        requirements: [
            'Portfolio showcasing mobile and web design projects.',
            'Proficiency in Figma (primary tool) and Adobe Suite.',
            'Strong eye for typography, layout, and color theory.',
            'Experience in building and maintaining design systems.',
            'Excellent communication and storytelling abilities.'
        ]
    },
    {
        id: 'qa-tester',
        company: 'Halftone Systems',
        title: 'QA / Testing Engineer',
        tag: 'Quality',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$70k - $100k',
        posted: '3d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Take ownership of product quality across web and mobile platforms. You will design comprehensive test plans and automate repetitive checks to ensure our releases are rock-solid.',
        responsibilities: [
            'Develop and execute test plans for new features.',
            'Build and maintain automated test suites (Selenium/Cypress/Appium).',
            'Conduct cross-browser and cross-platform testing.',
            'Collaborate with developers to reproduce and resolve bugs.',
            'Perform regression and smoke testing for each release.'
        ],
        requirements: [
            '3+ years of experience in Software Quality Assurance.',
            'Proficiency in test automation tools like Cypress or Playwright.',
            'Experience with API testing (Postman, SoapUI).',
            'Strong analytical and problem-solving skills.',
            'Knowledge of bug tracking systems like Jira.'
        ]
    },
    {
        id: 'devops-backend',
        company: 'Halftone Systems',
        title: 'DevOps / Backend Developer',
        tag: 'Engineering',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$110k - $160k',
        posted: '5d ago',
        about: 'Bridge the gap between development and operations. You will build scalable backend services while ensuring seamless deployment and infrastructure stability across our cloud environments.',
        responsibilities: [
            'Build and maintain robust backend services using Go or Node.js.',
            'Design and manage CI/CD pipelines (GitHub Actions/GitLab).',
            'Scale infrastructure using Kubernetes and Terraform.',
            'Monitor system performance and implement security best practices.',
            'Optimize database performance and cloud resource usage.'
        ],
        requirements: [
            '4+ years of experience in Backend and DevOps roles.',
            'Strong proficiency in Cloud platforms (AWS/GCP/Azure).',
            'Experience with Docker, Kubernetes, and IaC tools.',
            'Excellent understanding of Linux systems and networking.',
            'Proficiency in at least one backend language (Go, Python, Node.js).'
        ]
    },
    {
        id: 'digital-marketing',
        company: 'Halftone Systems',
        title: 'Digital Marketing Executive',
        tag: 'Marketing',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$60k - $90k',
        posted: '1w ago',
        about: 'Join our marketing team to drive brand awareness and lead generation. You will be responsible for managing digital campaigns, SEO, and social media presence to grow our community.',
        responsibilities: [
            'Develop and execute multi-channel digital marketing campaigns.',
            'Manage SEO/SEM strategies to increase website traffic.',
            'Create engaging content for social media and blogs.',
            'Analyze campaign performance using data analytics tools.',
            'Partner with design and sales teams to align on goals.'
        ],
        requirements: [
            '2+ years of experience in digital marketing.',
            'Strong understanding of SEO, PPC, and Content Marketing.',
            'Proficiency with Google Analytics and Ads platforms.',
            'Creative thinker with excellent writing and communication skills.',
            'Experience in the B2B tech industry is a plus.'
        ]
    },
    {
        id: 'clinical-auditor',
        company: 'Halftone Systems',
        title: 'Clinical Quality Auditor (Nurse background)',
        tag: 'Healthcare',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$80k - $110k',
        posted: '3d ago',
        about: 'Apply your clinical expertise to ensure the highest standards of quality and compliance in our healthcare technology solutions. You will audit clinical workflows and contribute to patient safety initiatives.',
        responsibilities: [
            'Conduct clinical quality audits across healthcare platforms.',
            'Ensure compliance with clinical protocols and healthcare regulations.',
            'Identify areas for clinical workflow improvement.',
            'Collaborate with tech teams to enhance clinical safety features.',
            'Provide clinical insights for product development.'
        ],
        requirements: [
            'Registered Nurse (RN) background with valid certification.',
            '3+ years of clinical practice plus auditing experience.',
            'Deep understanding of healthcare quality standards (JCI, NABH).',
            'Strong attention to detail and analytical skills.',
            'Familiarity with EHR/EMR systems is highly desirable.'
        ]
    },
    {
        id: 'senior-backend',
        company: 'Halftone Systems',
        title: 'Senior Backend Developer',
        tag: 'Engineering',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$130k - $180k',
        posted: '2d ago',
        about: 'We are looking for a Senior Backend Developer to architect and build our next generation of enterprise-scale services. You will lead technical decisions and mentor junior engineers in high-stakes projects.',
        responsibilities: [
            'Architect and implement scalable, secure backend systems.',
            'Lead the design of complex APIs and microservices.',
            'Ensure code quality through rigorous testing and reviews.',
            'Solve complex performance and concurrency challenges.',
            'Mentor and guide junior developers on best practices.'
        ],
        requirements: [
            '7+ years of professional backend development experience.',
            'Expert knowledge of Node.js, Python, or Java.',
            'Deep experience with distributed systems and microservices.',
            'Strong understanding of database design and optimization.',
            'Proven track record of delivering enterprise-level software.'
        ]
    }
];

/* ══════════════════════════════════════
   JOB CARD — Accurate Indeed Reference Design
   ══════════════════════════════════════ */
function JobCard({ job, isSelected, onClick, viewMode }) {
    const [hov, setHov] = useState(false);

    const isSplitList = viewMode === 'list';

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="job-card-root"
            style={{
                background: '#ffffff',
                border: `1px solid ${isSelected ? T.primary : T.border}`,
                borderRadius: '16px',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isSelected || hov ? '0 8px 16px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.02)',
                marginBottom: isSplitList ? '12px' : '0',
                position: 'relative',
                height: viewMode === 'grid' ? 'max-content' : 'auto'
            }}
        >
            {/* Top Row: Badge and Vertical Icons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{
                    fontSize: '0.8rem',
                    color: T.primary,
                    fontWeight: 600,
                    background: 'rgba(37,99,235,0.08)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                }}>
                    {job.hiringMultiple ? "Hiring multiple candidates" : "Actively hiring"}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
                </div>
            </div>

            {/* Main Content Block (Left Aligned) */}
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px', color: T.textDark }}>
                    {job.title}
                </h3>
                <div style={{ fontSize: '1rem', color: T.textBody, fontWeight: 500, marginBottom: '2px' }}>
                    {job.company}
                </div>
                <div style={{ fontSize: '0.95rem', color: T.textMuted }}>
                    {job.location}
                </div>
            </div>

            {/* Metadata Row: Inline Pills (One Row) */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap', overflow: 'hidden' }}>

                <div style={{ background: T.bgAlt, padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Briefcase size={14} /> {job.type}
                </div>

            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   JOB DETAIL PANEL (Right Panel)
   ══════════════════════════════════════ */
function JobDetailView({ job, onClose }) {
    if (!job) return null;

    const isMobile = window.innerWidth <= 768;
    const p = isMobile ? '1.25rem' : '2rem';

    return (
        <div style={{
            background: '#ffffff',
            borderRadius: isMobile ? '0' : '16px',
            border: isMobile ? 'none' : `1px solid ${T.border}`,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header Sticky Area */}
            <div style={{
                padding: p,
                paddingBottom: '1.5rem',
                borderBottom: `1px solid ${T.border}`,
                position: 'sticky',
                top: 0,
                background: '#ffffff',
                zIndex: 10,
                borderRadius: isMobile ? '0' : '16px 16px 0 0'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: isMobile ? '1.4rem' : '1.75rem', fontWeight: 800, margin: '0 0 8px', color: T.textDark, lineHeight: 1.2 }}>{job.title}</h2>
                        <div style={{ display: 'flex', gap: isMobile ? '8px' : '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ color: T.primary, fontWeight: 700, fontSize: '0.85rem' }}>Halftone Systems</span>
                            <span style={{ color: T.textMuted, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={14} /> {job.location}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {onClose && (
                            <button onClick={onClose} style={{ padding: '8px', color: T.textMuted }}>
                                <X size={24} />
                            </button>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <div style={{ background: T.bgAlt, padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Briefcase size={14} /> {job.type}
                    </div>

                </div>
            </div>

            {/* Scrollable Content Area */}
            <div style={{ padding: p, overflowY: 'auto', flex: 1 }} className="custom-scrollbar">
                <section style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>About the role</h4>
                    <p style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody }}>{job.about}</p>
                </section>

                <section style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>Responsibilities</h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                        {job.responsibilities.map((item, i) => (
                            <li key={i} style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody, marginBottom: '8px' }}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>Requirements</h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                        {job.requirements.map((item, i) => (
                            <li key={i} style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody, marginBottom: '8px' }}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════ */
export const CareersPage = () => {
    // Reveal animation hooks removed per user request
    
    // Selection state for Indeed-style split view
    const [viewMode, setViewMode] = useState('list');
    const [selectedJob, setSelectedJob] = useState(JOBS[0]);
    const [mobileShowDetail, setMobileShowDetail] = useState(false);
    const location = useLocation();
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.replace('#', '');
            setActiveHash(hash);
            
            // Perform scroll
            const element = document.getElementById(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }

            const timer = setTimeout(() => setActiveHash(''), 2000);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    const [particles] = useState(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            left: `${(i * 43 + 11) % 100}%`,
            top: `${(i * 57 + 7) % 100}%`,
            size: i % 3 === 0 ? 2.5 : i % 3 === 1 ? 1.8 : 1.2,
            dur: `${6 + (i % 6)}s`,
            delay: `-${i % 9}s`,
            color: i % 2 === 0 ? '#2563EB' : '#60a5fa',
            op: 0.12 + (i % 4) * 0.05,
        }))
    );

    return (
        <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: T.bg }}>

            <section
                className="hero-format-standard careers-hero-section"
                style={{
                    position: 'relative', width: '100%', minHeight: '60vh',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    background: '#ffffff', overflow: 'hidden', padding: 'var(--hero-padding-top) 24px 80px',
                }}
            >
                {/* Background Video */}
                <div className="hero-video-container">
                    <video src={careersVideo} autoPlay loop muted playsInline></video>
                    <div className="hero-video-overlay"></div>
                </div>

                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(rgba(37,99,235,0.13) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    opacity: 0.5,
                }} />

                {particles.map(p => (
                    <div key={p.id} style={{
                        position: 'absolute', left: p.left, top: p.top,
                        width: `${p.size}px`, height: `${p.size}px`,
                        borderRadius: '50%', background: p.color, opacity: p.op,
                        animation: `floatParticle ${p.dur} ease-in-out infinite`,
                        animationDelay: p.delay,
                    }} />
                ))}

                <div style={{ position: 'relative', zIndex: 3, maxWidth: '860px', width: '100%', textAlign: 'center' }}>
                    <h4 className="eyebrow-format-standard" style={{ color: T.primary, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        WE'RE HIRING
                    </h4>
                    <h1 className="universal-hero-title" style={{
                        marginTop: 0, marginBottom: '1.5rem', color: '#ffffff',
                    }}>
                        Build Your Future<br /><span style={{ color: T.primary }}>With Us.</span>
                    </h1>
                    <p className="text-over-video-muted" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        We are looking for talented professionals to solve meaningful problems and build world-class products.
                    </p>

                </div>
            </section>

            {/* JOBS SECTION */}
            <section
                id="open-positions"
                style={{
                    position: 'relative', width: '100%',
                    background: T.bgAlt, padding: '80px 24px 100px',
                }}
            >
                <div style={{ position: 'relative', zIndex: 3, maxWidth: '1200px', margin: '0 auto' }}>
                    
                    {/* Header with toggle */}
                    <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
                        <div>
                            <p style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: T.primary, marginBottom: '12px', letterSpacing: '0.05em' }}>OPEN POSITIONS</p>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: T.textDark, margin: 0, lineHeight: 1.1 }}>{JOBS.length} Active Roles</h2>
                        </div>

                        <div style={{ 
                            display: 'inline-flex', 
                            background: '#f1f5f9', 
                            padding: '4px', 
                            borderRadius: '100px',
                            position: 'relative',
                            zIndex: 1000,
                        }}>
                            <button
                                onClick={(e) => { e.stopPropagation(); setViewMode('grid'); }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '100px',
                                    background: viewMode === 'grid' ? '#fff' : 'transparent', color: viewMode === 'grid' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 600, fontSize: '0.9rem',
                                    cursor: 'pointer', transition: 'all 0.2s', border: 'none', userSelect: 'none'
                                }}
                            >
                                <LayoutGrid size={16} /> Grid
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setViewMode('list'); }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '100px',
                                    background: viewMode === 'list' ? '#fff' : 'transparent', color: viewMode === 'list' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'list' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 600, fontSize: '0.9rem',
                                    cursor: 'pointer', transition: 'all 0.2s', border: 'none', userSelect: 'none'
                                }}
                            >
                                <List size={16} /> List
                            </button>
                        </div>
                    </div>

                    {/* Jobs Container */}
                    <div
                        style={{
                            display: viewMode === 'grid' ? 'grid' : 'flex',
                            width: '100%',
                            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(340px, 1fr))' : 'none',
                            gap: '24px',
                            minHeight: '600px',
                            opacity: 1,
                            transform: 'translateY(0)',
                        }}
                    >
                        {viewMode === 'grid' ? (
                            JOBS.map((job) => (
                                <JobCard 
                                    key={job.id} 
                                    job={job} 
                                    viewMode="grid" 
                                    onClick={() => alert(`Opening ${job.title} page...`)} 
                                />
                            ))
                        ) : (
                            /* INDEED STYLE SPLIT VIEW */
                            <div className="indeed-split-view" style={{ 
                                display: 'flex', 
                                width: '100%', 
                                gap: '24px', 
                                alignItems: 'flex-start',
                                position: 'relative' 
                            }}>
                                {/* Left: Job List */}
                                <div className="job-list-pane custom-scrollbar" style={{ 
                                    flex: '1', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '12px', 
                                    maxHeight: 'calc(100vh - 100px)', 
                                    overflowY: 'auto', 
                                    paddingRight: '8px' 
                                }}>
                                    {JOBS.map((job) => (
                                        <JobCard 
                                            key={job.id} 
                                            job={job} 
                                            isSelected={selectedJob?.id === job.id} 
                                            viewMode="list"
                                            onClick={() => {
                                                setSelectedJob(job);
                                                if (window.innerWidth <= 768) setMobileShowDetail(true);
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Right: Job Detail (Desktop/Tablet Only) */}
                                <div className="detail-panel-desktop" style={{ 
                                    flex: '1.6', 
                                    position: 'sticky', 
                                    top: '20px', 
                                    height: 'auto', 
                                    maxHeight: 'calc(100vh - 100px)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <JobDetailView job={selectedJob} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Detail Overlay */}
                    {mobileShowDetail && (
                        <div style={{
                            position: 'fixed', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0, 
                            background: '#fff', 
                            zIndex: 999999, /* Ultra high z-index to beat footer */
                            padding: '0', 
                            display: 'flex', 
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            <JobDetailView job={selectedJob} onClose={() => setMobileShowDetail(false)} />
                        </div>
                    )}
                </div>
            </section>

            {/* OUR CULTURE SECTION */}
            <section
                id="our-culture"
                style={{
                    position: 'relative', width: '100%',
                    background: '#ffffff', padding: '100px 24px',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'left', marginBottom: '80px' }}>
                        <p style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: T.primary, marginBottom: '12px', letterSpacing: '0.05em' }}>ABOUT US</p>
                        <h2 className={activeHash === 'our-culture' ? 'title-highlight' : ''} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: T.textDark, margin: '0 0 24px', lineHeight: 1.1 }}>Our Culture</h2>
                        <h3 style={{ fontSize: '1.4rem', color: T.textBody, fontWeight: 500, maxWidth: '800px', margin: '0 0 40px', lineHeight: 1.4 }}>The heartbeat behind everything we build</h3>
                        <div style={{ maxWidth: '1000px', textAlign: 'left' }}>
                            <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: T.textDark, marginBottom: '24px' }}>Where Ambition Meets Purpose</h4>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '24px' }}>
                                At Halftone Systems, culture is not a policy document or a set of values on a wall. It is the living, breathing force that drives every line of code we write, every solution we architect, and every client relationship we build.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '32px' }}>
                                Born from 19 years of international experience spanning Germany, USA, UK, and India, our culture is a unique blend of global perspective and grounded human values — rigorous enough to serve Fortune 500 enterprises, yet agile enough to champion bold startup ambitions.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px', background: T.bgAlt, borderRadius: '16px', border: `1px solid ${T.border}` }}>
                                <Sparkles size={32} style={{ color: T.primary, marginTop: '4px' }} />
                                <p style={{ fontSize: '1.4rem', fontWeight: 600, color: T.primary, fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                                    "We believe that the best technology in the world is built by people who genuinely love what they do."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '100px' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: T.textDark, textAlign: 'left', marginBottom: '48px' }}>Our Core Values</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
                            {[
                                { icon: <Zap size={28} />, title: 'Innovation First', desc: 'We lead with curiosity and build with conviction. AI, ML, Cloud, and Blockchain are not just buzzwords at HTS — they are the architecture of every solution we deliver. We challenge the status quo so our clients stay permanently ahead of the curve.' },
                                { icon: <CheckCircle size={28} />, title: 'Measurable Excellence', desc: 'Good enough is never good enough. Every solution we produce is benchmarked against real, verifiable outcomes — from 300% ROI within the first deployment year to 40% improvement in conversion rates. We celebrate outcomes, not just effort.' },
                                { icon: <Shield size={28} />, title: 'Integrity Without Compromise', desc: 'We operate with military-grade honesty — the same zero-compromise standard we apply to our cybersecurity solutions. Our clients trust us with their most sensitive operations; our team earns that trust every single day.' },
                                { icon: <Globe size={28} />, title: 'Global Mindset, Human Touch', desc: 'With offices across India and the USA and a team that has delivered across 14+ verticals and 2 continents, we think globally but connect personally. Every stakeholder — client or colleague — is treated as a long-term partner.' },
                                { icon: <TrendingUp size={28} />, title: 'Ownership & Accountability', desc: 'Every member of the HTS family takes full ownership of their work. We don’t have passengers on this journey — we have builders, thinkers, and leaders at every level. Problems are owned, not deflected.' },
                                { icon: <Star size={28} />, title: 'Continuous Growth', desc: 'Technology evolves at breakneck speed. We stay ahead by fostering a culture of perpetual learning — cross-discipline exposure, mentorship from industry leaders, and the freedom to experiment, fail intelligently, and grow fast.' }
                            ].map((v, i) => (
                                <div key={i} style={{ padding: '2rem', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '20px', display: 'flex', flexDirection: 'column', background: 'rgba(238, 244, 249, 0.7)', backdropFilter: 'blur(8px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; }}
                                     onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ color: T.primary }}>{v.icon}</div>
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontFamily: "'Rubik', sans-serif", fontWeight: 700, marginBottom: '0.75rem', color: '#0b1f40' }}>{v.title}</h4>
                                    <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'flex-start', marginBottom: '100px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: T.textDark, marginBottom: '32px' }}>A Culture Built on Deep Roots</h3>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '24px' }}>
                                Our Founder and Managing Director, <strong>Nagaraj Adireddy</strong>, built Halftone Systems not just as a technology company — but as a platform for people who want to do exceptional work.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '40px' }}>
                                His 19-year journey across four countries and his trusted advisory relationships with Fortune 500 enterprises are more than credentials. They are a promise: that every person at HTS will have access to world-class thinking, global exposure, and the kind of work that actually matters.
                            </p>
                            <div style={{ padding: '40px', background: T.bgAlt, borderRadius: '24px', border: `1px solid ${T.border}`, position: 'relative' }}>
                                <p style={{ fontSize: '1.3rem', color: T.textDark, fontWeight: 500, lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>
                                    “Technology is not just about digital adoption; it’s about business transformation. Every solution we architect must drive measurable value, enhance competitive positioning, and create sustainable growth.”
                                </p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: T.primary, margin: 0, letterSpacing: '0.02em' }}>
                                    — Nagaraj Adireddy, Founder & Managing Director, Halftone Systems
                                </p>
                            </div>
                        </div>
                        <div style={{ background: 'rgba(37,99,235,0.02)', padding: '50px', borderRadius: '32px', border: `1px solid ${T.border}` }}>
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: T.textDark, marginBottom: '24px' }}>Collaboration, Not Hierarchy</h4>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '40px' }}>
                                At HTS, the best idea wins — regardless of title. We have built a flat, collaborative structure where junior engineers challenge architects, where designers influence strategy, and where every voice contributes to the outcomes we deliver.
                            </p>
                            <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: T.textDark, marginBottom: '24px' }}>Diversity as a Strength</h4>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: 0 }}>
                                We serve 14+ industry verticals across two continents. That breadth demands genuine diversity of thought, background, and expertise. HTS is where specialists and generalists collaborate to produce outcomes no single discipline could achieve alone.
                            </p>
                        </div>
                    </div>


                    <div className="responsive-box" style={{ textAlign: 'left', marginBottom: '100px', padding: '60px', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '32px', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2 }}>Our Promise to Every Team Member</h3>
                        <p style={{ fontSize: '1.15rem', maxWidth: '900px', lineHeight: 1.8, opacity: 0.95 }}>
                            Whether you are a seasoned technology architect or an ambitious graduate entering your first role, Halftone Systems commits to giving you the environment, the tools, and the trust to build something extraordinary. Your career is not just a job here — it is a mission.
                        </p>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: T.textDark, marginBottom: '60px' }}>Innovation Embedded in Culture</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px' }}>
                            {[
                                { icon: <Cpu size={24} />, title: 'AI-First Thinking', text: 'Every team is encouraged to find the AI application within their domain — whether it is automating testing, improving client reporting, or predicting project risk.' },
                                { icon: <Cloud size={24} />, title: 'Cloud-Native by Default', text: 'We architect for scale and resilience from day one. Every solution is built cloud-ready, ensuring our clients’ technology grows with their ambitions.' },
                                { icon: <Lock size={24} />, title: 'Security Always', text: 'Military-grade security is not a department at HTS — it is a mindset woven into every layer of development, from architecture to deployment.' },
                                { icon: <BarChart size={24} />, title: 'Data-Driven Decisions', text: 'We build systems that generate insight. Internally, we apply the same standard: decisions at HTS are backed by evidence, not opinion.' },
                                { icon: <Handshake size={24} />, title: 'Client Partnership Mindset', text: 'Every engagement is a partnership. Our team is trained to think like their clients’ internal technology division — invested in outcomes, not just deliverables.' },
                                { icon: <Activity size={24} />, title: 'Speed Without Compromise', text: 'Our proven agile methodology delivers in 50 days. Speed is built into our culture — but never at the expense of quality, security, or client trust.' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ color: T.primary, marginTop: '4px' }}>{item.icon}</div>
                                    <div>
                                        <h5 style={{ fontSize: '1.4rem', fontWeight: 800, color: T.textDark, marginBottom: '12px' }}>{item.title}</h5>
                                        <p style={{ color: T.textBody, fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LIFE AT HTS SECTION */}
            <section
                id="life-at-hts"
                style={{
                    position: 'relative', width: '100%',
                    background: T.bgAlt, padding: '100px 24px',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative Background Element */}
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    right: '-150px',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'left', marginBottom: '80px' }}>
                        <p style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', color: T.primary, marginBottom: '12px', letterSpacing: '0.05em' }}>THE EXPERIENCE</p>
                        <h2 className={activeHash === 'life-at-hts' ? 'title-highlight' : ''} style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: T.textDark, margin: '0 0 24px', lineHeight: 1.1 }}>Life at HTS</h2>
                        <h3 style={{ fontSize: '1.4rem', color: T.textBody, fontWeight: 500, maxWidth: '800px', margin: '0 0 40px', lineHeight: 1.4 }}>What it really feels like to work here</h3>
                        <div style={{ maxWidth: '1000px', textAlign: 'left' }}>
                            <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: T.textDark, marginBottom: '24px' }}>Experience the HTS Difference</h4>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '24px' }}>
                                Life at Halftone Systems is a rare combination: the intellectual rigour of a global enterprise consultancy, the pace and energy of a high-growth technology company, and the warmth of a team that genuinely invests in each other.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: T.textBody, lineHeight: 1.7, marginBottom: '32px' }}>
                                When you join HTS, you step into a world where your work immediately touches industries that matter — from Healthcare AI platforms to smart manufacturing solutions redefining Industry 4.0. Every day brings a new challenge. Every challenge is an opportunity to grow.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                <Heart size={32} style={{ color: T.primary, marginTop: '4px' }} />
                                <p style={{ fontSize: '1.4rem', fontWeight: 600, color: T.primary, fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                                    "We run technology. But people are at the heart of everything we run."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '100px' }}>
                        <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: T.textDark, textAlign: 'left', marginBottom: '32px' }}>Your Day at HTS</h4>
                        <p style={{ textAlign: 'left', maxWidth: '900px', margin: '0 0 48px', color: T.textBody, fontSize: '1.2rem', lineHeight: 1.8 }}>
                            No two days at HTS are alike. You might begin the morning deep in a cross-functional sprint for a healthcare client in India and end the afternoon contributing to a digital commerce strategy for a client in the United States.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
                            {[
                                { title: 'Cross-Industry Exposure', desc: 'From Dick’s Sporting Goods to Bharat Care Ambulance Service to Creighton University — you work with a client portfolio that spans continents, industries, and scales.' },
                                { title: 'Cutting-Edge Technology Stack', desc: 'Work with SAP, AWS, Azure, Google Cloud, Salesforce, Oracle, and the full spectrum of AI and ML frameworks. At HTS, you are always at the frontier.' },
                                { title: 'Outcomes That Define Careers', desc: 'Delivering a 40% reduction in client operational downtime or a 400% efficiency improvement through AI automation is not unusual at HTS.' },
                                { title: 'Mentorship at Every Level', desc: 'Learn directly from a leadership team with Fortune 500 advisory experience. Mentorship at HTS is the natural result of working shoulder to shoulder.' },
                                { title: 'A Genuinely Global Environment', desc: 'Collaborate with colleagues and clients across India, the USA, UK, Germany, and beyond. Global thinking is daily practice at HTS.' },
                                { title: 'Recognition & Growth', desc: 'Growth is meritocratic, meaningful, and fast. Whether you are growing technical depth or expanding into leadership, your trajectory is shaped by ambition.' }
                            ].map((v, i) => (
                                <div key={i} style={{ padding: '2rem', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '20px', display: 'flex', flexDirection: 'column', background: 'rgba(238, 244, 249, 0.7)', backdropFilter: 'blur(8px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; }}
                                     onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                    <h5 style={{ fontSize: '1.25rem', fontFamily: "'Rubik', sans-serif", fontWeight: 700, marginBottom: '0.75rem', color: '#0b1f40' }}>{v.title}</h5>
                                    <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '100px' }}>
                        <div style={{ padding: '50px', background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '32px', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                            <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2 }}>The People You’ll Work With</h4>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px', opacity: 0.95 }}>
                                Our team is a community of technologists, strategists, and consultants united by a shared conviction that technology should create real change.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '0', opacity: 0.95 }}>
                                You will work alongside enterprise architects who have modernised SAP systems, AI engineers who have built predictive platforms, and mobile developers who have deployed life-saving apps.
                            </p>
                        </div>
                        <div style={{ padding: '40px', background: '#fff', borderRadius: '24px', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                            <p style={{ fontSize: '1.4rem', color: T.textDark, fontWeight: 500, lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                                “Whether you are a Fortune 500 enterprise or a high-growth startup, Halftone Systems has the expertise, vision, and global reach to accelerate your success in the digital economy.”
                            </p>
                            <p style={{ fontSize: '1.1rem', fontWeight: 800, color: T.primary, margin: 0, letterSpacing: '0.02em' }}>
                                — Our Promise — Halftone Systems
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '100px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: T.textDark, textAlign: 'left', marginBottom: '60px' }}>Roles That Make Impact</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
                            {[
                                { title: 'Software Engineering', desc: 'Full-stack, mobile (iOS & Android), and cloud-native development roles working on enterprise, healthcare, and retail platforms.' },
                                { title: 'AI & Data Science', desc: 'Machine learning engineering, NLP, computer vision, and BI roles that turn raw data into strategic advantage for global clients.' },
                                { title: 'Cybersecurity', desc: 'Zero-Trust Architecture specialists and compliance experts (GDPR, HIPAA) protecting clients at military-grade standards.' },
                                { title: 'Cloud & DevOps', desc: 'Multi-cloud architects and DevOps engineers working across AWS, Azure, and Google Cloud — building infrastructure at scale.' },
                                { title: 'ERP & SAP Consulting', desc: 'Specialists in SAP ERP and S/4HANA delivering manufacturing and supply chain transformation for global enterprises.' },
                                { title: 'Project & Delivery', desc: 'Scrum Masters and programme leads orchestrating our 5-step delivery methodology and ensuring every engagement exceeds expectations.' }
                            ].map((role, i) => (
                                <div key={i} style={{ padding: '2rem', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '20px', display: 'flex', flexDirection: 'column', background: 'rgba(238, 244, 249, 0.7)', backdropFilter: 'blur(8px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; }}
                                     onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                    <h5 style={{ fontWeight: 700, color: T.primary, marginBottom: '0.75rem', fontSize: '1.25rem', fontFamily: "'Rubik', sans-serif" }}>{role.title}</h5>
                                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '100px' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: T.textDark, textAlign: 'left', marginBottom: '60px' }}>What You Can Expect from Day One</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                            {[
                                { title: 'Immediate Impact', icon: <Zap size={28} />, text: 'No extended induction periods. You are contributing to live client engagements from your first week.' },
                                { title: 'World-Class Leadership', icon: <Award size={28} />, text: 'Direct access to a leadership team that has advised Fortune 500 enterprises across four countries.' },
                                { title: 'Landmark Projects', icon: <Briefcase size={28} />, text: 'Build a career portfolio featuring some of the most prestigious clients and complex technology challenges.' },
                                { title: 'Accelerated Trajectory', icon: <TrendingUp size={28} />, text: 'HTS is high-growth. Promotion and specialisation opportunities are significant and meritocratic.' }
                            ].map((item, i) => (
                                <div key={i} style={{ padding: '2rem', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '20px', display: 'flex', flexDirection: 'column', background: 'rgba(238, 244, 249, 0.7)', backdropFilter: 'blur(8px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.05)'; }}
                                     onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ color: T.primary }}>{item.icon}</div>
                                    </div>
                                    <h5 style={{ fontSize: '1.25rem', fontFamily: "'Rubik', sans-serif", fontWeight: 700, color: '#0b1f40', marginBottom: '0.75rem' }}>{item.title}</h5>
                                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing CTA */}
                    <div style={{
                        padding: '6rem 4rem', borderRadius: '32px', 
                        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600")',
                        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden'
                    }}>
                        <h3 style={{ fontSize: '3.2rem', fontWeight: 800, margin: '0 0 24px', color: '#fff', position: 'relative', zIndex: 1, lineHeight: 1.1 }}>Ready to build the future?</h3>
                        <p style={{ color: '#e5e7eb', maxWidth: '700px', fontSize: '1.15rem', marginBottom: '48px', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>
                            We are always looking for exceptional talent. If you don't see a role that fits but believe you can add value, we want to hear from you.
                        </p>
                        <a 
                            href="mailto:info@halftonesystems.com?subject=Job Application" 
                            style={{ 
                                padding: '14px 40px', borderRadius: '100px', background: T.primary, color: '#fff', 
                                fontWeight: 800, border: 'none', cursor: 'pointer', textDecoration: 'none',
                                transition: 'all 0.3s ease', boxShadow: '0 15px 30px rgba(37,99,235,0.25)',
                                position: 'relative', zIndex: 1, fontSize: '0.95rem'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-4px)';
                                e.target.style.boxShadow = '0 20px 40px rgba(37,99,235,0.35)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 15px 30px rgba(37,99,235,0.25)';
                            }}
                        >
                            Send Your Resume &rarr;
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-16px) scale(1.2); }
                }

                @media (max-width: 768px) {
                    .careers-hero-section {
                        min-height: auto !important;
                        padding-bottom: 40px !important;
                    }
                    /* Mobile responsiveness overrides for boxes and text */
                    #our-culture h2, #life-at-hts h2 { font-size: 2.2rem !important; }
                    #our-culture h3, #life-at-hts h3 { font-size: 1.6rem !important; }
                    #our-culture p, #life-at-hts p { font-size: 1rem !important; line-height: 1.5 !important; }
                    
                    /* Force grid templates to 1 responsive column so cards don't overflow */
                    div[style*="gridTemplateColumns"],
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        width: 100% !important;
                        box-sizing: border-box;
                    }

                    /* Shrink heavy grid gaps and padding */
                    div[style*="gap: '80px'"], div[style*="gap: 80px"],
                    div[style*="gap: '48px'"], div[style*="gap: 48px"] {
                        gap: 32px !important;
                    }
                    div[style*="gap: '40px'"], div[style*="gap: 40px"] {
                        gap: 24px !important;
                    }
                    div[style*="padding: '60px'"],
                    div[style*="padding: '50px'"],
                    div[style*="padding: '40px'"],
                    div[style*="padding: '2rem'"] {
                        padding: 1.5rem !important;
                        border-radius: 20px !important;
                    }
                    div[style*="padding: '6rem 4rem'"] {
                        padding: 3rem 1.5rem !important;
                    }
                }
                
                .form-grid-2 {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                }
                .form-checkbox-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }

                @media (max-width: 1024px) {
                    .detail-panel-desktop {
                        flex: 1.2 !important;
                    }
                }

                @media (max-width: 768px) {
                    .indeed-split-view {
                        flex-direction: column !important;
                    }
                    .detail-panel-desktop {
                        display: none !important;
                    }
                    .job-card-root {
                        padding: 1.25rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CareersPage;