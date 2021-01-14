import React from 'react';
import './button.scss';

const Button = (props) => {
    if (props.type === 'link') {
        return (
            <a
            className={`a-button__link ${props.className}`}
            href={props.href}
            >
                <p>{props.text}</p>
            </a>
        )
    } else if (props.type === 'button') {
        return(
            <button
            className={`a-button ${props.className}`}
            type={props.typeButton}
            >
                {props.text}
            </button>
        )
    }
}

export default Button;
