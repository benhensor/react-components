import { useState } from 'react';
import './FrostedGlass.css';

const FrostedGlass = () => {

  const [mousePos, setMousePos] = useState({ left: 0, top: 0 })

  const mousemove = (e) => {
    setMousePos({ left: e.clientX, top: e.clientY });
  };

  return (
    <section>
      <div className="frosted-container" onMouseMove={mousemove}>
        <h2 className="title">Frosted Glass</h2>
        <div className="glass" style={mousePos}></div>
      </div>
    </section>
  )
}

export default FrostedGlass