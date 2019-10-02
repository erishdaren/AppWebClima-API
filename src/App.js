import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherData from './Components/WeatherData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <WeatherData />
       
      </header>
     
    </div>
  );
}

export default App;
