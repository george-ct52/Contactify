import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Popup from './Components/PopUp/Popup';
import "../src/Components/AppBody/AppBody.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
function App() {
  const [buttonpop,setbuttonpop] = useState(false)
  const [heading,setheading] = useState('Add')
  return (
    
    <div className="App">
      <main>
      <section className='body'>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
   <Container>
           <Row className='align-items-center justify-content-center'>
              <h2 className='Header'>
               Contactify
              </h2>
              <Container className='second'>
               <Button className='contact' onClick={()=> setbuttonpop(true)} variant='light'>
                 Add Contact
               </Button>
               </Container>
               <Col className='margin'>
               <div className="color">
               <Col className='margin1'>
                    <div className="tile">
                      <div className="box"></div>
                      <div className="textbox">
                      <div className="text">
                       George CEC
                      </div >
                      </div>
                      <div className="buttons">
                      <Button className='delete' variant=''>
                       <FontAwesomeIcon icon={faTrash} className='icon'/>
                      </Button>
                      <Button className='edit' variant=''>
                      <FontAwesomeIcon icon={faEdit} className='icon'  onClick={() =>{ setbuttonpop(true) 
                        setheading('Edit')}}/>
                      </Button>
                      </div>
                    </div>
                  </Col>
                  <Col className='margin1'>
                    <div className="tile">
                      <div className="box"></div>
                      <div className="textbox">
                      <div className="text">
                       George CEC
                      </div >
                      </div>
                      <div className="buttons">
                      <Button className='delete' variant=''>
                       <FontAwesomeIcon icon={faTrash} className='icon' />
                      </Button>
                      <Button className='edit' variant=''>
                      <FontAwesomeIcon icon={faEdit} className='icon'  onClick={() =>{ setbuttonpop(true) 
                        setheading('Edit')}}/>
                      </Button>
                      </div>
                    </div>
                  </Col>
                  <Col className='margin1'>
                    <div className="tile">
                      <div className="box"></div>
                      <div className="textbox">
                      <div className="text">
                       George CEC
                      </div >
                      </div>
                      <div className="buttons">
                      <Button className='delete' variant=''>
                       <FontAwesomeIcon icon={faTrash} className='icon'/>
                      </Button>
                      <Button className='edit' variant='' onClick={() =>{ setbuttonpop(true) 
                        setheading('Edit')}}>
                      <FontAwesomeIcon icon={faEdit} className='icon'/>
                      </Button>
                      </div>
                    </div>
                  </Col>
               </div>
                  
               </Col>
           </Row>
      </Container>
  </section>
      </main> 
  <Popup trigger={buttonpop} setTrigger={setbuttonpop} Heading={heading}/>
    </div>
  
  )
}

export default App;
