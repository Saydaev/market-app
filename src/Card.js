import React from 'react';
import Button from "./Button";

function Card({database, setBought}) {

    return (
        database.map((item,index) => {
            return (
                <div  className='card'>
                    <div className="card-image">
                        <img src={item.image} alt='image' />
                    </div>
                    <div className="card-info">
                        <div className="card-name">{item.name}</div>
                        <div className="card-rating">{item.rating}</div>
                        <div className="card-price">{item.price}₽</div>
                        <Button setBought={setBought} index={index} bought={item.bought} />
                    </div>
                </div>
            )
        })
    );
}

export default Card;