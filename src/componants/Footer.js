import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/footer.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className="footer">

      
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <h3>Category</h3>
                        <ul>
                            <li>
                                <Link to="/Labtop" >
                                    
                                        
                                        <p>labtop</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Mobile" >
                                    
                                        
                                        <p>Mobile</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Lcd" >
                                    
                                        
                                        <p>Lcd</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Beats" >
                                    
                                        
                                        <p>Beats</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Acces" >
                                    
                                        
                                        <p>accessories</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/HomeTec" >
                                    
                                        
                                        <p>home-tech</p>
                                        
                                
                                </Link>
                            </li>

                        </ul>
                    
                    
                    </Col>
                    <Col lg={4} md={6}>
                        <h3>support</h3>
                        <ul>
                            <li>
                                <Link to="/Home" >
                                    
                                        
                                        <p>Home</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login" >
                                    
                                        
                                        <p>Log in</p>
                                        
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/Checkout" >
                                    
                                        
                                        <p>Cart</p>
                                        
                                
                                </Link>
                            </li>
                        

                        </ul>
                        


                    
                    
                    </Col>
                    <Col lg={4} md={6}>
                        <h3>social media</h3>

                        <div className="socialMedia">
                            <Link to="/">
                                <FacebookIcon className="icons one"/>
                            </Link>

                            <Link to="/">
                                <WhatsAppIcon className="icons two"/>
                            </Link>

                            <Link to="/">
                                <InstagramIcon className="icons three"/>
                            </Link>

                        </div>

                       

                        
                    
                    
                    </Col>
                </Row>
                
            </Container>
            <div className="creator">

                <span className="credit">Created By M.NASHAAT
                </span>
                <CopyrightIcon className="icon"/>
                <span className="far fa-copyright"> 2021 All rights reserved.</span>

            </div>
            
        </div>

       
    )
}

export default Footer
