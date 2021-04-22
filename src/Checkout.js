import React from 'react';
import checkout from './shopping-cart-solid.svg';

function Checkout(props) {

    const zero = props.database.filter((item) => {
        if (item.bought){
            return item;
        } else {
            return '';
        }
    })

    const newZero = zero.length;

    return (
        <div className='checkout'>
            <img src={checkout} alt='checkout' />
            <span className='counter'>{newZero}</span>
        </div>
    );
}

export default Checkout;