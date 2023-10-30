import React from 'react'

function ItemContent({title, description}) {
    return (
        <div className='carousel-item-content'>
            <div className='carousel-item-title'>{title}</div>
            <p className="carousel-item-description">{description}</p>
        </div>
    );
}

export default ItemContent