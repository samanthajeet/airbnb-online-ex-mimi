import React from 'react';
import './MenuButton.css';

const MenuButton = ({label}) => {
    return (
        <div>
            <button className="menu-button">{label}</button>
        </div>
    )
}

export default MenuButton;