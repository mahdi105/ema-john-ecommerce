import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const handleAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
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
            <div className='bg-yellow-500 col-span-1 py-10 px-5'>
                <h1>Total Cart Items: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;