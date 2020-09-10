import React from 'react';
import './Menu.css';
import Logo from '../../assets/popcorn.png';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo" />
            </a>
        </nav>
    );
}

export default Menu; 