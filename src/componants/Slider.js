import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comp from '../img/comp.jpg';
import Game from '../img/gaming.jpg';
import Tech from '../img/technology.jpg';
import Tv from '../img/tv.png';
import '../styles/slider.css';


function Slider() {
    return (
      <Carousel>

        <Carousel.Item interval={2000} className="slider__item">
          <img
            className="d-block w-100"
            src={Comp}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000} className="slider__item">
          <img
            className="d-block w-100"
            src={Game}
            alt="Second slide"
          />
        </Carousel.Item> 

        <Carousel.Item interval={2000} className="slider__item">
          <img
            className="d-block w-100"
            src={Tech}
            alt="Third slide"
          />
      
        </Carousel.Item>

        
        <Carousel.Item interval={2000} className="slider__item">
          <img
            className="d-block w-100"
            src={Tv}
            alt="Third slide"
          />
      
        </Carousel.Item>
      </Carousel>
    )
}

export default Slider;
