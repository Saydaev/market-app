import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";

function Header({database, setDatabase}) {
    return (
        <div className='header'>
            <Logo />
            <Menu />
            <Checkout database={database} setDatabase={setDatabase} />
        </div>
    );
}

export default Header;