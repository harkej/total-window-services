import React from 'react';
import NavigationPanel from '../NavigationPanel';
import './style.css';

const Header = () => {
    return (
        <nav className="header-container">
            <p>LOGO</p>
            <NavigationPanel />
        </nav>
    )
}

export default Header
