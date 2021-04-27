import React, { useState } from 'react';
import '../styles/login.css';
import Cart from '../img/fly.jpg';
import {Link, useHistory} from 'react-router-dom';
import Particles from 'react-particles-js';
import { auth } from '../firebase';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login container">
            <div className="row">
                    <div className="login__title col-lg-6 col-md-12">
                        <h1 className="login__mainTitle">
                            welcome to fly online market
                        </h1>
                        <h2 className="login__typed">
                            
                            <Typed 
                            className="work"
                            strings={["create your account and take your gift"]}
                            typeSpeed = {50}
                            backSpeed = {50}
                            loop
                           
                            /> 

                          
                         
                        </h2>
                      
                         
                    </div>

            
         
            
                    <div className="login__container col-lg-6 col-md-12">
                        <Link to="/">
                            <img
                                className="login__logo"
                                src={Cart} 
                                alt="logo"
                            />
                        </Link>
                            
                            <form>
                                <h5>E-mail</h5>
                                <input type="text" value={email} onChange={
                                    e => setEmail(e.target.value)
                                }/>

                                <h5>Password</h5>
                                <input type="password" value={password} onChange={
                                    e => setPassword(e.target.value)
                                } />
                                
                                <button type="submit" onClick={signIn}  
                                    className='login__signInButton'>Sign In
                                </button>
                            </form>
                            <p>
                                By signing-in you agree to the Privacy Notice of Market & Sale. Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                            </p>

                            <button onClick={register} 
                            className='login__registerButton'>Create your Account</button>
                    </div>


                    

            </div> 

                      <Particles 
                        params={{
                            particles:{
                            line_linked: {
                                shadow: {
                                enable: true,
                                color: "#2e344e",
                                blur: 5
                                }
                            },
                            number:{
                                value:30,
                                density:{
                                enable:false,
                                value_area:900
                                }
                            }
                            }
                        }}      
                        /> 
            
            
            
        </div>
    )
}

export default Login;

