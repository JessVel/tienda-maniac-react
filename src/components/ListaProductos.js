import React from 'react';
import Row from 'react-bootstrap/Row';
import TarjetaProducto from './TarjetaProducto';



const ListaProductos = ()=>{
   return(

    <Row>
      
      <TarjetaProducto title="Blazzer Rock" 
                       image="https://images.unsplash.com/photo-1535237232425-ef747e84d31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                       precio= "$500"

      />

      <TarjetaProducto  title="Blazzer Rock"
                        image="https://images.unsplash.com/photo-1560727749-cc261b23794c?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                        precio="$400"
      />

      <TarjetaProducto  title="Blazzer Rock"
                        image="https://images.unsplash.com/photo-1525722212921-6e4e548016db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        precio="$200"
      />

    </Row>
 );
  
}

export default ListaProductos;