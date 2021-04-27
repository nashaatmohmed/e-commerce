import React from 'react';
import { useStateValue } from '../StateProvider';
import '../styles/checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user},dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__img">
                <img
                    className="checkout__ad"
                    src="https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80/fetchdata16/images/89/56/ef/8956efcffd655c014445f44d132faeb0b1d9080a9e716932df46fd98011be959.jpg"
                    alt="ads"
                />
                    {/* text image here */}
            </div>

            <div className="chekout__content">
                <div className="checkout__left">
                        <h3>hello {user?.email}</h3>
                        <h2 className="checkout__title">
                        Your Shopping Basket
                        </h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            discont={item.discont}
                            rating={item.rating}
                            />
                        ))}

                        
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                    
                </div>
            </div>

        </div>
    )
}

export default Checkout;
