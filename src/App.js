import React from 'react';
import './App.css';
import CatImageContainer from './components/CatImageContainer'
import DogImageContainer from './components/DogImageContainer'
import PostViewer from './components/PostViewer'

function App() {
  return (
    <div className="App">
      <PostViewer />
      <CatImageContainer />
      <DogImageContainer />
    </div>
  );
}

export default App;
