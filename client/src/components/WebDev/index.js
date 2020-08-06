import React from 'react';
import WebDevTitle from '../WebDevTitle';
import Header from '../Header';


function WebDev() {

    return (
        <div className='center' style={{ backgroundColor: 'white', height: '100%', margin: '30% 0' }}>
            <div>
                <Header />
                <WebDevTitle />
            </div>
        </div>
    )
}
export default WebDev;