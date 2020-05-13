import React from 'react';
import NavigationBar from './components/NavigationBar';
import Carouselheader from './components/Carousel'
import Footer from './components/Footer';
import Sale from './components/Sale';
import LoMasVendido from './components/LoMasVendido';
import ListaProductos from './components/ListaProductos';
import Newsletter from './components/Newsletter';



function App() {
  return (
    <>
        <NavigationBar  
         />
        <Carouselheader />
        <LoMasVendido />
        <ListaProductos />
        <Newsletter />
        
        <Footer />
    </>
  );
}

export default App;
