import React from 'react'
import { Badge, Button, Container, Form, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {
  const wishArray= useSelector((state)=>state.wish)
  const cartArray= useSelector((state)=>state.cart)
  const wishCount=wishArray.length
  const cartCount=cartArray.length
  return (
    <div id='main'>
 <div id='box'>
    
     <h2><a style={{marginLeft:'20px',textDecoration:'none'}} href='/'>Teerex</a></h2>  
     
         
     <div style={{marginRight:'30px'}}>

         <Link to={'/Wish1'}><Button  variant="outline-success">WishList <i className="fa-solid fa-heart"></i> <Badge>{wishCount}</Badge> </Button> </Link>
  
       <Link to={'/Cart'}><Button  variant="outline-success">Cart <i className="fa-solid fa-cart-shopping"></i> <Badge>{cartCount}</Badge> </Button></Link> 
     </div>

     
     </div>         

        </div>
  )
}

export default Header
