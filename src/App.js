import React, {useState, useEffect} from 'react';
import './App.css';
import {apiUrl} from './config';

import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const options = `${apiUrl}/acf/v3/options/options`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(options).then((res) => {
      const gallery = res.data.acf.gallery;

      for(let galleryImage of gallery) {
        galleryImage.sizes = 'thumbnail';
        galleryImage.original = galleryImage.url;
        
      }

      setImages(gallery);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        test rest api
      </header>
      <ImageGallery items={images} />
    </div>
  );
}

export default App;
