import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./Popup.css"
import axios from 'axios';
import { baseUrl } from '../constants/constants';


function Popup(props) {
    const [create,setcreate] = useState(
        {
            name:'',
            phone_number:''
        }
    )
   
    
        const handlesubmit = (event) => {
            event.preventDefault();
            axios.post(`${baseUrl}create/`,create)
            .then(
                response => {
                    console.log(response)
                    props.setTrigger(false)
                }
            ).catch((_error)=>{
                alert('Network Error')
               })
        }
    
   
   
    return (props.trigger) ? (
        <div className='popup'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col>
                       <h1 className='add'>Add Contact</h1>
                        <div className="contents">
                            <form name="sent" id="contactForm" noValidate>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder='Enter Name'
                                        onChange={e => setcreate({
                                            ...create, name:e.target.value
                                        })}
                                    />
                                </div>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="number"
                                        placeholder='Enter Phone Number'
                                        onChange={e => setcreate({
                                            ...create, phone_number:e.target.value
                                        })}
                                    />
                                </div>
                                <div className='hello'>
                                    <Button className="btn" type="" id="sendMessageButton" onClick={handlesubmit}>
                                        save
                                    </Button>
                                    <Button className="btn" type="" id="sendMessageButton" onClick={()=> props.setTrigger(false)}>
                                        close
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ) : "";
}

export default Popup