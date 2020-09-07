import React from "react";
import { Row, Container } from '../components/Grid'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";
import Mapout from "../components/Mapout";
import Tech from "../components/Tech";
import Title from "../components/Title";
import About from "../components/About";

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
        <Container  >
            <Navbar
                portfolio={toPortfolio}
                tech={toTech}
                home={toHome}
                about={toAbout}
            />
            <Navmobile
                portfolio={toPortfolio}
                tech={toTech}
                home={toHome}
                about={toAbout}
            />

            <Row>
                <Container container>
                    <WebDev />
                </Container>
            </Row>


            <Row>
                <About />
            </Row>
            <Row>
                <Mapout />
            </Row>




            <Row>
                <Title title='Tech' />
                <Tech />
            </Row>



        </Container >
    );
};

export default Home;