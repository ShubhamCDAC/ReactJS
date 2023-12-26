
import './App.css';
import HomePage from './components/HomePage';
import GamePlay from './components/GamePlay';
import { useState } from 'react';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    { isGameStarted ? <GamePlay /> : <HomePage toggle = {toggleGamePlay} /> }
    </>
  )
}

export default App;
