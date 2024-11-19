import React, { useState } from 'react';
import './styles.css';

const games = [
    { id: 1, name: 'Game 1', trailer: '/game1-trailer.mp4', shortcut: 'C:\\path\\to\\game1.lnk' },
    { id: 2, name: 'Game 2', trailer: '/game2-trailer.mp4', shortcut: 'C:\\path\\to\\game2.lnk' },
    { id: 3, name: 'Game 3', trailer: '/game3-trailer.mp4', shortcut: 'C:\\path\\to\\game3.lnk' },
    { id: 4, name: 'Game 4', trailer: '/game4-trailer.mp4', shortcut: 'C:\\path\\to\\game4.lnk' },
];

const GameSelector = () => {
    const [currentGame, setCurrentGame] = useState(0);

    const handlePlay = () => {
        const { exec } = window.require('child_process');
        exec(`"${games[currentGame].shortcut}"`);
    };

    return (
        <div className="game-selector">
            <button onClick={() => setCurrentGame((currentGame - 1 + games.length) % games.length)}>
                &#8592; Left
            </button>
            <div className="game-display">
                <h2>{games[currentGame].name}</h2>
                <video src={games[currentGame].trailer} autoPlay loop muted />
                <button onClick={handlePlay}>Play</button>
            </div>
            <button onClick={() => setCurrentGame((currentGame + 1) % games.length)}>
                Right &#8594;
            </button>
        </div>
    );
};

export default GameSelector;
