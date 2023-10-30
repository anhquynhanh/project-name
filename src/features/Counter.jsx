import React, { useState } from 'react'
import Button from './Button';

function Counter({count, onPlusClick, onReduceClick, onPlushRandomClick, onReduceRandomClick}) {

    return (
        <div>
            <p>Current count is: {count}</p>
            <Button onClick={onPlusClick}>Up</Button>
            <Button onClick={onReduceClick}>Down</Button>
            <Button onClick={onPlushRandomClick}>Up radom</Button>
            <Button onClick={onReduceRandomClick}>Down random</Button>
        </div>
    );
}

export default Counter