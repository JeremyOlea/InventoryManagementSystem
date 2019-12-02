import React from 'react';
import './App.css';
import Home from './CustomerUI/Home';
import Item from './CustomerUI/Item';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
