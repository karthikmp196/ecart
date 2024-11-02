import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div  style={{marginTop:'20px'}} id='base'> <br />
      <div id='desc'>
      <i style={{fontSize:'20px'}} className="fa-solid fa-truck"></i>   Designed and built with all the love in the world <br />
           by the Teerex team with the help of our contributors. <br />
          Code licensed Teerex team, docs CC BY 3.0.
      </div>

     <div id='links'>
          <h2>Links</h2>
         
              <Link style={{textDecoration:'none'}} to={'/'}> Home</Link> <br />
              <Link style={{textDecoration:'none'}} to={'/Cart'}>Cart</Link> <br />
              <Link style={{textDecoration:'none'}} to={'/Wish1'}>Wishlist</Link>  <br /> <br />
          
     </div >
      <div id='guides'>
          <h2>Guides</h2>
          
               <a style={{textDecoration:'none'}} href="https://react-bootstrap.netlify.app/">React</a> <br />
              <a style={{textDecoration:'none'}} href="https://react-bootstrap.netlify.app/">React Bootstrap</a> <br />
              <a style={{textDecoration:'none'}} href="https://react-bootstrap.netlify.app/">Routing</a>
        
          
      </div>
     <div id='contact'>
          <h2>Contact Us</h2>
          <input  type="text" placeholder='Enter Email id' />
          <button style={{marginRight:'30px'}}>Subscribe</button>
     </div>
    </div>
  )
}

export default Footer
