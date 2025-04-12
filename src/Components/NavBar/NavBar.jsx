import React from 'react';
import Link from './Link';
// import Link from './Link';

const navigationData = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Blog",
        "path": "/blog"
    },
    {
        "id": 5,
        "name": "Contact",
        "path": "/contact"
    }
]

const NavBar = () => {
    return (
        <div>
            <ul className='flex gap-5'>
                {
                    navigationData.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </div>
    );
};

export default NavBar;