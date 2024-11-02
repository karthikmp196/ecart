import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart2, removeFromCart2 } from '../redux/cart2';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray= useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
 const navigate = useNavigate()
  console.log(cartArray);

  const sum=()=>{
  if(cartArray.length>0){
    var sum=cartArray.map(n=>n.price)
     setTotal(sum.reduce((n1,n2)=>n1+n2))
  }
}

const checkOut=()=>{
 alert("Your order has been placed successfully Thankyou for shopping with us!!!")
 dispatch(emptyCart2())
 navigate('/')
}

useEffect(()=>{
  sum()
},[cartArray])

  return (
    <div id='cart'>     
      <Row>
      <br />
      {
        cartArray.length>0?
        cartArray.map((item)=>( 
          <Col lg={3} md={4} sm={1}>
            
          <Card style={{ marginLeft:'20px',width: '300px',height:'500px',marginBottom:'20px' }}>
         <Card.Img variant="top" src={item.image}  style={{alignContent:'center',width:'200px',height:'200px'}}/>
         <Card.Body>
           <Card.Title>${item.title}</Card.Title>
          

           <Card.Text>
             {item.description.slice(0,100)}
           </Card.Text>
           <Card.Title>{item.price}</Card.Title>
           

             <Button onClick={()=>dispatch(removeFromCart2(item.id))} variant="secondary"><i class="fa-solid fa-trash"></i></Button>


         </Card.Body>
       </Card>
       </Col> 

       
     
    )) :""
   
}

        

  </Row>
{ 
  cartArray.length>0?
  

  <div id='order'> 
    
     
          <h2>Total:{total}</h2>
          <Button style={{borderRadius:'10px'}} variant="success" onClick={()=>checkOut()}>Checkout</Button>
    

        </div>:
        <div>
        <h1>Your cart is empty!!</h1>
        <Link style={{textDecoration:'none'}} to={'/'}><Button  variant="primary">Go to Home</Button></Link>
        </div>

}

    </div>

  )
}


export default Cart
