import React from 'react'

const Button = ({ children, onClick }) => {
    function handleClick() {
        console.log('Click me');
    }

    return (
        <button onClick={onClick}>{children}</button>
    );
}

export default Button