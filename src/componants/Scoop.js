import React from 'react';
import { useStateValue } from '../StateProvider';

import ScoopInfo from './ScoopInfo';


function Scoop() {
    const [{basket},dispatch] = useStateValue();


    return (
        <div className="checkout">
         

            <div className="chekout__content">
                <div className="checkout__left">
                       
                        {basket.map(item => (
                            <ScoopInfo
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}

                        
                </div>
               
            </div>

        </div>
    )
}

export default Scoop;
