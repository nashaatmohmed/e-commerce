import React from 'react';
import '../styles/main-styleCategory.css';
import '../styles/category.css';
import Slider from "react-slick";
import Product from '../componants/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainImage from '../img/tv/tvhead.jpg';
import So1 from '../img/tv/so1.jpg';
import So2 from '../img/tv/so2.jpg';
import So3 from '../img/tv/so3.jpg';
import So4 from '../img/tv/so4.jpg';
import So5 from '../img/tv/so5.jpg';
import So6 from '../img/tv/so6.jpg';
import So8 from '../img/tv/so1.jpg';
import So7 from '../img/tv/so7.jpg';
import L1 from '../img/tv/l1.jpg';
import L2 from '../img/tv/l2.jpg';
import L3 from '../img/tv/l3.jpg';
import L4 from '../img/tv/l4.jpg';
import L5 from '../img/tv/l5.jpg';
import L6 from '../img/tv/l6.jpg';
import L7 from '../img/tv/l2.jpg';
import L8 from '../img/tv/l8.jpg';
import S1 from '../img/tv/s1.jpg';
import S2 from '../img/tv/s2.jpg';
import S3 from '../img/tv/s3.jpg';
import S4 from '../img/tv/s4.jpg';
import S5 from '../img/tv/s5.jpg';
import S6 from '../img/tv/s6.jpg';
import S7 from '../img/tv/s7.jpg';
import S8 from '../img/tv/s8.jpg';




function Lcd() {

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
        pauseOnHover: true,
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
                <h2>sony</h2>
                <h3>sony</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="12312312121"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312314542"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So2}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123545412"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So3}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123243212"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231234523412"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So5}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231223423312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So6}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231224234312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So8}
                            rating={6}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267658312"
                            title="Dell core i"
                            discont={1499.99}
                            price={1299.99}
                            image={So7}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>lg</h2>
                <h3>lg</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="1231267856312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312123312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12312222312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12367812312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L4}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12393012312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L5}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123902112312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L6}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12301012312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L7}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123797912312"
                            title="Hp core i"
                            discont={1499.99}
                            price={1299.99}
                            image={L8}
                            rating={3}
                        />
                    </div>
                </Slider>
            </div>

            <div className="category__title contentBox__mainTitle ">
                <h2>samsoung</h2>
                <h3>samsoung</h3>
            </div>
            <div className="contentBox__slider">
                <Slider {...settings}>
                    <div className="product__slideShow">
                        <Product 
                            id="123123122131"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S1}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="12315453462312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S2}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231696942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S3}
                            rating={4}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1231328942312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S4}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123122029312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S5}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123121938312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S6}
                            rating={3}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="1212943312312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S7}
                            rating={5}
                        />
                    </div>
                    <div className="product__slideShow">
                        <Product 
                            id="123123039312"
                            title="makBook"
                            discont={1499.99}
                            price={1299.99}
                            image={S8}
                            rating={4}
                        />
                    </div>
                </Slider>
            </div>



           
           
        </div>
    )
}

export default Lcd