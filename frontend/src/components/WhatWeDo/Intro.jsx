import React from 'react';
import './Intro.css';
import whatWeDoVideo from '../../assets/videos/What We Do.mp4';

export const Intro = () => {
    return (
        <section id="intro" className="intro hero-format-standard" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Video */}
            <div className="hero-video-container">
                <video src={whatWeDoVideo} autoPlay loop muted playsInline></video>
                <div className="hero-video-overlay"></div>
            </div>

            <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                <p className="eyebrow-format-standard">
                    OUR CAPABILITIES
                </p>
                <h1 className="universal-hero-title intro-title">
                    <span className="text-white">What</span> <span className="text-primary" style={{ color: '#93c5fd' }}>We Do</span>
                </h1>
                <p className="intro-subtitle text-over-video-muted">
                    We provide a comprehensive suite of technology services designed to empower your business. From strategy to execution, we are your partner in digital excellence.
                </p>
            </div>
        </section>
    );
};
