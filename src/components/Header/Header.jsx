import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center h-20'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex justify-end items-center gap-8'>
                <Link to="/"><span className='hover:text-yellow-600'>Shop</span></Link>
                <Link to="/orders"><span className='hover:text-yellow-600'>Orders</span ></Link>
                <Link to="/inventory" ><span className='hover:text-yellow-600'>Inventory</span></Link>
                <Link to="/login"><span className='hover:text-yellow-600'>Login</span></Link>
            </div>
        </div>
    );
};

export default Header;