import React from 'react';
import Card from "./Card";

function Content({setBought, database, setDatabase}) {
    return (
        <div className='content'>
            <Card database={database} setDatabase={setDatabase} setBought={setBought} />
        </div>
    );
}

export default Content;