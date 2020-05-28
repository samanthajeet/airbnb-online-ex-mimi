import React from 'react';
import MenuButton from '../reusableComponents/MenuButtons/MenuButtons';

const Menu = () => {

    const menuData = [
        "Globe", "Host your home", "Host your experience", "Help", "Login", "Sign Up"
    ]

    const MenuItems = menuData.map(element => (
        <MenuButton label={element} />
    ))

    return (
        <div className="menu-container">
            {MenuItems}
        </div>
    )
}

export default Menu;