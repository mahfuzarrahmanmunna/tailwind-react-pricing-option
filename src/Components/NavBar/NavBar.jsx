import React, { useState } from 'react';
import Link from './Link';
import { Menu, MonitorX } from 'lucide-react';
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
    const [open, setOpen] = useState(false)
    const links = navigationData.map(route => <Link key={route.id} route={route} />)

    return (
        <nav className='flex justify-between lg:px-10 px-2 py-3'>
            <div className='flex gap-2 items-center' >
                <span onClick={() => setOpen(!open)}>
                    {open ? <MonitorX /> : <Menu className='lg:hidden' />}
                </span>
                <ul className={`lg:hidden absolute ${open ? 'top-12' : 'top-64'} duration-75`} >
                    {
                        links
                    }
                </ul>
                <h2>My Navbar</h2>
            </div>
            <ul className='lg:flex hidden gap-5'>
                {
                    links
                }
            </ul>
            <button>
                Sign In
            </button>
        </nav>
    );
};

export default NavBar;