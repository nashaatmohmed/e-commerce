import React from 'react';
import { useStateValue } from '../StateProvider';
import '../styles/product.css';
import {Link} from 'react-router-dom';



function Product({id, title, image, price, discont, rating}) {
    
    
    const [{basket,addPro},dispatch] = useStateValue();

    // const addProduct = () =>{
    
        
    //     //dispatch the item into th data layer
    //     dispatch({
    //         type: 'ADD_PRODUCT',
    //         item:{
    //             id:id,
    //             title:title,
    //             image:image,
    //             price:price,
    //             rating:rating,
    //         },
    //     });
    // } 
    
    
    
    const addToBasket = () =>{
    
        
        //dispatch the item into th data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                discont:discont,
                rating:rating,
            },
        });
    }

    return (

       
      
            <div className="product">
               
                    <div className="product__info">
                        <div className="product__infoImage">
                        
                            <img 
                            src={image} 
                            alt=""
                            />
                        
                        </div>
                        
                       
                        <h3>{title}</h3>
                       
                        
                       

                        <div className="product__rating">
                            {Array(rating )
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p> 
                            ))}
                        
                        
                        </div>
                    
                        <p className="product__price">
                            <div className="product__true__price">
                                <small>$</small>
                                <strong>{price}</strong>
                            </div>   

                            <div className="product__discount">
                                <small>$</small>
                                <strong>{discont}</strong>
                            </div>
                            

                        
                        </p>
                        
                    </div>
                    {/* <Link to="/Scoop"><button onClick={addProduct}>Add product</button> </Link> */}
                    
                <button onClick={addToBasket}>Add to cart</button>
                

            </div>
        
        
        
        
    )
}

export default Product;
