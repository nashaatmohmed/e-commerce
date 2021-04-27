import React from 'react';
import '../styles/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            
            renderText={(value) =>(
                <>
                <p className="count">
                    Subtotal : <b>
                    {basket?.length} items
                               </b>
                    
                </p>

                <p>
                    total price :<strong>{value}</strong> 
                </p>
                <p ClassName="subtotal__gift">
                    <input type="checkbox" style={{marginRight:"5px"}}/>
                    this order contains a gift
                </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thausandSeparator={true}
            prefix={"$"}
            />
            <button>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
