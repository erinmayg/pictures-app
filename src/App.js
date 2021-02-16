import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('mountains');
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    axios
      .get(
        `${apiRoot}/search/photos?query=${query}&client_id=${accessKey}&count=10`
      )
      .then((res) => setPictures(res.data.results));
  }, [query]);

  return (
    <div className='App'>
      <div className='button-row'>
        <div className='button' onClick={() => setQuery('mountains')}>
          Mountains
        </div>
        <div className='button' onClick={() => setQuery('beaches')}>
          Beaches
        </div>
        <div className='button' onClick={() => setQuery('birds')}>
          Birds
        </div>
        <div className='button' onClick={() => setQuery('food')}>
          Food
        </div>
      </div>
      <h1>{query.charAt(0).toUpperCase() + query.substring(1)} Pictures</h1>
      <div className='pictures-container'>
        {pictures?.map((pic) => (
          <div className='card' key={pic.id}>
            <img
              className='card--image'
              alt={pic.alt_description}
              src={pic.urls.full}
              width='50%'
              height='50%'
            ></img>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
