import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import TarjetaProducto from './TarjetaProducto';
import NavBarMisPublicaciones from './NavBarMisPublicaciones'



const ListaProductos = (props)=>{

  const [ productos, setProductos ] = useState([]) //crear una variable de estado que inicialmente este vacia
        //productos es la variable del estado y es un array vacio // setproductos es una funcion que setea el valor de productos   

        let endpoint = 'productos';

 
      useEffect( ()=>{
        fetch(`http://localhost:8888/${endpoint}`).then(
            response => response.json()
        ).then(
            data => {
                setProductos(data)
            }
        )
   }, []
)

             
              
   return(

<>

    
    
    <Row className="m-4">

      {
        productos.map(producto => {
                  return(
                    
                            <TarjetaProducto title={producto.nombre}
                                             id={producto.id}
                                             imagen={producto.imagen}
                                             precio={producto.precio} 
                                             type={props.type}                       
                            />
                          )
                                   })
      }
         
    </Row>
  </>
 );
  
}

export default ListaProductos;