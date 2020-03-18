import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatImageContainer from './components/CatImageContainer'
import DogImageContainer from './components/DogImageContainer'

function App() {
  return (
    <div className="App">
      <CatImageContainer />
      <DogImageContainer />
    </div>
  );
}

export default App;
