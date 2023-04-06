import React, { useState } from 'react';
import Cart from '../Shop/Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { CreditCardIcon } from '@heroicons/react/24/solid';

const Orders = () => {
    const loadCart = useLoaderData();
    const savedCart = loadCart.cart;
    const [cart, setCart] = useState(savedCart);
    const handleRemoveCartItem = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        removeFromDb(id);
        setCart(newCart);
    }
    const handleClearCart = () => {
        setCart([]);//Current cart view = Cart Empty
        localStorage.removeItem('shopping-cart');//After Loading Cart View = Cart Empty

    }

    return (
        <div className='container p-20 mx-auto grid grid-cols-5'>
            <div className='col-span-3 products grid grid-cols-1 gap-5'>
                {
                    cart.map(product => <ReviewItem handleRemoveCartItem={handleRemoveCartItem} key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className='rounded-md col-span-2 bg-yellow-200 py-6 px-10'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to='/checkout'>
                        <div className='flex justify-between items-center'>
                            <span className='text-white font-semibold'>Proceed Checkout</span>
                            <CreditCardIcon className="h-5 w-5 text-slate-100" />
                        </div>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;