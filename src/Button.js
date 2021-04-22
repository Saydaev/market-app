import React from 'react';

function Button(props) {
    console.log(props.database)



    return (
        <div className='card-button'>
            <button disabled={false} className="btn" onClick={props.setBought}>Добавить в корзину</button>
        </div>
    );
}

export default Button;