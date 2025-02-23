import React from 'react';

export const Button = ({ children, variant = 'default', className = '', ...props }) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition duration-200';
    const variants = {
        default: 'bg-black text-white hover:bg-gray-800',
        outline: 'border border-black text-black hover:bg-gray-200',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};