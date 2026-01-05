import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <h1>Welcome to Vite + React!</h1>

      <div className="card">
        <button onClick={increment}>
          Count: {count}
        </button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to see Hot Module Replacement in action.
        </p>
      </div>

      <p className="read-the-docs">
        Click on the logos above to learn more about Vite and React.
      </p>
    </div>
  );
}

export default App;
