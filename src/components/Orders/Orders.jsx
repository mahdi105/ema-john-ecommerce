import React, { useState } from 'react';
import Cart from '../Shop/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const loadCart = useLoaderData();
    const savedCart = loadCart.cart;
    const [cart,setCart] = useState(savedCart);
    const handleRemoveCartItem = (id) =>{
        const newCart = cart.filter(product => product.id !== id);
        removeFromDb(id);
        setCart(newCart);
    }

    return (
        <div className='container p-20 mx-auto grid grid-cols-5'>
           <div className='col-span-3 products grid grid-cols-1 gap-5'>
                {
                    cart.map(product=> <ReviewItem handleRemoveCartItem={handleRemoveCartItem} key={product.id} product={product}></ReviewItem>)
                }
           </div>
           <div className='rounded-md col-span-2 bg-yellow-200 py-6 px-10'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;