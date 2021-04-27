import React, { useEffect } from 'react';
import './App.css';
import Header from './componants/Header';
import Home from './componants/Home';
import Login from './componants/Login';
import Checkout from './componants/Checkout';
import Labtop from './componants/Labtop';
import Mobile from './componants/Mobile';
import Lcd from './componants/Lcd';
import Beats from './componants/Beats';
import Acces from './componants/Acces';
import HomeTec from './componants/HomeTec';
import Footer from './componants/Footer';
import Scoop from './componants/Scoop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() =>{
      // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })


      } else {

        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null
        })


      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
   
        <Switch>
          <Route path="/checkout" >  
            <Header/>       
            <Checkout/> 
            <Footer/>         
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/Labtop">
          <Header/> 
          <Labtop />
          <Footer/>
          </Route>
          <Route path="/Mobile">
          <Header/> 
          <Mobile />
          <Footer/>
          </Route>
          <Route path="/Lcd">
          <Header/> 
          <Lcd />
          <Footer/>
          </Route>
          <Route path="/Beats">
          <Header/> 
          <Beats />
          <Footer/>
          </Route>
          <Route path="/Acces">
          <Header/> 
          <Acces />
          <Footer/>
          </Route>
          <Route path="/HomeTec">
          <Header/> 
          <HomeTec />
          <Footer/>
          </Route>

           <Route path="/Scoop" > 
            <Header/>
            <Scoop/>        
            
            
          </Route> 

          <Route path="/" > 
            <Header/>          
            <Home/>
            <Footer/>
          </Route> 
                
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
