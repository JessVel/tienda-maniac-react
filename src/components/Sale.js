import React from 'react';
import descuento from '../images/descuento.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from'react-bootstrap/Image';

const Sale = ()=>{
    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                <a href="#">
                    <Image fluid style={{padding:"5px"}} className=" d-block" src={descuento}>
                    </Image>
                </a>
                </Col>
            </Row>

        </Container>
        </>

    )
}

export default Sale;