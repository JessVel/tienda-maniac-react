import React from 'react';
import img1 from '../images/carousel1.jpg';
import img2 from '../images/carousel2.jpg';
import img3 from '../images/carousel3.jpg';
import Carousel from 'react-bootstrap/Carousel';


  const Carouselheader = () =>{

    return (
      <Carousel style={{paddingTop:"10px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}


  export default Carouselheader;