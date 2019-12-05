import React from 'react';
import './App.css';
import Home from './CustomerUI/Home';
import Signup from './Signup';
import Item from './CustomerUI/Item';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './CustomerUI/Home'
import Manager from'./ManagerUI'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
    <Manager/>
  );
}

export default App;
