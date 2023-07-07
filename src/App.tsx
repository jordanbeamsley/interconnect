import React, { useRef } from 'react';
import Canvas from './components/canvas/canvas';

import "./styles/base.scss"

function App() {
  
    const draw = (ctx:CanvasRenderingContext2D) => {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(0, 0, 100, 100);
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(50, 100, 20, 0, 2*Math.PI);
      ctx.fill()
}

    return (
      <Canvas draw={draw}/>
    );
}

export default App;
