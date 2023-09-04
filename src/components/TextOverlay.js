import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';

const TextOverlay = ({ text, position, onTextChange, onDrag, onResize }) => {
  return (
    <Draggable
      position={position}
      onDrag={onDrag}
    >
      <Resizable
        width={200}
        height={100}
        onResize={onResize}
        handleStyles={{ bottomRight: { background: 'blue' } }}
      >
        <div style={{position:"absolute",left:"220px",bottom:"400px"}}  className="text-overlay">
          <  textarea
            value={text}
            onChange={onTextChange}
            placeholder="Enter text"
          />
          
        </div>
      </Resizable>
    </Draggable>
  );
};

export default TextOverlay;
