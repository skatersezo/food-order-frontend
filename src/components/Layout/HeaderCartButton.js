import React, { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {

    const cartCtx = useContext(CartContext);

    const itemsCount = cartCtx.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your cart
            </span>
            <span className={classes.badge}>
                {itemsCount}
            </span>
        </button>
    );
}

export default HeaderCartButton;