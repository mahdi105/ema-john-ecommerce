import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart;
    // const {cart} = props;
    let subTotal = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        shipping = shipping + product.shipping;
        subTotal = subTotal + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = subTotal * (4 / 100);
    const total = subTotal + shipping + tax;
    return (
        <>
            <h2 className='text-2xl font-bold uppercase'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Sub-Total Price: ${subTotal.toFixed(2)}</p>
            <p>Shipping Cost: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2 className='mb-4'>Total Price: ${total.toFixed(2)}</h2>
            <button onClick={handleClearCart} className='mb-3 bg-red-500 hover:bg-red-600 w-full flex justify-between items-center px-3 py-2 rounded-sm'>
                <span className='text-white font-bold'>Clear Cart</span>
                <TrashIcon className="h-5 w-5 text-slate-100" />
            </button>
            <button className='bg-[#FF9900] hover:bg-[#D37F00] w-full px-3 py-2 rounded-sm'>
                {children}
            </button>

        </>
    );
};

export default Cart;