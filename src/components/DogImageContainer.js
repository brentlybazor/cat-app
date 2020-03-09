import React, { useEffect, useState } from 'react';

function DogImageContainer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData)
  }

  return (
    <div className="App">
        <img src={data.message} className="catImg border" alt="logo" />
        <p>
          This is dog
        </p>
        <button onClick={getData}>
        New Image
        </button>
    </div>
  );
}

export default DogImageContainer;
