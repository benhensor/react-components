import React, { useEffect } from 'react'
import './GlassCard.css'
import vanillaTilt from 'vanilla-tilt'

const GlassCard = ({ number, title, body, link  }) => {

  // create a ref to reference the card div element
  const tiltRef = React.useRef(null)

  // initialize vanillaTilt when component mounts
  useEffect(() => {
    if (tiltRef.current) {
        // options can be set here, see vanilla-tilt.js docs
        vanillaTilt.init(tiltRef.current, {
          max: 25,
          speed: 400,
          glare: true,
        })
      }
    }, [])


return (
  <div className='global'>
    <div className='body'>
      <div className='container'>
        <div className='card' ref={tiltRef}>
          <div className='content'>
            <h2>{number}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button href='#'>{link}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GlassCard;