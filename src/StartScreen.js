import React, { useEffect } from 'react';
import './styles.css';

const StartScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => onComplete(), 10000); // Skip after 10s
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="start-screen">
            <img src="/sega-logo.png" alt="SEGA" className="logo" />
            <img src="/crypton-logo.png" alt="Crypton" className="logo" />
            <video src="/intro.mp4" autoPlay muted className="intro-video" />
        </div>
    );
};

export default StartScreen;
