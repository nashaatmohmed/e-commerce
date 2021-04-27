import React from 'react';
import { useStateValue } from '../StateProvider';


function ScoopInfo({id, image, title,price, rating}) {

    const [{ basket}, dispatch] = useStateValue();


    const addToBasket = () =>{
    
        
        //dispatch the item into th data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }



    return (
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>
           
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    </div>
    )
}

export default ScoopInfo
