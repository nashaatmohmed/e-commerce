import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/sponser.css";
import Samsung from "../img/sponser/Samsung_Logoo.png";
import Lg from "../img/sponser/lg-logo.png";
import Apple from "../img/sponser/Apple_logo.svg";
import Philips from "../img/sponser/Philips-Logo.wine.svg";
import Toshiba from "../img/sponser/toshiba.png" ;


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="sponser">
           
            <Slider {...settings}>
                <div>
                    <img src={Samsung} alt="" />
                </div>
                <div>
                <img src={Lg} alt="" />
                </div>
                <div>
                <img src={Apple} alt="" />
                </div>
                <div>
                <img src={Philips} alt="" />
                </div>
                <div>
                    <img src={Toshiba} alt="" />
                </div>
                <div>
                <img src={Samsung} alt="" />
                </div>
                <div>
                <img src={Samsung} alt="" />
                </div>
                <div>
                <img src={Samsung} alt="" />
                </div>
            </Slider>
        </div>
    );
  }
}