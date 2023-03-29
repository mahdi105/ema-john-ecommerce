import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // Add To Cart Event handler
    const handleAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div className='container mx-auto grid grid-cols-5'>
            <div className='col-span-4 products grid grid-cols-1 md:grid-cols-4 gap-5 p-10'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <Cart cart={cart}></Cart>
            
        </div>
    );
};

export default Shop;