import React from 'react';
import { Img } from '../Grid'
function Header() {
    return (
        <div className='center' id='home'>
            <Img src='https://jacobdolph.github.io/assets/images/jacob-2.JPG' cAlign circle />
            <h2 style={{ margin: '1rem 0rem 2rem 0rem', fontSize: '6rem', color: '#424242', lineHeight: '6rem' }}><strong>Jacob Dolph</strong></h2>
        </div>
    )
}

export default Header;