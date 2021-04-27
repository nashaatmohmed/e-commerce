import React from 'react';
import '../styles/main-styleCategory.css';
import '../styles/category.css';
import Slider from "react-slick";
import Product from '../componants/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../img/mobile/mobileheader.gif';
import Sam1 from '../img/mobile/a10.jpg';
import Sam2 from '../img/mobile/a12.jpg';
import Sam3 from '../img/mobile/a21.jpg';
import Sam4 from '../img/mobile/a51.jpg';
import Sam5 from '../img/mobile/a31.jpg';
import Sam6 from '../img/mobile/a52.jpg';
import Sam7 from '../img/mobile/s20.jpg';
import Sam8 from '../img/mobile/note20.jpg';
import I1 from '../img/mobile/i8.jpg';
import I2 from '../img/mobile/i11.jpg';
import I3 from '../img/mobile/i12.jpg';
import I4 from '../img/mobile/i12pro.jpg';
import I5 from '../img/mobile/ipro.jpg';
import I6 from '../img/mobile/ixr.jpg';
import I7 from '../img/mobile/ixs.jpg';
import I8 from '../img/mobile/ixsmax.jpg';
import Y1 from '../img/mobile/nova7.jpg';
import Y2 from '../img/mobile/nova7i.jpg';
import Y3 from '../img/mobile/nova7se.jpg';
import Y4 from '../img/mobile/y5.jpg';
import Y5 from '../img/mobile/y7a.jpg';
import Y6 from '../img/mobile/y8p.jpg';
import Y7 from '../img/mobile/y9a.jpg';
import Y8 from '../img/mobile/y9s.jpg';




function Mobile() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return (
        <div className="contentBox">
            <div className="contentBox__mainImage">
                <img src={MainImage} alt="" style={{height:"200px"}}/>

            </div>
            <div className="category__title contentBox__mainTitle ">
                <h2>samsoung</h2>
                <h3>samsoung</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="12312312121"
                            title="galaxy a10"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312314542"
                            title="galaxy a12"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam2}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123545412"
                            title="galaxy a21"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam3}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123243212"
                            title="galaxy a51"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231234523412"
                            title="galaxy a31"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam5}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231223423312"
                            title="galaxy a52"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam6}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231224234312"
                            title="galaxy a20"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam7}
                            rating={6}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267658312"
                            title="galaxy note20"
                            discont={1499.99}
                            price={1299.99}
                            image={Sam8}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>iphone</h2>
                <h3>iphone</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267856312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312123312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312222312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12367812312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I4}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12393012312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I5}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123902112312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I6}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12301012312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I7}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123797912312"
                            title="iphone "
                            discont={1499.99}
                            price={1299.99}
                            image={I8}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>huawei</h2>
                <h3>huawei</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="123123122131"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12315453462312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231696942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231328942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123122029312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y5}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123121938312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y6}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1212943312312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y7}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123039312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Y8}
                            rating={4}
                        />
                    </div>
                </Slider>
            </div>



           
           
        </div>
    )
}

export default Mobile