import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import iconoNoFavorito from '../images/no-favorito.png';
import {Link} from 'react-router-dom';


export default (props)=>


<Col md={6} lg={4} xl={3} className="mb-4 text-center d-flex align-items-stretch justify-content-center" >
    <Card>
        <Card.Body>

            { props.type === "tienda" &&
             <a className="nav-link p-0 text-right" href="#">
             <img src={iconoNoFavorito}></img>
             </a>
             }
            
            <Link to={"/productos/" + props.id} className="nav-link p-0 mt-3">
            <Card.Title style={{fontSize:"1rem", textDecoration:"none", color: "black"}} className="mb-5">
            {props.title}
            </Card.Title>
            <img src={props.imagen} className="card-img-top img-thumbnail"></img>   
            </Link>

        </Card.Body>
        <Card.Footer>
            <p><small className="text-muted">{props.precio}</small></p>
        </Card.Footer>

       
    </Card>
</Col>
