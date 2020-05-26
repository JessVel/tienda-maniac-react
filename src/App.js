import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Carouselheader from './components/Carousel'
import Footer from './components/Footer';
import LoMasVendido from './components/LoMasVendido';
import ListaProductos from './components/ListaProductos';
import DetalleProducto from './components/DetalleProducto';
import About from './components/About';
import ProductSearch from './components/ProductSearch';
import NavBarMisPublicaciones from './components/NavBarMisPublicaciones';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App () {

  const [usuario, setUsuario] = useState(null);

  const onLoginSuccess = (loggedUser) =>{
    setUsuario(loggedUser);
  }

  const onLogout = () =>{
    let url = "http://localhost:8888/auth";

    fetch (url, {
                  method: "DELETE",
                  credentials: "include"
                }
    ).then( response => response.json()
    ).then( data =>{
                  setUsuario(null)
                  }
          )
  }

  const [admi, setAdmi] = useState(null);

  const onLoginAdmiSuccess = (loggedAdmi) =>{
    setAdmi(loggedAdmi);
  }

  const onLogoutAdmi = () =>{
    let url = "http://localhost:8888/auth";

    fetch (url, {
                  method: "DELETE",
                  credentials: "include"
                }
    ).then( response => response.json()
    ).then( data =>{
                  setAdmi(null)
                  }
          )
  }

  

  return (

<Router>    
        <NavigationBar  user={usuario}
                        administrador={admi}
                        handleLoginSucess={onLoginSuccess}
                        handleLogout={onLogout}
                        handleLogoutAdmi={onLogoutAdmi}
                        handleLoginAdmiSucess={onLoginAdmiSuccess}
                        
                        

/>
       

        <Switch>
          <Route exact path="/" children={
                                    <>
                                    <Carouselheader />
                                    <LoMasVendido />
        
                                    <About />
                                    
                                   
                                    </>           
                                  }
          />
          <Route exact path="/productos/:id" children={
                                             <DetalleProducto />

                                            }
          />
          { usuario &&
           <Route exact path="/micuenta" children={
                                             
                                                <DetalleProducto  user={usuario}
                                                                  administrador={admi}
                                                                  type="micuenta"
                                                />
                                                                }
        />}
    

         <Route exact path="/tienda" children={
                                              <>
                                             <ProductSearch/>
                                              <ListaProductos type="tienda"
                                                              
                                             />
                                             <DetalleProducto />
                                             </>

                                            }
          />
          { usuario &&
          <Route exact path="/micarrito" children={

                                            <>
                                              
                                              <ListaProductos  user={usuario}
                                                               type="micarrito"
                                              />
                                               </>
                                              }
          />
        }
         
      
        
         
 



         
        </Switch>

        
        <Footer />
</Router>
    
  );
}

export default App;
