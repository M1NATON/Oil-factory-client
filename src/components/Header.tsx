import React from 'react';
// @ts-ignore
import logo from '../assets/header/logo.png'
import {Link} from "react-router-dom";


const Header = () => {

    const liStyle = 'hover:bg-yellow-400 hover:text-blue-700 px-4 py-2 rounded-3xl transition-all'

     return (
        <div className='bg-blue-700 text-white py-2 px-5 text-2xl flex justify-between items-center'>
            <div className='px-2 py-4 w-[250px]'>
                <img className='w-[60px]' src={logo} alt="Logo"/>
            </div>
            <nav className=' px-2 py-4 w-[600px] '>
                <ul className='flex justify-between '>
                    <li className={liStyle}><Link to='/home'>Главная</Link></li>
                    <li className={liStyle}><Link to='/product'>Продукты</Link></li>
                    <li className={liStyle}><Link to='/contact'>Контакты</Link></li>
                    <li className={liStyle}><Link to='/about'>О нас</Link></li>
                </ul>
            </nav>
            <div className='px-2 py-4 w-[250px]'>
                <Link to='/dashboard' className={liStyle}>Личный кабинет</Link>
            </div>

        </div>
    );

};

export default Header;