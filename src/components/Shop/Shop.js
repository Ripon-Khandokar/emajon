import React, { useEffect, useState } from 'react';
import  './Shop.css';
import Products from '../../products.json'

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
Products.sort((a,b)=> 0.5-Math.random())

const Shop = () => {
    const first10 = Products.slice(0,10);
    const [cart , setCart] = useState([]);

    const handleClick = (product) => {
        console.log("Product added" ,product)
        const newCart = [...cart , product]
        setCart(newCart)
    }
    console.log(cart);
    return (
       <div className="Shop">
            <div className='Shop-container'>
                {
                    first10.map(product => <Product 
                        // handlerClick={handlerClick}
                        handleClick ={handleClick}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
            
                </Cart>

            </div>
       </div>

      
    );
};

export default Shop;