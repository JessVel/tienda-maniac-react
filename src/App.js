import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Carouselheader from './components/Carousel'
import Footer from './components/Footer';
import LoMasVendido from './components/LoMasVendido';
import ListaProductos from './components/ListaProductos';
import DetalleProducto from './components/DetalleProducto';
import About from './components/About';
import ProductSearch from './components/ProductSearch';

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

  const [administrador, setAdministrador] = useState(null);

  const onLoginAdmiSuccess = (loggedAdmi) =>{
    setAdministrador(loggedAdmi);
  }

  

  return (

<Router>    
        <NavigationBar  user={usuario}
                        administrador={administrador}
                        handleLoginSucess={onLoginSuccess}
                        handleLogout={onLogout}
                        handleLoginAdmiSucess={onLoginAdmiSuccess}
                        

/>
       

        <Switch>
          <Route exact path="/" children={
                                    <>
                                    <Carouselheader />
                                    <LoMasVendido />
                                    <ListaProductos />
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
                              administrador={administrador}
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
         
 
}
/>

         
        </Switch>

        
        <Footer />
</Router>
    
  );
}

export default App;
