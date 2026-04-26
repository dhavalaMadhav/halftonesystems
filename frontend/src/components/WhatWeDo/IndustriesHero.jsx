import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import industriesVideo from '../../assets/videos/Industries We Serve.mp4';

export const IndustriesHero = () => {
    // Reveal animation state removed per user request

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
        <section className="hero-format-standard industries-hero-section" style={{
            position: 'relative', width: '100%', minHeight: '80vh',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: 0, paddingRight: '24px', paddingBottom: '80px', paddingLeft: '24px', boxSizing: 'border-box',
        }}>
            {/* Background Video */}
            <div className="hero-video-container">
                <video src={industriesVideo} autoPlay loop muted playsInline></video>
                <div className="hero-video-overlay"></div>
            </div>

            {/* dot grid overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.13) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                opacity: 0.5,
            }} />

            {/* particles */}
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute', left: p.left, top: p.top,
                    width: `${p.size}px`, height: `${p.size}px`,
                    borderRadius: '50%', background: p.color, opacity: p.op,
                    pointerEvents: 'none', zIndex: 1,
                    animation: `floatParticle ${p.dur} ease-in-out infinite`,
                    animationDelay: p.delay,
                }} />
            ))}

            {/* top scan line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: `linear-gradient(90deg, transparent 0%, #2563EB 30%, rgba(96,165,250,0.8) 50%, #2563EB 70%, transparent 100%)`,
                zIndex: 2, animation: 'scanPulse 4s ease-in-out infinite',
            }} />

            {/* content */}
            <div style={{
                position: 'relative', zIndex: 3, maxWidth: '860px', width: '100%',
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
                <h4 className="eyebrow-format-standard" style={{
                    color: 'var(--c-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    textTransform: 'uppercase'
                }}>
                    Industries We Serve
                </h4>

                <h1 className="universal-hero-title" style={{
                    marginTop: 0,
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                    color: '#ffffff',
                    fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                    Your Industry.<br />
                    <span style={{ color: '#93c5fd' }}>Our Expertise.</span>
                </h1>


                <p style={{
                    margin: '0 auto 2rem auto', maxWidth: '800px',
                    fontSize: '1.15rem',
                    color: '#e5e7eb', lineHeight: 1.6,
                    fontFamily: "'Inter', system-ui, sans-serif",
                }}>
                    Halftone Systems provides the domain depth and technological excellence you need to lead your industry in the digital age. We architect competitive advantages that last.
                </p>


            </div>

            <style>{`
                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-16px) scale(1.2); }
                }
                @keyframes scanPulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.9; }
                }
                @media (max-width: 768px) {
                    .industries-hero-section {
                        min-height: auto !important;
                        padding-bottom: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};
