import React, { useState } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

function ProjectModal({ portfolio }) {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='tiny'
            trigger={<Button basic><Image size='huge' src={`${portfolio.image}`} />{portfolio.name}</Button>}
            dimmer='blurring'
        >
            <Header icon>
                <Icon name={portfolio.icon} />

                <span style={{ fontSize: '3em' }}>
                    {portfolio.name}
                </span>

            </Header>
            <Modal.Content>
                <h3>
                    {portfolio.description}
                </h3>
                <br />
                <p>
                    {portfolio.tech}
                </p>
            </Modal.Content>
            <Modal.Actions>

                <Button basic inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' />
                </Button>
                <Button floated='left' as='a' href={portfolio.projectUrl} color='google plus' target='_blank' basic inverted onClick={() => setOpen(false)}>
                    Application
                </Button>
                <Button floated='left' as='a' href={portfolio.repoUrl} target='_blank' basic inverted onClick={() => setOpen(false)}>
                    Repo
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ProjectModal;