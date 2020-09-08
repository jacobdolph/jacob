import React from "react";
import Container from 'react-bootstrap/Container';


const Title = ({ title }) => {

    return (
        <Container  >
            <div className='center' style={{ backgroundColor: 'white', height: '100%' }}>
                <div>
                    <h1 className='flow-text' style={{ margin: '5rem 0 5rem 0', fontSize: "3rem" }}>{title}</h1>
                </div>
            </div>
        </Container >
    );
};
export default Title;