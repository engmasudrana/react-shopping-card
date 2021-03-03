import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="p-3">
                <img src="https://objective-payne-e5e18c.netlify.app/static/media/logo.0dd9a510.png" alt=""/>
            </div>
        
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;