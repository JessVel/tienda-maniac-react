import React from 'react';
import NavigationBar from './components/NavigationBar';
import Carouselheader from './components/Carousel'
import Footer from './components/Footer';
import Sale from './components/Sale';
import LoMasVendido from './components/LoMasVendido';



function App() {
  return (
    <>
        <NavigationBar/>
        <Carouselheader/>
        <Sale/>
        <LoMasVendido/>
       
        
        <Footer/>
    </>
  );
}

export default App;
