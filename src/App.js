import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [numberOfTimesClicked, setNumberOfTimesClicked] = useState(0);

  const increaseCount = () => {
    setNumberOfTimesClicked(numberOfTimesClicked + 1);
  }

  const resetCount = () => {
    setNumberOfTimesClicked(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={resetCount}>Reset</button>
        <p>
          <button>-</button>
          This has been clicked {numberOfTimesClicked} times
          <button>+</button>
        </p>
      </header>
    </div>
  );
}

export default App;
