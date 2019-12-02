import React from 'react';
import axios from 'axios';
import './Home.css';
import '../css/Item.css';
import {Link} from 'react-router-dom';


var data = [
    {image: '../Images/AF1.jpg', name: 'Air Force 1s', value: '100'}
  ];

class Item extends React.Component {
    render() {
        return(
            <body>
            {/* <div className= "container">          */}
                <div className="sidenav">
                    <Link to="/">Home</Link>
                    <a href="#">Add To Cart</a>
                    <a href="#">Checkout</a>
                </div>
                <div className="content">
                    <p>Air Force 1s</p>
                    <div className="shoesImg">
                    <img  src={require('../Images/AF1.jpg')} class="img-thumbnail"/>
                    </div>
                    <p>Price: 100</p>
                </div>
            {/* </div>  */}
            </body>
        )};
}

export default Item 