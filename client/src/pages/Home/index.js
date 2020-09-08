import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WebDev from "../../components/WebDev";
import Mapout from "../../components/Mapout";
import Tech from "../../components/Tech";
import Title from "../../components/Title";
import About from "../../components/About";

function Home() {

    function toPortfolio(e) {
        e.preventDefault();
        document.getElementById('portfolio').scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }

    function toTech(e) {
        e.preventDefault();
        document.getElementById('tech').scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }
    function toHome(e) {
        e.preventDefault();
        document.getElementById('home').scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }
    function toAbout(e) {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }


    return (
        <div className='homepage'>

            <WebDev />
            <About />
            <Mapout />
            <Title title='Tech' />
            <Tech />

        </div>
    );
};

export default Home;