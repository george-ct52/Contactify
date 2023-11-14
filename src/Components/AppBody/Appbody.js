import Popup from '../PopUp/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "../AppBody/AppBody.css"
import OutPopup from '../PopUp/OutPopup';
import axios from "axios"
import { baseUrl } from '../constants/constants';
import EditPopup from '../PopUp/EditPopup';


function Appbody() {
    const [contact,setcontact] = useState([])
    const [content,setcontent] = useState({
      id:''
    })
    useEffect(
        ()=>{
        axios.get(`${baseUrl}`).then((response)=>{
            setcontact(response.data)
             }).catch((_error)=>{
              alert('Network Error')
             })
        },[]

    )
    const handleDelete = (id) => {
        axios.delete(`${baseUrl}delete/${id}/`)
            .then(
                response => {
                    console.log(response);
                    axios.get(`${baseUrl}`).then((response) => {
                        setcontact(response.data);
                    }).catch((_error) => {
                        alert('Network Error');
                    });
                }
            ).catch((_error) => {
                alert('Network Error');
            });
    }

    const [buttonpop,setbuttonpop] = useState(false)
    const [buttonpopout,setbuttonpopout] = useState(false)
    const [buttonpopedit,setbuttonpopedit] = useState(false)
  return (
    <div className='body1'>
         <main>
    <section className='body'>
 <Container>
         <Row className='align-items-center justify-content-center'>
            <h2 className='Header'>
             Contactify
            </h2>
            <Container className='second'>
             <Button className='contact' onClick={()=> setbuttonpop(true)} variant='light'>
               Add Contact
             </Button>
             <Button className='contact1' onClick={()=> setbuttonpopout(true)} variant='danger'>
               Sign Out
             </Button>
             </Container>
             <Col className='margin'>
             <div className="color">
             {
                    contact.map(
                        (obj)=>
                        <Col className='margin1'  key={obj.id}>
                        <div className="tile">
                          <div className="box"></div>
                          <div className="textbox">
                          <div className="text">
                          {`${obj.name}`}
                          </div >
                          <div className="text">
                          {`${obj.phone_number}`}
                          </div >
                          </div>
                          <div className="buttons">
                          <Button className='delete' variant=''>
                           <FontAwesomeIcon icon={faTrash} className='icon' onClick={()=> {handleDelete(obj.id)}}/>
                          </Button>
                          <Button className='edit' variant=''>
                          <FontAwesomeIcon icon={faEdit} className='icon'  onClick={() =>{ setbuttonpop(true) 
                            setbuttonpopedit(true)
                            setcontent({id:obj.id})
                            }}/>
                          </Button>
                          </div>
                        </div>
                      </Col>
                    )
                }
             </div>
                
             </Col>
         </Row>
    </Container>
</section>
    </main> 
<Popup trigger={buttonpop} setTrigger={setbuttonpop}/>
<EditPopup trigger={buttonpopedit} setTrigger={setbuttonpop} Contents={content} />
<OutPopup trigger={buttonpopout} setTrigger={setbuttonpopout}/>
    </div>

  )
}

export default Appbody
