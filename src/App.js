import React, { useState } from 'react';
import './App.css';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import headerImg from './imgs/17545.png';
import postImg from './imgs/2554.jpg';
import simpleImg from './imgs/simple.jpg';
import { Button,Container,Row,Col,Image,CardGroup,Card } from 'react-bootstrap';

//first post about website chat via telegramm
const WCPost = () => {
  const [cardImgSrc] = useState(simpleImg) 
  return (
    <Card className='cardContainer'>      
        <Card.Img variant='top' src={cardImgSrc} className='cardImg' />      
        <Card.Body>
          <Card.Title>Website chat with messages via telegram, easy peasy.</Card.Title>
          <Card.Text>My mynds before I've started dive into.
          </Card.Text>
        </Card.Body>              
    </Card>     
  )
  
}
//generall post components
const MerryChristmasPost = () => {
  const [cardImgSrc] = useState(postImg) 
  return (
    <Card className='cardContainer'>      
        <Card.Img variant='top' src={cardImgSrc} className='cardImg' />      
        <Card.Body>
          <Card.Title>Merry Christmas</Card.Title>
          <Card.Text>and happy new
          </Card.Text>
        </Card.Body>              
    </Card>     
  )
  
}

const HeaderComponent = () => {
  const [headerSrc] = useState(headerImg)   
  return (
    <Image src={headerSrc} className='p-0 headerImg'/>    
  )  
}

const RecentPosts = () => { 
  return (
    <Container fluid className='justify-content-center row' id='postContainer'>
      <Row className='justify-content-between'>
        <Col><h3 className='mb-0'>Recent posts</h3></Col>
        <Col className='d-flex align-items-end justify-content-end'><a href='#'>
          <h6>View all posts ></h6></a>            
        </Col>
        <hr />
      </Row>      
      <Row className='justify-content-center'> 
        <Col className='mt-1' xs={12} sm={10} lg={8} xxl={6}><WCPost /></Col>
        <Col className='mt-1' xs={12} sm={6} lg={4} xxl={4}><MerryChristmasPost /></Col>
        <Col className='mt-1' xs={12} sm={6} lg={4} xxl={4}><MerryChristmasPost /></Col>
        <Col className='mt-1' xs={12} sm={6} lg={4} xxl={4}><MerryChristmasPost /></Col>                            
      </Row>
    </Container>
  )  
}

const BlogApp = () => {  
  return (
    <div>    
      <Container fluid>        
        <Row className='justify-content-center header'>          
            <HeaderComponent />
            <div className='position-absolute header headerOverlay p-0 d-flex align-items-center'>
              <h1 className='ms-5'>
                Reminder about coder discoveries
              </h1>
            </div>                  
        </Row>
        <RecentPosts />
      </Container>      
    </div>
  )  
}

export default BlogApp;
