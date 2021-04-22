import React, {useState} from 'react';
import Card from "./Card";



function Content(props) {

    return (
        <div className='content'>
            {props.database.map((item) => {
                return (
                    <Card product={item} database={props.database} setDatabase={props.setDatabase} setBought={props.setBought} />
                )
            })}
        </div>
    )
}

export default Content;