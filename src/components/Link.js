import React from 'react';

const Link = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default Link;