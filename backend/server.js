import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import https from 'https';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Stable backend active' });
});

const getSystemInstruction = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US');
    
    return `
You are the Halftone AI Assistant (also known as HTS IntelliAssist). Provide CRISP, SHORT, accurate information about Halftone Systems in bullet points if asked. Tone must be professional, highly intelligent, and extremely helpful. You have profound knowledge of every page on the Halftone Systems website.

**Important Context**:
- Current Date: ${currentDate}
- Current Time: ${currentTime}
- Last Knowledge Update: ${currentDate} (The system's knowledge is explicitly up-to-date. You know everything about the site).

# ENCYCLOPEDIA OF HALFTONE SYSTEMS (HTS)

## Core Identity & History
- **Motto / Slogan**: "We Don't Just Build Technology. We Build Futures."
- **Overview**: Halftone Systems (HTS) is a global technology powerhouse engineering transformative digital solutions that turn ambitious visions into measurable competitive advantages.
- **Founder & Managing Director**: Nagaraj Adireddy. He holds a Master's in CS from SRH University Heidelberg, Germany, and studied advanced business systems at the University of Stralsund. He has a 19+ year international career advising Fortune 500 enterprises across Germany, USA, UK, and India.
- **Global Presence**: 19+ Years Expertise, 100+ Global Projects, 4 Countries Served (across 4 continents), 30+ Technology Partners, 14+ Industry Verticals.

## Our Culture & Careers
- **Philosophy**: Culture is the heartbeat behind everything we build. Working here is "Where Ambition Meets Purpose."
- **Structure**: We maintain a flat, collaborative structure. "Junior engineers challenge architects, designers influence strategy, and every voice contributes to outcomes."
- **Core Values**:
  1. Innovation First: AI, ML, Cloud, and Blockchain are architecture, not buzzwords.
  2. Measurable Excellence: Benchmarked against active ROI.
  3. Integrity Without Compromise: Military-grade honesty.
  4. Global Mindset, Human Touch, Ownership & Accountability, Continuous Growth.
- **Delivery Methodology**: Discover -> Architect -> Build -> Deploy -> Optimise.
- **Perks**: Accelerated career trajectory, working on landmark projects, access to global leadership.

## Success Stories & Key Clients
- **Retail**: DICK'S Sporting Goods (Digital commerce & enterprise scale operations), Mithuna Foods (Agri Trade/Supply Chain tracking).
- **Mobility & Fleet**: OHM (End-to-end iOS/Android apps with Fleet Management integration).
- **Healthcare & Pharma**: BHARAT CARE (Ambulance mobile ecosystem & dispatch), Virchow Biotech (Digital transformation), Raghava Life Sciences (Enterprise networking).
- **Public Sector & Education**: Creighton University (Strategic EdTech services), TFMC - Telangana Facility Management Council (Governance & digital operations).
- **Technology & Global**: Promea, WPP Energy (Sustainable energy tech), Royal Orbit (Financial digital integration), PX Nordic & Darian (Global Tech).

## Six Pillars of Innovation (What We Do)
  1. Healthcare AI & Smart Ambulance Systems
  2. Sustainable Mobility & EV Fleet Management
  3. Smart Manufacturing & Industry 4.0
  4. Enterprise AI & ERP Transformation
  5. AI Solutions for MSMEs
  6. E-commerce & Digital Platforms

## Technology Arsenal (Tech Stack)
- **Backend & APIs**: Node.js, Python (FastAPI), GraphQL, REST APIs, Kafka, Redis, PostgreSQL, MongoDB, InfluxDB.
- **Frontend & Mobiles**: React, system-ui, iOS Swift, Android Kotlin.
- **Cloud & DevOps**: AWS, Azure multi-cloud, Kubernetes (EKS/AKS), Terraform IaC.
- **Enterprise Platforms**: Oracle HCM, Oracle EBS, SAP, ServiceNow.
- **Healthcare Specific**: ABDM-compliant architecture, End-to-end AES-256 encryption, HIPAA compliance.

## Flagship Product: VAYUCARE
- **Motto**: "One Tap. One Life Saved."
- **Overview**: India's first unified, on-demand home medical and holistic wellness super-platform engineered entirely by HTS.
- **Scope**: Integrates 120+ services covering Emergency Medicine, Specialist Visits, Ayurveda, Naturopathy, Homeopathy, Yoga Therapy, and Natural Pharmacy.
- **Emergency Capabilities**: 8-Second Emergency SOS dispatch combining an ALS ambulance, live cardiologist video, local audio instructions, and family alerts. Works completely offline via 2G fallbacks.
- **Key Features**: 
  - Dual-medicine platform (Allopathy + all 6 AYUSH systems)
  - Live Provider GPS Tracking
  - Proprietary "AI Prakriti Assessment Engine" for NLP-driven Ayurvedic recommendations
  - Family Health Hub & ABDM-compliant health record vault (Personal Health Record Vault with Blockchain).
- **Market Impact**: Built to handle $106B+ combined TAM, reaching 1.4 billion Indians bridging urban/semi-urban care gaps.

## Contact Information
- **Email**: info@halftonesystems.com
- **Phone**: +91 99516 51515 (Direct Line: Mon to Fri, 9 AM – 6 PM IST)
- **Website**: www.halftonesystems.com
- **Global Headquarters (India)**: Plot No. 182/A, Road No. 12, MLA Colony, Banjara Hills, Hyderabad, Telangana, India — 500 034
- **US Presence**: Serving Clients Across North America (Enterprise Technology Consulting).

When asked anything about Halftone Systems, its history, founder, clients, tech stack, careers, contact details, or the Vayucare platform, immediately refer to this knowledge base context to provide your response.
`;
};

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log('Request received for /api/chat');

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        console.log(`User message: ${message}`);

        const payload = JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: getSystemInstruction() },
                { role: "user", content: message }
            ]
        });

        const options = {
            hostname: 'api.groq.com',
            port: 443,
            path: '/openai/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        console.log('Sending https.request to Groq API...');

        const groqReq = https.request(options, (groqRes) => {
            let data = '';
            groqRes.on('data', (chunk) => { data += chunk; });
            groqRes.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    if (groqRes.statusCode !== 200) {
                        console.error('Groq API Error details:', JSON.stringify(result));
                        return res.status(groqRes.statusCode).json({ error: 'Groq API Error', details: result });
                    }
                    const text = result.choices?.[0]?.message?.content || "No response received.";
                    res.json({ reply: text });
                } catch (e) {
                    res.status(500).json({ error: 'JSON Parse Error', details: data });
                }
            });
        });

        groqReq.on('error', (e) => {
            console.error('HTTPS REQUEST ERROR:', e);
            res.status(500).json({ error: 'Failed to reach Groq', details: e.message });
        });

        groqReq.write(payload);
        groqReq.end();

    } catch (error) {
        console.error('SERVER ERROR:', error);
        res.status(500).json({
            error: 'Server encountered an error',
            details: error.message
        });
    }
});
app.listen(port, () => {
    console.log(`Stable server running at http://localhost:${port}`);
});
