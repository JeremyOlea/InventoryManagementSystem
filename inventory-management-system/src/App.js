import React from 'react';
import './App.css';
import Home from './CustomerUI/Home';
import Signup from './Signup';
import Item from './CustomerUI/Item';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Manager from'./ManagerUI'

const App = () => {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>

    </div>
  );
}

export default App;
