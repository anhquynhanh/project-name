import React from 'react'
import ItemContent from './ItemContent'

function Item({image, title, description, active}) {
    return (
        <div 
            className='carousel-item'
            style={{
                backgroundImage: `url(${image})`,
                display: active ? 'block' : 'none'
            }}
        >
            <ItemContent title={title} description={description} />
        </div>
    );
}

export default Item
