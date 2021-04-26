import React from 'react';

function Button({setBought, index , bought}) {
    return (
        <button className='btn' onClick={() => setBought(index)} disabled={bought}>
            {bought ? 'Добавлено в корзину' : 'Добавить в корзину'}
        </button>
    );
}

export default Button;