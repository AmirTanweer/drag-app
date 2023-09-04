import React, { useState } from 'react';
import ImageDisplay from './components/ImageDisplay';
import TextOverlay from './components/TextOverlay';
import './App.css';

function App() {
  const [textOverlays, setTextOverlays] = useState([]);
  const addTextOverlay = () => {
   
    setTextOverlays([...textOverlays, { text: '', position: { x: 0, y:20  } }]);
  };

  const handleTextChange = (index, newText) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index].text = newText;
    setTextOverlays(updatedTextOverlays);
  };

  const handleDrag = (index, e, ui) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index].position.x += ui.deltaX;
    updatedTextOverlays[index].position.y += ui.deltaY;
    setTextOverlays(updatedTextOverlays);
  };

  const handleResize = (index, e, { size }) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index].size = size;
    setTextOverlays(updatedTextOverlays);
  };

  return (
    <div className="App">
      <ImageDisplay />
      <div className="btnbox">

      <button className='center-button'  onClick={addTextOverlay}>Add Text</button>
      </div>
      {textOverlays.map((overlay, index) => (
        <TextOverlay
          key={index}
          text={overlay.text}
          position={overlay.position}
          onTextChange={(e) => handleTextChange(index, e.target.value)}
          onDrag={(e, ui) => handleDrag(index, e, ui)}
          onResize={(e, data) => handleResize(index, e, data)}
        />
      ))}
    </div>
  );
}

export default App;
