import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';

const NavigationBar = () => {

    return(

    <Navbar className="sticky-top" style={{backgroundColor: "rgba(236, 181, 203, 0.911)", textTransform: "uppercase", position: "fix"}}  expand="lg">

    <Navbar.Brand href="#home">
        <a><img style={{height: "100px"}} src={logo}></img></a>
    </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#link">Tienda</Nav.Link>
      <Nav.Link href="#link">Como comprar</Nav.Link>
      <Nav.Link href="#link">Locales</Nav.Link>
      <Nav.Link href="#link">Contacto</Nav.Link>
      </Nav>
        <Nav className="ml-auto" >
        <Nav.Link href="#link" className="ml-auto"><i className="fa fa-shopping-cart"></i> Mi carrito</Nav.Link>
      <NavDropdown alignRight title="Dropdown" id="basic-nav-dropdown"  title="Jesica">
        <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
      </NavDropdown>
      </Nav>
   

   
  </Navbar.Collapse>
</Navbar>
    )
}
export default NavigationBar;