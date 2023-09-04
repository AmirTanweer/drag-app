import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
   
    const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    
    
    axios.get(`https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}`)
      .then((response) => {
        setImageURL(response.data.urls.regular);
      })
      .catch((error) => {
        console.error('Error fetching image from Unsplash:', error);
      });
  }, []);

  return (
    <div className="image-display">
      <img
        src={imageURL}
        alt="Fetched from Unsplash"
        style={{ width: '100%', height: '100vh', objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageDisplay;
