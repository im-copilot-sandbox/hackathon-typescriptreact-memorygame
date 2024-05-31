import React from 'react';
import '../styles/Common.css';
import '../styles/SplashScreen.css';

/*
    This is the SplashScreen component that will be displayed when the game starts.
    It will display a welcome message and a button to start the game.
    Optionally, we can add some instructions or a brief description of the game here
    along with other options such as settings for the game including type of and number
    of cards, and difficulty level.

*/

interface SplashScreenProps {
  onStartGame: () => void; // Prop function to start the game
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStartGame }) => {
  return (
    <div className="screen">
      <h1>Welcome to My Game App!!</h1>
      <p>This is the splash screen of the game.</p>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
};

export default SplashScreen;