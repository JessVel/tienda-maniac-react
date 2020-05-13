import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import visa from '../images/visa.jpg';
import amex from '../images/amex.jpg';
import correoArgentino from '../images/correo-argentino.jpg';
import mastercard from '../images/mastercard.jpg';
import mercadoPago from '../images/mercado-pago.jpg';
import pagoFacil from '../images/pagofacil.jpg';
import pin from '../images/pin.png';
import phone from '../images/phone.png';
import arroba from '../images/arroba.png';
import facebook from '../images/facebook-mini.png';
import instagram from '../images/instagram-mini.png';
import twitter from '../images/twitter-mini2.png';



const Footer = ()=>{
    return(
        <>
        <Container fluid style={{backgroundColor: "#d3d3d3"}} expand="lg">
            <Row>
            <Col style={{textTransform: "uppercase", fontFamily: "Verdana, Geneva, sans-serif"}} md={3}>
                <h6><small>Navegación</small></h6>
                <ul style={{listStyle:"none", paddingLeft:"0px", color:"black"}}>
                    <li><a href="#"><small>Inicio</small></a></li>
                    <li><a href="#"><small>Tienda</small></a></li>
                    <li><a href="#"><small>Como Comprar</small></a></li>
                    <li><a href="#"><small>Locales</small></a></li>
                    <li><a href="#"><small>Contacto</small></a></li>
                </ul>
            </Col>
            <Col style={{textTransform: "uppercase", fontFamily: "Verdana, Geneva, sans-serif"}} md={4}>
                <h6><small>medios de pago</small></h6>
                <img style={{height: "40px",padding: "5px"}} src={visa}></img>
                <img style={{height: "40px",padding: "5px"}} src={mastercard}></img>
                <img style={{height: "40px",padding: "5px"}} src={amex}></img>
                <img style={{height: "40px",padding: "5px"}} src={mercadoPago}></img>
                <img style={{height: "40px",padding: "5px"}} src={pagoFacil}></img>
                <h6><small>medios de pago</small></h6>
                <img style={{height: "40px",padding: "5px"}} src={correoArgentino}></img>
        
            </Col>
            <Col style={{textTransform: "uppercase", fontFamily: "Verdana, Geneva, sans-serif"}} md={3}>
                <h6><small>contactanos</small></h6>
                <ul style={{listStyle:"none", paddingLeft:"0px", color:"black"}}>
                    <li><img src={phone}></img><small>154564564</small></li>
                    <li><img src={arroba}></img><small>ventas@tiendamaniac.com</small></li>
                    <li><img src={pin}></img><small>Calle falsa 123 CABA - Pick up online</small></li>
                </ul>
            </Col>
            <Col style={{textTransform: "uppercase", fontFamily: "Verdana, Geneva, sans-serif"}} md={2}>
            <h6><small>redes sociales</small></h6>
            <a href="#"><img style={{padding: "5px"}} src={facebook}></img></a>
            <a href="#"><img style={{padding: "5px"}} src={instagram}></img></a>
            <a href="#"><img style={{padding: "5px"}} src={twitter}></img></a>

            </Col>
            </Row> 
        </Container>
         <Container fluid style={{backgroundColor: "black", color:"grey", fontFamily:"Lucida Console, Monaco, monospace"}} expand="lg">
         <Row>
         <Col><small className="d-flex justify-content-center">tienda maniac-2020. todos los derechos reservados. made with con ♥ by Jess-Vel</small></Col>
         </Row>
         </Container>
         </>
        

    )
}

export default Footer;