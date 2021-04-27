import React from 'react';
import '../styles/Home.css';
import Slider from '../componants/Slider';
import BestOffer from './BestOffer';
import Category from './Category';
import Sponser from './Sponser';




function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <Slider/>
            </div>
            <div className="category__website">
                <Category tittle = "category" shadow = "category" />

            </div>
            <div className="best-offer__section mr-3">
                <BestOffer tittle = "offer" shadow = "Best"/>

            </div>

            <div className="sponser-section">
                <Sponser />
            </div>
           
        </div>
    )
}

export default Home
