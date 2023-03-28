import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div className='container mx-auto grid grid-cols-7'>
            <div className='col-span-5 products grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='bg-yellow-500 col-span-2'>
                <h1>Cart Details</h1>
            </div>
        </div>
    );
};

export default Shop;