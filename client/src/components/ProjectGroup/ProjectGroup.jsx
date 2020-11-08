import React from 'react'
import { Grid, Item } from 'semantic-ui-react'
import ProjectModal from '../ProjectModal/ProjectModal'
import portfolio from '../../portfolio.json';

const ProjectGroup = () => {
  return (

    <Grid.Row >

      {portfolio.map((portfolio) =>
        (

          <Grid.Column key={portfolio.id}>
            <ProjectModal
              portfolio={portfolio}
            />
          </Grid.Column>
        )
      )}
    </Grid.Row>


  )
}

export default ProjectGroup
