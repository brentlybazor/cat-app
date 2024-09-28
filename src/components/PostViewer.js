import React, { useEffect, useState } from 'react';

function PostViewer() {

  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/posts`);
    const data = await response.json();
    setCatData(data);
    setLoading(false);

  }

  const putData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });
      const data = await response.json();
      const {errors: submitErrors} = data.message
      if(submitErrors){
        console.log(submitErrors);

        // submitErrors.map((error) => {
        //   console.log(error);
        // })
        // console.log(typeof(data.message.errors));


        setErrors([submitErrors]);
      }
      setLoading(false);
      getData();
    } catch (err) {
        setLoading(false);
        getData();
        console.log(err);
    }

  }

  const handleSubmit = async () => {
    setErrors([]);
    await putData();
    setTitle('');
    setDescription('');
  }

  return (
    <div style={{ width: '50%', marginLeft: '25%'}}>
      <h3>Loading: {loading || 'false'}</h3>
      {
        catData.map((post) => {
          const { _id: id, title, description } = post;
        return <div>
            <hr/>
            <p className="imgDescription">{id}</p>
            <p className="imgDescription">{title}</p>
            <p className="imgDescription">{description}</p>
            <hr/>
          </div>
        })
      }

        <label className="imgDescription">title </label>
        <input name='title' value={title} onChange={(val) => setTitle(val.target.value)}/><br/>
        <label className="imgDescription">description </label>
        <input name='description' value={description} onChange={(val) => setDescription(val.target.value)}/><br/>
        <button onClick={handleSubmit}>
        put data
        </button>

      {
        errors && errors.map((error) => {
          console.log(error);
          return [error].map((string) => {
            console.log(string);
            return <p>{string.title.message}</p>
          })

        })
      }
    </div>
  );
}

export default PostViewer;
