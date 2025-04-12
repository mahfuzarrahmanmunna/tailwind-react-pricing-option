import React from 'react';

const Link = ({ route }) => {
    const { name, path } = route
    console.log(route)
    return (
                <li className='flex'>
                    <a href={path}>{name}</a>
                </li>
    );
};

export default Link;