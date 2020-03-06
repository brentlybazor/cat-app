import React, { useEffect, useState } from 'react';

function CatImageContainer() {

  const [catData, setCatData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const data = await response.json();
    setCatData(data[0])
  }

  return (
    <div className="App">
        <img src={catData.url} className="catImg" alt="logo" />
        <p>
          This is cat
        </p>
        <button onClick={getData}>
        New Image
        </button>
    </div>
  );
}

export default CatImageContainer;
