import React from 'react'

import { addToCart2 } from '../redux/cart2'
import { removeFromWish } from '../redux/wish'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


function Wish1() {
  const wishArray= useSelector((state)=>state.wish)
  const dispatch=useDispatch()
  return (
    
    <div id='div1'>
     <Row>
      
      {
        wishArray.length>0?
        wishArray.map((item)=>( 
          <Col lg={3} md={4} sm={1}>
            
          <Card style={{ marginLeft:'20px',width: '300px',height:'500px',marginBottom:'20px' }}>
         <Card.Img variant="top" src={item.image}  style={{alignContent:'center',width:'200px',height:'200px'}}/>
         <Card.Body>
           <Card.Title>${item.title}</Card.Title>
          

           <Card.Text>
             {item.description.slice(0,100)}
           </Card.Text>
           <Card.Title>{item.price}</Card.Title>
           

             <Button style={{marginRight:'20px'}} onClick={()=>dispatch(addToCart2(item))} variant="secondary"><i class="fa-solid fa-cart-shopping"></i></Button>
             <Button onClick={()=>dispatch(removeFromWish(item.id))} variant="secondary"><i class="fa-solid fa-trash"></i></Button>


         </Card.Body>
       </Card>
       </Col> 
     
    )) :<h1>"Your wishlist is empty"</h1>
    
   
}

  </Row>
    </div>
    

    
  )
}

export default Wish1
