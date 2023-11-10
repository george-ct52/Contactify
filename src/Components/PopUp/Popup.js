import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col>
                       <h1 className='add'>{props.Heading} Contact</h1>
                        <div className="contents">
                            <form name="sent" id="contactForm" noValidate>
                                <div className="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder='Enter Name'
                                    />
                                </div>
                                <div className="control-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder='Enter Phone Number'
                                    />
                                </div>
                                <div className='hello'>
                                    <Button className="btn" type="" id="sendMessageButton" >
                                        save
                                    </Button>
                                    <Button className="btn" type="" id="sendMessageButton" >
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
