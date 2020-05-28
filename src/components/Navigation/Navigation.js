import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-conainter">
            <Logo />
            <Menu />
        </div>
    )
}

export default Navigation;