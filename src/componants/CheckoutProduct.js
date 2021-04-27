import React from 'react';
import { useStateValue } from '../StateProvider';
import '../styles/checkoutProduct.css';

function CheckoutProduct({id, image, title,price,discont, rating}) {

    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
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

                <p className="checkoutProduct__discont">
                    <small>$</small>
                    <strong>{discont}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            
                    <h4 onClick={removeFromBasket}>Remove</h4>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
