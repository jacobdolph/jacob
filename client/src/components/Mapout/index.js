import React, { Component } from 'react';
import portfolio from '../../portfolio.json'
import Card from '../Card'
import Wrapper from '../Wrapper';
import { Container } from '../Grid';
import './index.css'
function Mapout() {

    return (
        <Wrapper>
            <Container id="portfolio" container>
                {portfolio.map(portfolio => (

                    <Card
                        title={portfolio.name}
                        img={portfolio.image}
                        link={portfolio.projectUrl}
                        repo={portfolio.repoUrl}
                        description={portfolio.description}
                        tech={portfolio.tech}
                        key={portfolio.id}
                        id={portfolio.id}
                    />

                ))}
            </Container>
        </Wrapper>
    )

}

export default Mapout;