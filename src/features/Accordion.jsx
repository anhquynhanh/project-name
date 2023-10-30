import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span className={`icon ${isOpen ? 'open' : ''}`}></span>
            </div>
            <div className="accordion-content" style={{ display: isOpen ? 'block' : 'none' }}>{content}</div>
        </div>
    );
}

export default Accordion;
