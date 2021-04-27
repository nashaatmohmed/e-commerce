import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../styles/category.css';
import Item from "./Item";
import Laptop from '../img/apple.jfif';
import Mobile from '../img/mobilecat.gif';
import Tele from '../img/samsoung.jfif';
import Beats from '../img/beats.jfif';
import Acces from '../img/accessorise.jfif';
import Blender from '../img/blender.jpg';

import {Link} from 'react-router-dom';

function Category({tittle, shadow}) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

    return (
        <div className="category">
            <div className="category__title">
                <h2>{shadow}</h2>
                <h3>{tittle}</h3>
            </div>
            <div>
                <Carousel breakPoints={breakPoints}>

                    <Link to="/Labtop" >
                        <Item className="image">
                            <img src={Laptop} alt=""/>
                            <p>labtop</p>
                            <span>sale</span>
                        </Item>
                    </Link>
                    <Link to="/Mobile">
                        <Item>
                            <img src={Mobile} alt=""/>
                            <p>mobile</p>
                            <span>sale</span>

                        </Item>
                    </Link>
                    <Link to="/Lcd">
                        <Item>
                            <img src={Tele} alt=""/>
                            <p>LCD smart</p>
                            <span>sale</span>

                        </Item>
                    </Link>
                    <Link to="/Beats">
                        <Item>
                            <img src={Beats} alt=""/>
                            <p>beats</p>
                            <span>sale</span>

                        </Item>
                    </Link>
                    <Link to="/Acces">
                        <Item>
                            <img src={Acces} alt=""/>
                            <p>accessories</p>
                            <span>sale</span>

                        </Item>
                    </Link>
                    <Link to="/HomeTec">
                        <Item>
                            <img src={Blender}/>
                            <p>home-tech</p>
                            <span>sale</span>

                        </Item>
                    </Link>
                    
                    
                </Carousel>
            </div>
            
        </div>
    )
}

export default Category;
