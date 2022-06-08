import logo from '../assets/image/logo.png';
import { useNavigate } from "react-router-dom";
import React from 'react';

const HeaderView = () => {

    const Navigate = useNavigate();
    const handleBtnClick = (e) => {
        localStorage.clear()
        Navigate('/')
    };

    return (
        <main>
            <header className='headerview'>
                <img src={logo} className='logoview' alt='logo' />
                <button className='btnOut' type='submit' onClick={(e) => handleBtnClick(e)}><i className='fa-solid fa-right-from-bracket fa-3x'></i></button>
            </header>
            <hr></hr>
        </main>
    )
}
export default HeaderView;