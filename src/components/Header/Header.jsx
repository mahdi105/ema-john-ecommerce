import logo from '../../images/Logo.svg';
import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center h-20'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex justify-end items-center gap-8'>
                <a href="/order" className='hover:text-yellow-600'>Order</a>
                <a href="/order_review" className='hover:text-yellow-600'>Order Review</a>
                <a href="/manage_inventory" className='hover:text-yellow-600'>Manage Inventory</a>
                <a href="/login" className='hover:text-yellow-600'>Login</a>
            </div>
        </div>
    );
};

export default Header;