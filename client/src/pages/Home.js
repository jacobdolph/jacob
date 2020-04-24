import React from "react";
import Navbar from '../components/Navbar'
import { Row, Container } from '../components/Grid'


function Home() {

    function toPortfolio(e) {
        e.preventDefault();
        document.getElementById('portfolio').scrollIntoView({
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
        <Container>
            <Navbar
                portfolio={toPortfolio}
                about={toAbout}
                tech={toTech}
                home={toHome}
            />
        </Container>
    );
};

export default Home;