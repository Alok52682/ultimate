import React from 'react';

const Button = ({ children }) => {
    const button = {
        color: 'white',
        width: '142px',
        height: '49px',
        backgroundColor: '#1678CB',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    }
    return (
        <button className="flex items-center justify-center gap-1" style={button}>{children}</button>
    );
};

export default Button;