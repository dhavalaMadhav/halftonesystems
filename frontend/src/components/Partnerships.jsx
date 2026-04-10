import React from 'react';
import './Partnerships.css';

import img1 from '../assets/Technology Partners/ANGCC.png';
import img2 from '../assets/Technology Partners/Chemie-Tech.png';
import img3 from '../assets/Technology Partners/Creighton University.png';
import img4 from '../assets/Technology Partners/Darian International.png';
import img5 from '../assets/Technology Partners/Mithuna.jpeg';
import img6 from '../assets/Technology Partners/OHM.png';
import img7 from '../assets/Technology Partners/PX Nordic.png';

import img8 from '../assets/Technology Partners/Promea.png';
import img9 from '../assets/Technology Partners/Royal Orbit.png';
import img10 from '../assets/Technology Partners/TFMC.png';
import img11 from '../assets/Technology Partners/Virchow.png';
import img12 from '../assets/Technology Partners/WhiteCapital.jpeg';
import img13 from '../assets/Technology Partners/nvisionharvest.png';
import img14 from '../assets/Technology Partners/wpp.png';

const PartnerLogo = ({ src, alt }) => (
    <div className="partner-logo-container">
        <img
            src={src}
            alt={`${alt} logo`}
            className="partner-img"
        />
    </div>
);

export const Partnerships = () => {
    // Row 1
    const partnersRow1 = [
        { src: img1, alt: 'ANGCC' },
        { src: img2, alt: 'Chemie-Tech' },
        { src: img3, alt: 'Creighton University' },
        { src: img4, alt: 'Darian International' },
        { src: img5, alt: 'Mithuna' },
        { src: img6, alt: 'OHM' },
        { src: img7, alt: 'PX Nordic' },
    ];

    // Row 2
    const partnersRow2 = [
        { src: img8, alt: 'Promea' },
        { src: img9, alt: 'Royal Orbit' },
        { src: img10, alt: 'TFMC' },
        { src: img11, alt: 'Virchow' },
        { src: img12, alt: 'WhiteCapital' },
        { src: img13, alt: 'NVision Harvest' },
        { src: img14, alt: 'WPP' },
    ];

    return (
        <section id="partnerships" className="partnerships section-padding">
            <div className="container-fluid">
                <p className="partners-label text-center">Trusted by Global Technology Leaders</p>

                {/* Row 1: Left to Right */}
                <div className="scroll-container">
                    <div className="scroll-track scroll-left">
                        {/* Original Set */}
                        {partnersRow1.map((p, i) => <PartnerLogo key={`r1-${i}`} src={p.src} alt={p.alt} />)}
                        {/* Duplicate Set for Loop */}
                        {partnersRow1.map((p, i) => <PartnerLogo key={`r1-dup-${i}`} src={p.src} alt={p.alt} />)}
                        {/* Extra Duplicate for Wide Screens */}
                        {partnersRow1.map((p, i) => <PartnerLogo key={`r1-dup2-${i}`} src={p.src} alt={p.alt} />)}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="scroll-container">
                    <div className="scroll-track scroll-right">
                        {partnersRow2.map((p, i) => <PartnerLogo key={`r2-${i}`} src={p.src} alt={p.alt} />)}
                        {partnersRow2.map((p, i) => <PartnerLogo key={`r2-dup-${i}`} src={p.src} alt={p.alt} />)}
                        {partnersRow2.map((p, i) => <PartnerLogo key={`r2-dup2-${i}`} src={p.src} alt={p.alt} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};
