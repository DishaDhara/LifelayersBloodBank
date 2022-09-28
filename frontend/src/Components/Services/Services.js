import React from 'react'
import ServiceJSON from './Service.json';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
export default function Services() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
    <div className='topic_container'>
      <div className='tname'><p>Services Provided By Us</p></div>
        
        <Container>
            <Row xs={1} md={2} >
                {ServiceJSON.Service.map((t)=>(
                  
                    <Col key={t.service_id} >
                    <Card  border="danger" style={{ width: '22rem' }} className='topic_card'>
                        <Card.Body>
                        <Card.Title><i><b>{t.service_name}</b></i></Card.Title>
                        <Link to={`/subtopic/${t.service_name}`}><Button variant="outline-warning">View More</Button>{' '}</Link>
                        </Card.Body>
                     </Card>
                    
                     </Col>
                    
            ))}
            </Row> 
         </Container>
               
    </div>
    </div>
  )
}
