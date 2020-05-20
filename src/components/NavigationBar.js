import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';
import {Link} from 'react-router-dom';
import LoginAdmiModal from './LoginAdmiModal'


const NavigationBar = (props) => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const handleHideLoginModal = () =>{
    setShowLoginModal(false);
  }

  const handleShowLoginModal = () =>{
    setShowLoginModal(true);
}

const [showLoginAdmiModal, setShowLoginAdmiModal] = useState(false);
  
  const handleHideLoginAdmiModal = () =>{
    setShowLoginAdmiModal(false);
  }

  const handleShowLoginAdmiModal = () =>{
    setShowLoginAdmiModal(true);
}




    return(
<>
    <Navbar className="sticky-top" style={{backgroundColor: "rgba(236, 181, 203, 0.911)", textTransform: "uppercase", position: "fix"}}  expand="lg">

    <Navbar.Brand>
       <Link to="/" className="navabar-brand"> <img style={{height: "100px"}} src={logo}></img> </Link>
    </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
   
      <Link to="/tienda" className="nav-link" >Tienda</Link>
      <Link to="/comocomprar" className="nav-link" >Como comprar</Link>
      <Link to="/locales" className="nav-link" >Locales</Link>
      <Link to="/contacto" className="nav-link" >Contacto</Link>
      </Nav>
        <Nav className="ml-auto" >
        { !props.user 
        ?
          
          <>
        <Button style={{borderRadius:0, marginTop:"2px", marginBottom:"2px"}} variant="outline-secondary" onClick={ handleShowLoginModal } >Iniciar sesión</Button>
        <Button style={{borderRadius:0, marginTop:"2px", marginBottom:"2px"}} variant="secondary" onClick={  handleShowLoginAdmiModal }>Soy administrador</Button>
        </>

        :
       <>
        <Link to="/micarrito" className="nav-link"><i className="fa fa-shopping-cart"></i> Mi carrito</Link>
      <NavDropdown alignRight title="Dropdown" id="basic-nav-dropdown"  title={props.user.nombre}>
        <Link to="/micuenta" className="nav-link">Mi cuenta</Link>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={props.handleLogout}> Cerrar sesión</NavDropdown.Item>
      </NavDropdown>
      </>
    }
        
      </Nav>
  </Navbar.Collapse>
</Navbar>
<LoginModal show={ showLoginModal } 
            handleHide={ handleHideLoginModal } 
            handleLoginSucess={props.handleLoginSucess}
/>
<LoginAdmiModal show={ showLoginAdmiModal }
                handleHideAdmi={ handleHideLoginAdmiModal }
                handleLoginAdmiSucess={ props.handleLoginAdmiSucess}

/>

</>
    )
}
export default NavigationBar;