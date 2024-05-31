import React from 'react';
import '../styles/EndScreen.css';

/*
    This is the EndScreen component that will be displayed when the game ends.
    It will display a message and a button to restart the game.
    Optionally, we can add the player's score and even a leaderboard along with
    some stats about the game such as how long it took to complete the game and
    how many moves the player made.
*/

interface EndScreenProps {
    onRestartGame: () => void; // Prop function to restart the game
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestartGame }) => {
    return (
        <div className="end-screen">
            <h1>Game Over</h1>
            <p>Thanks for playing!</p>
            <button onClick={onRestartGame}>Play Again</button>
        </div>
    );
};

export default EndScreen;