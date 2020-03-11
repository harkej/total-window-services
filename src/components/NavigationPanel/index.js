import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavigationPanel = () => {
    return (
        <ul className="navigation-panel-container">
            <li className="navigation-item">
                <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
                <Link to="/our-solutions">Our solutions</Link>
            </li>
            <li className="navigation-item">
                <Link to="/about-us">About us</Link>
            </li>
            <li className="navigation-item">
                <Link to="/contact-us">Contact us</Link>
            </li>
        </ul>
    )
}

export default NavigationPanel
