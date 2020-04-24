import React from 'react';
import { Link } from 'react-router-dom';

function Navmobile() {
    return (

        <ul className="sidenav" id="mobile-demo" style={{ backgroundColor: 'white' }}>
            <li><Link style={{ color: "#37474f", fontSize: '2rem' }} className='sidenav-close' to='/'>Home</Link></li>
            <li><Link style={{ color: "#37474f", fontSize: '2rem' }} className='sidenav-close' to='/portfolio'>Portfolio</Link></li>
            <li><Link style={{ color: "#37474f", fontSize: '2rem' }} className='sidenav-close' to='/about'>About</Link></li>
            <li><Link style={{ color: "#37474f", fontSize: '2rem' }} className='sidenav-close' to='/Connect'>Tech</Link></li>
            <br />
            <br />
            <a href='https://linkedin.com/in/jacob-dolph-508a82bb' rel="noopener noreferrer" target='_blank' style={{ color: "#37474f" }}>LinkedIn</a>
            <a href='https://github.com/jacobdolph' rel="noopener noreferrer" target='_blank' style={{ color: "#37474f" }}>Github</a>
            <a href='https://drive.google.com/file/d/1UNzogXdogaSg7oqvkZSs9z56ZCWf-Jpq/view?usp=sharing' rel="noopener noreferrer" target='_blank' style={{ color: "#37474f" }}>Resume</a>


        </ul>
    )
}

export default Navmobile;