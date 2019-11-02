import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
