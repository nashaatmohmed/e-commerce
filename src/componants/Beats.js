import React from 'react';
import '../styles/main-styleCategory.css';
import '../styles/category.css';
import Slider from "react-slick";
import Product from '../componants/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../img/labtop/dell/headerpic.png';
import Dell1 from '../img/labtop/dell/dell1.jpg';
import Dell2 from '../img/labtop/dell/dell2.jpg';
import Dell3 from '../img/labtop/dell/dell3.jpg';
import Dell4 from '../img/labtop/dell/dell4.jpg';
import Dell5 from '../img/labtop/dell/dell5.jpg';
import Dell6 from '../img/labtop/dell/dell6.jpg';
import Dell7 from '../img/labtop/dell/dell7.jpg';
import Dell8 from '../img/labtop/dell/dell8.jpg';
import Hp1 from '../img/labtop/hp/hp1.jpg';
import Hp2 from '../img/labtop/hp/hp2.jpg';
import Hp3 from '../img/labtop/hp/hp3.jpg';
import Hp4 from '../img/labtop/hp/hp4.jpg';
import Hp5 from '../img/labtop/hp/hp5.jpg';
import Hp6 from '../img/labtop/hp/hp6.jpg';
import Hp7 from '../img/labtop/hp/hp7.jpg';
import Hp8 from '../img/labtop/hp/hp8.jpg';
import Apple1 from '../img/labtop/apple/apple1.jpg';
import Apple2 from '../img/labtop/apple/apple2.jpg';
import Apple3 from '../img/labtop/apple/apple3.jpg';
import Apple4 from '../img/labtop/apple/apple4.jpg';
import Apple5 from '../img/labtop/apple/apple5.jpg';
import Apple6 from '../img/labtop/apple/apple6.jpg';
import Apple7 from '../img/labtop/apple/apple7.jpg';
import Apple8 from '../img/labtop/apple/apple8.jpg';




function Beats() {

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
                <img src={MainImage} alt="" />

            </div>
            <div className="category__title contentBox__mainTitle ">
                <h2>dell</h2>
                <h3>dell</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="12312312121"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312314542"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell2}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123545412"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell3}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123243212"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231234523412"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell5}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231223423312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell6}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231224234312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell7}
                            rating={6}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267658312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Dell8}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>hp</h2>
                <h3>hp</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267856312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312123312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312222312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12367812312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp4}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12393012312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp5}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123902112312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp6}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12301012312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp7}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123797912312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={Hp8}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>apple</h2>
                <h3>apple</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="123123122131"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12315453462312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231696942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231328942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123122029312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple5}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123121938312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple6}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1212943312312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple7}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123039312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={Apple8}
                            rating={4}
                        />
                    </div>
                </Slider>
            </div>



           
           
        </div>
    )
}

export default Beats