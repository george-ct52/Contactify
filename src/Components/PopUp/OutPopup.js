import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./OutPopup.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authBaseUrl } from '../constants/constants';

function OutPopup(props) {
    const navigate = useNavigate();

    const handleSignUp = () => {
        axios.post(`${authBaseUrl}logout`).then(result => {
            console.log(result.data)
            alert('sign out success')
            window.localStorage.removeItem("userLoggedIn")
            window.localStorage.removeItem("token")
            navigate('/');
          })
            .catch(error => {
              alert('service error')
              console.log(error)
            })
    };
    return (props.trigger) ? (
        <div className='outpopup'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col>
                        <div className="contents">
                               <h2 className='get'>
                                Are you sure you want to sign out
                               </h2>
                                <div className='hello'>
                                    <Button className="btn" type="" id="sendMessageButton" onClick={handleSignUp}>
                                        yes
                                    </Button>
                                    <Button className="btn" type="" id="sendMessageButton" onClick={()=>props.setTrigger(false)}>
                                        no
                                    </Button>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ) : "";
  
}

export default OutPopup
