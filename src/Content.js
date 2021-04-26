import React from 'react';
import Card from "./Card";

function Content(props) {
    return (
        <div className='content'>
            <Card database={props.database} setDatabase={props.setDatabase} setBought={props.setBought} />
        </div>
    );
}

export default Content;