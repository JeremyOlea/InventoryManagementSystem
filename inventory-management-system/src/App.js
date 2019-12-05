import React from 'react';
import './App.css';
import Home from './CustomerUI/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';

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
