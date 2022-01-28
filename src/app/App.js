import './App.css';
import React, { useState,useEffect,useRef} from 'react'
import { Button,Container,Row,Col,Image,CardGroup,Card } from 'react-bootstrap'
import { checkImgHeight } from './fucnForApp.js'
import { useDispatch } from 'react-redux'
import { chckedImgRender } from '../features/imgStateSlice'



//first blogpost about website chat via telegramm (cpmponent)
const WCPost = () => {
  const [cardImgSrc] = useState(require('../imgs/simple.jpg')); //setImg src
  const dispatch = useDispatch();
  useEffect(() => {    
    const img = document.querySelector('#simpleImg1');
    //execute promise for img rendered event    
    checkImgHeight(img).then(value => {
      if (value) {
        dispatch(chckedImgRender());        
      }    
    });    
  }, []);
  return (
    <Card className='cardContainer'>
        <Card.Img variant='top' className='cardImg' id='simpleImg1' src={cardImgSrc}/>          
        <Card.Body>
          <Card.Title>Website chat with messages via telegram, easy peasy.</Card.Title>
          <Card.Text>My minds before I'd started dive into.</Card.Text>
        </Card.Body>              
    </Card>     
  )
}

//create merry crhrystmass post component
const MerryChristmasPost = () => {
  const [cardImgSrc] = useState(require('../imgs/2554.jpg'));
  const dispatch = useDispatch();
  useEffect(() => {    
    const img = document.querySelector('#christmasImg');
    //execute promise for img rendered event    
    checkImgHeight(img).then(value => {
      if (value) {
        dispatch(chckedImgRender());        
      }    
    });    
  }, []);
  return (
    <Card className='cardContainer'>      
        <Card.Img variant='top' src={cardImgSrc} className='cardImg' id='christmasImg'/>      
        <Card.Body>
          <Card.Title>Merry Christmas</Card.Title>
          <Card.Text>and happy new</Card.Text>
        </Card.Body>              
    </Card>     
  )
  
}

//create header component
const HeaderComponent = () => {
  const [headerSrc] = useState(require('../imgs/17545.png'))
  const dispatch = useDispatch();
  useEffect(() => {    
    const img = document.querySelector('#headersImg');
    //execute promise for img rendered event    
    checkImgHeight(img).then(value => {
      if (value) {
        dispatch(chckedImgRender());        
      }    
    });    
  }, []);
  return (
    <Image src={headerSrc} className='p-0 headerImg' id='headersImg'/>    
  )  
}

//create recent posts component
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

//main container component
const MainContainer = () => { 
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

//create spinner loader component
const SpinnerLoader = () => {
  const spinnerLoaderStyle = {
    width: '6vh', 
    height: '6vh'
  }
  return (
    <div className='d-flex align-items-center justify-content-center vw-100 vh-100 position-absolute top-0 start-0 bg-light' id='spinnerLoader'>
      <div className='spinner-grow text-primary' role='status' style={{spinnerLoaderStyle}} />
      <span className='ms-3 sr-only text-dark position-relative w-auto h-auto'>Loading...</span>
    </div>
  )
}
//app wrap
const BlogApp = () => {
  const [allImgsOnShow, setImgsOnShow] = useState(true)
  const [spinnerIsShowing, setSpinnerIsShowing] = useState(true)
  useEffect(() => {
    /*if(allImgsOnShow && spinnerIsShowing){
      removeSpinnerLoader()
      setSpinnerIsShowing(false)
    }*/
  }, []);
  return ( 
    <div id='childRoot'>
      {
        allImgsOnShow ? <MainContainer /> : !spinnerIsShowing ? <SpinnerLoader /> : null
      }
    </div>    
  )  
}

export default BlogApp;
