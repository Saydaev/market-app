import React from 'react';
import image from './shopping-cart-solid.svg';

function Checkout({database}) {

        const zero = database.filter((item) => {
            if (item.bought){
                return item;
            } else {
                return '';
            }
        })

        const newZero = zero.length;

    return (
        <div className='checkout'>
            <img src={image} alt='card-image' />
            <span className='counter'>{newZero}</span>
        </div>
    );
}

export default Checkout;