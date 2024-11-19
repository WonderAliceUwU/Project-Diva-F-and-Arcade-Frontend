import React, { useState } from 'react';
import GameSelector from './GameSelector';
import Screensaver from './Screensaver';

const MainScreen = () => {
    const [inactive, setInactive] = useState(false);

    const resetInactivity = () => {
        setInactive(false);
        clearTimeout(window.inactivityTimer);
        window.inactivityTimer = setTimeout(() => setInactive(true), 30000); // 30s timeout
    };

    useEffect(() => {
        window.addEventListener('mousemove', resetInactivity);
        window.addEventListener('keydown', resetInactivity);
        resetInactivity();

        return () => {
            window.removeEventListener('mousemove', resetInactivity);
            window.removeEventListener('keydown', resetInactivity);
        };
    }, []);

    return (
        <div className="main-screen" onMouseMove={resetInactivity}>
            {inactive ? (
                <Screensaver />
            ) : (
                <GameSelector />
            )}
        </div>
    );
};

export default MainScreen;
