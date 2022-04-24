import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import './error.css'


const Error = () => {
  return (
   
    <div className="wrapper">
      <Navbar  className='page-header'/>
      <div className='error'>
        <h1>404! Error... sorry Page does not exist</h1>
      </div>
    
        <Footer className='page-footer'/>
        
    </div>

  )
}

export default Error