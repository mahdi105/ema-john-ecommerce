import React from 'react';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let subTotal = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        shipping = shipping + product.shipping;
        subTotal = subTotal + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = subTotal * (4/100);
    const total = subTotal + shipping + tax;
    return (
        <>
            <h2 className='text-2xl font-bold uppercase'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Sub-Total Price: ${subTotal.toFixed(2)}</p>
            <p>Shipping Cost: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Total Price: ${total.toFixed(2)}</h2>
        </>
    );
};

export default Cart;