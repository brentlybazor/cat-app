import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
// import './App.css';

function Container() {

  const [catData, setCatData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const data = await response.json();
    console.log(data);
    setCatData(data[0])
  }

  // https://api.thecatapi.com/v1/images/search

  console.log(catData);
  return (
    <div className="App">
        <img src={catData.url} className="catImg" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React here
        </a>
    </div>
  );
}

export default Container;
