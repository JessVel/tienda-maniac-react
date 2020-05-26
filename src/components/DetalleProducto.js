import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './detalleProducto.css';

export default (props)=>{

    let [producto, setProducto] = useState(null);

    let { id } = useParams();

   
    useEffect(
        
        ()=>{

            fetch('http://localhost:8888/productos/' + id).then(
                response => response.json()
            ).then( data => {
                setProducto(data);
                console.log(data)
            })
        }, []

    )

    return(

        producto &&
        
        <Container fluid>
            <Breadcrumb className="breadcrumb" style={{backgroundColor:"transparent"}}>
            <Link to="/" className="breadcrumb-item">Home</Link>
            <Link to="/tienda" className="breadcrumb-item">Tienda</Link>
            <Link to="/detalleproducto" className="breadcrumb-item">Detalle</Link>
            </Breadcrumb>
        <Row>
          <Col  md={8} > 
         <div className="coso">
          <img src={producto.imagen}  className=" thumbnail img-thumbnail rounded mx-auto d-block" style={{padding:"10px"}}/>
          </div>
          </Col>

          <Col md={4}>
              <Row>
                    <h3 className="display-4">{producto.nombre}</h3>
                   
                    <p className="text-left" style={{padding:"15px", backgroundColor:"#f7f5f5", fontWeight: "bold", borderLeft:"8px solid #ff0080", borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px,", color:"#a2a2a2" }}>{producto.descripcion}</p>
                    <h6 className="display-4">${producto.precio}</h6>

              </Row>
               <Button variant="dark" style={{borderRadius:"0px"}}>Agregar al carrito</Button>
          </Col>
        </Row>
      
      </Container>



       
           
    )
    
}