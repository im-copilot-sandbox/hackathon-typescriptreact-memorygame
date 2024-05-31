import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Playfield from './components/Playfield'; // import the PlayField component
import EndScreen from './components/EndScreen'; // import the EndScreen component

/*
    This is the main App component that will manage the game state and render the appropriate
    components based on the game state. The game components include the SplashScreen, Playfield,
    and EndScreen components. The App component will keep track of the game state and update it
    based on user interactions such as starting the game, ending the game, or restarting the game.
    Optionally, we can add more features such as a timer, a score, and a leaderboard to the game.
*/

function App() {
  const [gameState, setGameState] = useState('splash'); // state to manage the game state

  const startGame = () => {
    setGameState('play'); // set gameState to 'play' when game starts
  };

  const endGame = () => {
    setGameState('end'); // set gameState to 'end' when game ends
  };

  const restartGame = () => {
    setGameState('splash'); // set gameState to 'splash' when game restarts
  };

  return (
    <div className="App">
      {gameState === 'splash' && <SplashScreen onStartGame={startGame} />}
      {gameState === 'play' && <Playfield x={4} y={4} onEndGame={endGame} />}
      {gameState === 'end' && <EndScreen onRestartGame={restartGame} />}
    </div>
  );
}

export default App;