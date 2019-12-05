import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Item from './CustomerUI/Item';
import * as serviceWorker from './serviceWorker';
import Signup from './Signup';
import History from './History';
import Checkout from './Layout/Checkout';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const routing = (
    <Router history={History} forceRefresh={true}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/Item/:itemId" component={Item}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/cart" component={Checkout}/>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));
