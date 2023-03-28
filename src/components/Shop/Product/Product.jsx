import React from 'react';

const Product = (props) => {
    const {name,seller,price,ratings,img} = props.product;
    console.log(props.product)
    return (
        <div className='rounded-md border border-slate-200 relative'>
            <div className='p-2'>
                <img src={img} alt="" className='w-full rounded-md' />
            </div>
            <div className='px-4 py-1 mb-14'>
                <div>
                    <h2 className='text-xl md:text-sm font-extrabold mb-2'>{name}</h2>
                    <h3 className='font-semibold text-rose-600 mb-1'>Price: ${price}</h3>
                </div>
                <div>
                    <p className='text-sm'>Manufacturer: {seller}</p>
                    <p className='text-sm'>ratings: {ratings?ratings +' '+'Star':'Rate This Product'}</p>
                    
                </div>
            </div>
            <button className='hover:bg-rose-600 text-white absolute bottom-0 block bg-rose-500 w-full py-3 rounded-b-md'>
               Add To Cart 
            </button>
        </div>
    );
};

export default Product;