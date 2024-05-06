import React, { useState, useEffect } from 'react';
import './Games.css';

const Games = () => {
    const [memoryGameVisible, setMemoryGameVisible] = useState(false);
    const [emojis, setEmojis] = useState([
        '🍕', '🍕','🥦', '🥦','🍏', '🍏', '🥕', '🥕', '🥫', '🥫', '📦', '📦', '🥤', '🥤', '🚗', '🚗', 
    ]);
    const [shuffledPairs, setShuffledPairs] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [solvedIndices, setSolvedIndices] = useState([]);
    const [showCongratulations, setShowCongratulations] = useState(false); // New state variable

    useEffect(() => {
        const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
        const selectedEmojis = Array.from(new Set(shuffledEmojis.slice(0, 8)));
        const pairs = [...selectedEmojis, ...selectedEmojis];
        const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
        setShuffledPairs(shuffledPairs);
    }, [emojis]);

    const handleClick = (index) => {
        if (flippedIndices.length === 2 || solvedIndices.includes(index)) return;

        setFlippedIndices([...flippedIndices, index]);

        if (flippedIndices.length === 1) {
            if (shuffledPairs[flippedIndices[0]] === shuffledPairs[index]) {
                setSolvedIndices([...solvedIndices, flippedIndices[0], index]);
                setFlippedIndices([]);
                if (solvedIndices.length + 2 === shuffledPairs.length) {
                    setShowCongratulations(true); // Show congratulatory message
                }
            } else {
                setTimeout(() => {
                    setFlippedIndices([]);
                }, 1000);
            }
        }
    };

    const renderBoxes = () => {
        return shuffledPairs.map((emoji, index) => {
            const isFlipped = flippedIndices.includes(index);
            const isSolved = solvedIndices.includes(index);

            return (
                <div
                    key={index}
                    className={`item ${isFlipped || isSolved ? 'flip' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {isFlipped || isSolved ? emoji : ''}
                </div>
            );
        });
    };

    const resetGame = () => {
        setFlippedIndices([]);
        setSolvedIndices([]);
        setEmojis([
            '🍕', '🍕','🥦', '🥦','🍃', '🍃', '🌱', '🌱', '🥫', '🥫', '📦', '📦', '🥤', '🥤', '📱', '📱', 
        ]);
    };

    const toggleMemoryGame = () => {
        setMemoryGameVisible(!memoryGameVisible);
    };

    return (
        <div className="container">
            <h2>Games</h2>
            {!memoryGameVisible && (
                <div className="square-box" onClick={toggleMemoryGame}>
                    <span role="img" aria-label="video-game" style={{ fontSize: '5rem' }}>▶</span>
                </div>
            )}
            {memoryGameVisible && (
                <div className="container">
                    <div className="memoryGame">{renderBoxes()}</div>
                    <button className="reset" onClick={resetGame}>Reset Game</button>
                </div>
            )}
            {showCongratulations && ( // Render congratulatory message if showCongratulations is true
                <div className="congratulations">
                    <p>Congratulations! You made it!</p>
                    <button onClick={() => setShowCongratulations(false)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Games;










