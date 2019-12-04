import React from 'react';
import axios from 'axios';
import './Home.css';
import '../css/Item.css';
import {Link} from 'react-router-dom';
import { resolve } from 'dns';
import { reject } from 'q';


var data = [
    {image: '../Images/AF1.jpg', name: 'Air Force 1s', value: '100'}
  ];

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemId : this.props.match.params.itemId,
            item: {},
            loaded: false,
        };
      }

    UNSAFE_componentWillMount() {
        axios.post("http://localhost:5000/getItemById", {
            itemId : this.state.itemId,
        }).then(res => {
            this.setState({
                item : res.data,
                loaded: true,
            })
            console.log("Success");
        }).catch(err => {
            console.log(err);
        })
    }

    purchaseItem(event) {
        let item = {
            ItemID: this.state.itemId,
            UserID: this.state.User['UserID'],
            Date: "today",
            Quantity: "This many",
        };
        // axios.post("http://localhost:5000/addPurchase", );
    }

    load() {
        return(
            <div>
                <div className="sidenav">
                    <Link to="/">Home</Link>
                    <a href="">Add To Cart</a>
                    <a href="" onClick={this.purchaseItem}>Checkout</a>
                </div>
                <div className="content">
                    <p>Air Force 1s</p>
                    <div className="shoesImg">
                    <img  src={require('../Images/AF1.jpg')} className="img-thumbnail"/>
                    </div>
                    <p>Price: {this.state.item['Price']}</p>
                </div>
            </div>
        );
    }

    waitingToLoad() {
        return(
            <div>
                <div className="sidenav-loading">
                </div>
                <div className="content">
                Loading...
                </div>
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.state.loaded ? this.load() : this.waitingToLoad()}
            </div>
        );
    }
}

export default Item 