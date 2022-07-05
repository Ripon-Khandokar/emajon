import React from 'react';
import ProductStyle from './Product.css';
import ShopIcon from "../../shop-icon.png";

const Product = (props) => {

    const { name, img, price, seller, stock, } = props.product;
    // console.log(props)

    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h2 className='product-name'>{name}</h2>
                <p>By:{seller}</p>
                <p> $ {price}</p>
                <p>only {stock} lect in stock - order soon</p>
                <button onClick={()=> props.handleClick(props.product)}> <img src={ShopIcon}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;