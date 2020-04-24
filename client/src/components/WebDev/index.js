import React from 'react';
import WebDevTitle from '../WebDevTitle';


function WebDev() {

    return (
        <div className='center' style={{ backgroundColor: 'white', height: '100%' }}>
            <div>
                <WebDevTitle />
                <br />
                <div style={{ fontSize: "3rem" }}>
                    <h6 className=' flow-text' style={{ padding: "1rem 1rem", margin: '0rem 1rem', color: "#616161" }}>"I am a Web Developer with experience in Javascript, Node, and React! I have a passion for backend programming however I love learning about the fundementals of design for the web. I have been building computers and playing with code to manipulate my digital experiences since Xanga first launched and allowed me to add fun variants to the html of my homepage. I have a desire to push myself to learn new technologies to enhance the digital experiences of others!"</h6>
                </div>
            </div>
        </div>
    )
}
export default WebDev;