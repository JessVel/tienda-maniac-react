import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import nofavorito from '../images/no-favorito.png';


export default (props)=>


<Col md={6} lg={4} xl={4} className="mb-4 text-center d-flex align-items-stretch justify-content-center" >
    <Card>
        <Card.Body>
            <a className="nav-link p-0 text-right" href="#">
            <img src={nofavorito}></img>
            </a>
           
            <a className="nav-link p-0 mt-3" href="#">
            <Card.Title style={{fontSize:"1rem", textDecoration:"none", color: "black"}} className="mb-5">
            {props.title}
            </Card.Title>
            <img src={props.image} className="card-img-top img-thumbnail"></img>   
            </a>
        </Card.Body>
        <Card.Footer>
            <p><small className="text-muted">{props.precio}</small></p>
        </Card.Footer>
    </Card>
</Col>
