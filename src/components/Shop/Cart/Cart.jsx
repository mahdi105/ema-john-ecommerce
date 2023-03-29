import React from 'react';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let subTotal = 0;
    let shipping = 0;
    for(const product of cart){
        console.log(product);
        shipping = shipping + product.shipping;
        subTotal = subTotal + product.price;
    }
    const tax = subTotal * (4/100);
    const total = subTotal + shipping + tax;
    return (
        <div className='bg-yellow-200 col-span-1 py-6 px-5'>
            <h2 className='text-2xl font-bold uppercase'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Sub-Total Price: ${subTotal.toFixed(2)}</p>
            <p>Shipping Cost: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Total Price: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;