import React from 'react';

import food from '../../assets/food.jpg';
import classes from './Header.module.css';

function Header(props) {

    return (
        <>
            <header className={classes.header}>
                <h1>Wonderfood</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={food} alt="world foods" />
            </div>
        </>
    );

}

export default Header;