import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import image1 from '../images/bi1.jpg';
import image2 from '../images/bi2.jpg';
import {Link} from 'react-router-dom';
import './sitio.css';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../images/outfit10.jpeg';
import imageTwo from '../images/outfit5.jpg';
import imageThree from '../images/outfit6.jpg';

import nube from '../images/nube.jpg';
import nube2 from '../images/nube2.jpg';
import nube3 from '../images/nube3.jpg';

import undraw from '../images/undraw.png';

import facebook from'../images/facebook.jpg';
import instagram from '../images/instagram.jpg';
import vimeo from '../images/vimeo.jpg';
import youtube from '../images/youtube.jpg';

const LoMasVendido = ()=>{
    return(
        <>
        <Container>
            <Row>
                <Col className="d-flex justify-content-center" style={{margin:"10px"}}>
                    <Link>
                        <img className="img-fluid column-img" src={image1}></img>
                    </Link>
                    <div className="centered">Shop Now</div>
                </Col>
                <Col className="d-flex justify-content-center" style={{margin:"10px"}}>
                    <Link>
                        <img className="img-fluid column-img" src={image2}></img>
                    </Link>
                    <div className="centered">Lookbook</div>
                </Col>
            </Row>
        </Container>
        <Container>
        <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Lo mas vendido</h1>
            <hr className="mt-2 mb-5"></hr>
                <Carousel
                            slidesPerPage={2}
                            arrows
                            infinite
                                >
                    <img src={imageOne} fgfdg/>
                    <img src={imageTwo} />
                    <img src={imageThree} />
                </Carousel>
        </Container>
        <Container style={{ marginTop: "30px"}}>
            <Row>
                <Col sm style={{ margin: "20px"}}>
                    <Link>
                    <img className="img-fluid thumb-img" src={nube}></img>
                    </Link>
                    <div className="thumb-text">Outlet</div>
                </Col>
                <Col sm style={{margin: "20px"}}>
                <Link>
                    <img className="img-fluid thumb-img" src={nube2}></img>
                    </Link>
                    <div className="thumb-text">Kawaii Edition</div>
                </Col>
                <Col sm style={{margin: "20px"}}>
                <Link>
                    <img className="img-fluid thumb-img" src={nube3}></img>
                </Link>
                <div className="thumb-text">Prensa</div>
                </Col>
            </Row>
        </Container>
       
        <Jumbotron className="jumbo">
        <Row>
          <Col>
            <h1>Nuestra calidad</h1>
            <p className="display-4 d-flex justify-content-center">
           Sabias que nuestras prendas están confeccionadas con el mejor algodón pima peruano?
            </p>
            <Button className="center" style={{marginTop:"50px"}} variant="outline-secondary">Conoce mas</Button>
        </Col>
        <Col>
        <img className="img-fluid" src={undraw}></img>
        </Col>
        </Row>
        </Jumbotron>
        <Container style={{ marginTop: "30px"}}>
            <Row>
                <Col sm style={{ margin: "20px"}}>
                    <Link>
                    <img className="img-fluid redes-img" src={facebook}></img>
                    </Link>
                   
                </Col>
                <Col sm style={{margin: "20px"}}>
                <Link>
                    <img className="img-fluid redes-img" src={instagram}></img>
                    </Link>
                   
                </Col>
                <Col sm style={{margin: "20px"}}>
                <Link>
                    <img className="img-fluid redes-img" src={vimeo}></img>
                </Link>
               
                </Col>
                <Col sm style={{margin: "20px"}}>
                <Link>
                    <img className="img-fluid redes-img" src={youtube}></img>
                </Link>
                
                </Col>
            </Row>
        </Container>
       
        </>
    )
}
export default LoMasVendido;