import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href='#'>
                    AdminPanel
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href='#'>People</a>
                </li>
                <li>
                    <a href='#'>Login</a>
                </li>
            </ul>

        </div>
    );
};

export default Header;