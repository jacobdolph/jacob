import React from "react";



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
        <div>Hello World</div>
    );
};

export default Home;