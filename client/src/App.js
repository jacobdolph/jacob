import React from 'react';
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Sidenav from './components/Sidenav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid >
      <Row>
        <Sidenav />
        <Col sm='12' md='12' lg='10'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
