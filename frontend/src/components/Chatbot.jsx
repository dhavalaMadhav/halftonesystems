import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import BB8Model from './BB8Model';
import './Chatbot.css';

// Extend fiber with OrbitControls
extend({ OrbitControls: ThreeOrbitControls });

function OrbitControls(props) {
    const { camera, gl: { domElement } } = useThree();
    const controls = useRef();
    useFrame(() => controls.current?.update());
    return <orbitControls ref={controls} args={[camera, domElement]} {...props} />;
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Chatbot Error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="error-fallback">
                    <h2>Something went wrong with the 3D view.</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                        {this.state.error?.message || "Unknown error"}
                    </p>
                    <button onClick={() => this.setState({ hasError: false, error: null })}>Try again</button>
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            );
        }
        return this.props.children;
    }
}

const Chatbot = () => {
    // Toggle state
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 1. State to hold the chat history
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('chat_history');
        return savedMessages ? JSON.parse(savedMessages) : [
            { text: "Hello! How can I help you today?", sender: "bot" }
        ];
    });

    // 2. State to hold the current text input
    const [inputValue, setInputValue] = useState('');

    // 3. State to show a loading indicator
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Effect to persist messages to localStorage
    useEffect(() => {
        localStorage.setItem('chat_history', JSON.stringify(messages));
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Function to clear chat history
    const handleClearHistory = () => {
        const defaultMessages = [{ text: "Hello! How can I help you today?", sender: "bot" }];
        setMessages(defaultMessages);
        localStorage.removeItem('chat_history');
    };

    // Function to handle sending the message
    const handleSendMessage = async (e) => {
        if (e) e.preventDefault();
        if (!inputValue.trim() || isLoading) return; // Prevent sending empty messages

        // Add the user's message to the chat
        const userMessage = { text: inputValue, sender: "user" };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        const messageToSend = inputValue; // Capture locally
        setInputValue(''); // Clear the input field
        setIsLoading(true);

        try {
            // Production Chatbot API URL
            const apiUrl = 'https://halftonesystems-backend-new.onrender.com';

            // Send the request to the production backend
            const response = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageToSend })
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();

            // Add the bot's reply to the chat
            if (data.reply) {
                setMessages([...newMessages, { text: data.reply, sender: "bot" }]);
            } else {
                setMessages([...newMessages, { text: "Error: No response from server.", sender: "bot" }]);
            }

        } catch (error) {
            console.error("Chatbot connection error:", error);
            setMessages([...newMessages, { text: "Sorry, I couldn't connect to the server.", sender: "bot" }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Allow sending by pressing the "Enter" key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`chatbot-container ${isMaximized ? 'maximized' : ''}`}>
            <div className={`chat-window ${isOpen ? 'open' : ''} ${isMaximized ? 'maximized' : ''}`}>
                <div className="chat-header">
                    <div className="header-info">
                        <div className="status-dot"></div>
                        <img src="/assets/chatbot_avatar.png" alt="Avatar" className="header-avatar" />
                        <h3>HTS IntelliAssist</h3>
                    </div>
                    <div className="header-actions">
                        {isMaximized && !isMobile && (
                            <>
                                <button className="icon-btn" onClick={handleClearHistory}>
                                    <RotateCcw size={20} />
                                </button>
                            </>
                        )}
                        {isOpen && (
                            isMobile ? (
                                <button
                                    className="icon-btn close-btn"
                                    onClick={() => setIsOpen(false)}
                                    title="Close Chat"
                                >
                                    <X size={24} />
                                </button>
                            ) : (
                                <button
                                    className={isMaximized ? "icon-btn" : "maximize-btn"}
                                    onClick={() => setIsMaximized(!isMaximized)}
                                    title={isMaximized ? "Restore" : "Maximize"}
                                >
                                    {isMaximized ? <Minimize2 size={isMaximized ? 24 : 18} /> : <Maximize2 size={18} />}
                                </button>
                            )
                        )}
                    </div>
                </div>

                <div className="chat-body">
                    {isMaximized && (
                        <ErrorBoundary onClose={() => setIsMaximized(false)}>
                            <div className="model-container">
                                <div className="greeting-bubble">
                                    Greetings! How can I be of service?
                                </div>
                                <Canvas
                                    shadows
                                    dpr={[1, 2]}
                                    camera={{ position: [0, 0, 5], fov: 45 }}
                                >
                                    <ambientLight intensity={1.5} />
                                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={1} />
                                    <directionalLight position={[0, 10, 0]} intensity={0.5} />

                                    <React.Suspense fallback={null}>
                                        <BB8Model position={[0, -1.5, 0]} scale={3} />
                                    </React.Suspense>

                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        minPolarAngle={Math.PI / 4}
                                        maxPolarAngle={Math.PI / 2}
                                    />
                                </Canvas>
                            </div>
                        </ErrorBoundary>
                    )}

                    <div className="chat-content">
                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message-wrapper ${msg.sender === 'bot' ? 'assistant-wrapper' : 'user-wrapper'}`}>
                                    {msg.sender === 'bot' && (
                                        <img src="/assets/chatbot_avatar.png" alt="Bot" className="message-avatar" />
                                    )}
                                    <div className={`message message-${msg.sender === 'bot' ? 'assistant' : 'user'}`}>
                                        <div className="message-content">{msg.text}</div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message-wrapper assistant-wrapper">
                                    <img src="/assets/chatbot_avatar.png" alt="Bot" className="message-avatar" />
                                    <div className="typing-indicator">
                                        {isMaximized && (
                                            <div className="dots">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                        )}
                                        <span>Assistant is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-input-area">
                            <form className="chat-input-form" onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder={isMaximized ? "Ask HTS IntelliAssist" : "Type your message..."}
                                    disabled={isLoading}
                                />
                                <div className="input-btns">
                                    <button type="submit" className="send-btn" disabled={isLoading || !inputValue.trim()}>
                                        <Send size={18} />
                                    </button>
                                    {isMaximized && (
                                        <button type="button" className="refresh-btn" onClick={handleClearHistory}>
                                            <RotateCcw size={18} />
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={`chatbot-fab ${isOpen ? 'active' : ''} ${isMaximized ? 'hidden' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
            </button>
        </div>
    );
};

export default Chatbot;
