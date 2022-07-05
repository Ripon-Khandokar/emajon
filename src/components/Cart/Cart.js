import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let price = null ;
    let shiping = null;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        console.log(product);
        price += product.price;
        if(price>50){
            shiping = 5;

        }else if(price>20){
            shiping = 7;
        }else if(price ===0){
            shiping = 0;
        }
    }
    let tax = price/10;
    return (
        <div>
            <h2>Order Summery{cart.length}</h2>
            <p> Price : ${price}</p>
            <p> shiping : ${shiping}</p>
            <p>Tax + Vat : ${tax}</p>
            <h4>Order Total $ {price + shiping + tax}</h4>
        </div>
    );
};

export default Cart;