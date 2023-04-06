import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product,handleRemoveCartItem}) => {
    const {name,id,img,price,shipping} = product;
    return (
        <div className='shadow-sm rounded-md w-[571px] min-h-[107px] border border-slate-200 flex items-center justify-between p-[8px]'>
            <div className=' flex items-center gap-4'>
                <div className='w-[91px] h-[91px] rounded-[6px]'>
                    <img src={img} className='rounded-md w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-normal'>{name}</h2>
                    <p className='text-[#2A414F]'>Price: <span className='text-[#FF9900]'>${price}</span></p>
                    <p className='text-[#2A414F]'>Shipping Charge: <span className='text-[#FF9900]'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveCartItem(id)} className='m-2 flex items-center justify-center w-[55px] h-[55px] rounded-full bg-[rgba(235,87,87,0.3)]'><TrashIcon className="h-6 w-6 text-[#EB5757]" /></button>
        </div>
    );
};

export default ReviewItem;