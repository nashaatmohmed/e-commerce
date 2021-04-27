import React from 'react';
import '../styles/bestOffer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../componants/Product';
import Play from '../img/prouduct/playstation5.png';
import Mobile from '../img/prouduct/mobile1.jpg';
import Lab from '../img/prouduct/laptop1.jpg';
import Smart from '../img/prouduct/smartwatch.jpg';
import Sub from '../img/prouduct/subover.jpg';
import Vr from '../img/prouduct/vrbox.jpg';
import Blender from '../img/prouduct/handblender.jpg';
import Cinema from '../img/prouduct/homecinma.jpg';
import Apple from '../img/prouduct/applewatch.jpg';
import Head from '../img/prouduct/wirelesshead.jpg';
import Projector from '../img/prouduct/wirelesspro.jpg';
import Coffee from '../img/prouduct/coffeemac.jpg';


function BestOffer({tittle, shadow}) {
    return (
        <div className="best-offer">
            <div className="best-offer__title">
                <h2>{shadow}</h2>
                <h3>{tittle}</h3>
            </div>
           <Container fluid>
                <Row sm={6}>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="46485759"
                            title="Play staion 5"
                            discont={1199.99}
                            price={999.99}
                            image={Play}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="42974987239"
                            title="Samsoung A21"
                            discont={299.99}
                            price={249.99}
                            image={Mobile}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="46485759"
                            title="Labtop core i7"
                            discont={1999.99}
                            price={1699.99}
                            image={Lab}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="46485759"
                            title="smart Watch"
                            discont={299.99}
                            price={249.99}
                            image={Smart}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="46485759"
                            title="Sub Over 1400W"
                            discont={49.99}
                            price={29.99}
                            image={Sub}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row" >
                        <Product 
                            id="46485759"
                            title="Vr box 3D"
                            discont={29.99}
                            price={19.99}
                            image={Vr}
                            rating={3}
                          
                        />
                    </Col>
                </Row>
                <Row sm={6} className="mt-5">
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="7987987"
                            title="hand blender"
                            discont={699.99}
                            price={499.99}
                            image={Blender}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="12312312"
                            title="home cinema"
                            discont={1499.99}
                            price={1299.99}
                            image={Cinema}
                            rating={2}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="659804385"
                            title="apple watch"
                            discont={549.99}
                            price={499.99}
                            image={Apple}
                            rating={5}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="456547890"
                            title="wireless headphone"
                            discont={299.99}
                            price={249.99}
                            image={Head}
                            rating={3}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row">
                        <Product 
                            id="13180964"
                            title="wireless projector"
                            discont={799.99}
                            price={549.99}
                            image={Projector}
                            rating={4}
                        />
                    </Col>
                    <Col lg={2} md={4} sm={6} className="offer__row" >
                        <Product 
                            id="46485759"
                            title="coffee machine"
                            discont={129.99}
                            price={99.99}
                            image={Coffee}
                            rating={5}
                           
                        />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default BestOffer;
