import React from 'react'
import './video.css'
import space from '../../assets/space.mp4'
import {Link} from 'react-router-dom'
const Video = () => {
  return (
      <div className='hero'>
          <video autoPlay loop muted id='vid'>
              <source src={space} type='video/mp4'/>
          </video>
      < div className="content">
        <h1 classname='welcome__text'>Welcome to Trefoil</h1>
        <Link to='/about' className='btn btn-light'>About</Link>
        <button className='btn' ><Link to='/contact' >Contact</Link></button>
       
        
      </div>
      </div>
  )
}

export default Video