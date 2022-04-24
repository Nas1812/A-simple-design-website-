import React from 'react'
import Form from '../components/form/Form'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact


// import React, { Component } from 'react'
// import './contact.css'

// class HeroImage extends Component {
//     render() {
//         return (
//             <div className='hero-img'>
//                 <div className='heading'>
//                     <h1>{this.props.heading}</h1>
//                     <p>{this.props.text}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default HeroImage
