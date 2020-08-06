import React from "react";
import { Row, Container } from '../components/Grid'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";
import Header from "../components/Header";
import PortfolioTitle from "../components/PortfolioTitle";
import Mapout from "../components/Mapout";
import Tech from "../components/Tech";
import TechTitle from "../components/TechTitle";
import SectionWrapper from "../components/SectionWrapper";

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


    return (
        <Container  >
            <Navbar
                portfolio={toPortfolio}
                tech={toTech}
                home={toHome}
            />
            <Navmobile
                portfolio={toPortfolio}
                tech={toTech}
                home={toHome}
            />

            <Row>
                <Container container>
                    <Header />
                    <WebDev />
                </Container>
            </Row>


            <Container >
                <Row>
                    <PortfolioTitle />
                    <Mapout />
                </Row>
            </Container>



            <Row>
                <TechTitle />
                <Tech />
            </Row>



        </Container >
    );
};

export default Home;