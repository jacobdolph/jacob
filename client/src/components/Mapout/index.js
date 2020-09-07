import React from 'react';
import portfolio from '../../portfolio.json'
import Card from '../Card'
import Wrapper from '../Wrapper';
import { Container } from '../Grid';
import './index.css'
import Title from '../Title';
function Mapout() {

    return (
        <Wrapper>
            <Container id="portfolio" container>
                <Title title='Portfolio' />
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