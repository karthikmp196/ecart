import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart2 } from '../redux/cart2'
import { addToWish } from '../redux/wish'



function Home() {
  const [product,setProduct]=useState([])
  const[productContainer,setProductContainer]=useState([])
  const dispatch = useDispatch()
  const appData = async ()=>{
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    setProduct(data)
    setProductContainer(data)
 
  }
  useEffect(()=>{
    appData()
  },[])


  const handleSearch=(name)=>{
    setProduct(productContainer.filter(item=>item.title.includes(name)))
  }
 
  return (
   
   
    <div  >
      
      <input style={{marginLeft:'25%',marginBottom:'20px',borderRadius:'10px',width:'30%'}}  type="text" placeholder='Search' onChange={(e)=>handleSearch(e.target.value)}/>  
        <Row>
          <br />
        
        
         {
          
         product.length>0?
        product.map((item)=>(
          <Col lg={3} md={4} sm={1}>
            
             <Card style={{ marginLeft:'20px',marginTop:'20px',width: '300px',height:'500px',marginBottom:'20px' }}>
            <Card.Img variant="top" src={item.image}  style={{marginTop:'20px',paddingLeft:'60px',width:'200px',height:'200px'}}/>
            <Card.Body>
              <Card.Title>${item.title}</Card.Title>
             

              <Card.Text>
                {item.description.slice(0,100)}
              </Card.Text>
              <Card.Title>${item.price}</Card.Title>
              <Button onClick={()=>dispatch(addToWish(item))} style={{marginRight:'20px'}} variant="secondary"><i className="fa-solid fa-heart"></i></Button>

                <Button  onClick={()=>dispatch(addToCart2(item))} variant="secondary"><i className="fa-solid fa-cart-shopping"></i></Button>
               

            </Card.Body>
          </Card>
          </Col>
         
       )):"nothing to display"
       
        }
       </Row>
      
    
    
    </div>
  )
}

export default Home
