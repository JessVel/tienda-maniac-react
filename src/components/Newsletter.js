import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Newsletter = ()=>{
    return(


<Jumbotron fluid>
    <Container>
        <Form>
            <h2 class="display-4 text-center">NEWSLETTER</h2>
            <h5 class="lead text-center">Subscribite a nuestro newsletter y recibí todas nuestras promociones!</h5>
            <Form.Row>
            <Col>
            <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            </Col>
                <Col xs lg="2">
            <Button variant="secondary" type="submit" style={{borderRadius:0}}>Suscribirse ahora</Button>
            </Col>
            </Form.Row>
        </Form>
  </Container>
</Jumbotron>


)
}

export default Newsletter;