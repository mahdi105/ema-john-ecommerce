import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // Add To Cart Event handler
    const handleAddToCart = (product) => {
        // const newCart = [...cart,product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    // Clear Cart Click Handler
    const handleClearCart = () => {
        setCart([]);//Current cart view = Cart Empty
        localStorage.removeItem('shopping-cart');//After Loading Cart View = Cart Empty
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return (
        <div className='container mx-auto grid grid-cols-5'>
            <div className='col-span-4 products grid grid-cols-1 md:grid-cols-4 gap-5 p-10'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='bg-yellow-200 py-6 px-5 sticky'>
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <Link to='/orders'>
                        <div className='flex justify-between items-center'>
                            <span className='text-white font-semibold'>Orders Review</span>
                            <ArrowSmallRightIcon className="h-5 w-5 text-slate-100" />
                        </div>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;