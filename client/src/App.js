import React from 'react';
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>

        <Route path='/' component={Home}>

        </Route>

      </div>
    </Router>
  );
}

export default App;
