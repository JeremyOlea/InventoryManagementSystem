import Navbar from './Navbar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import axios from 'axios';
import moment from 'moment';
import history from '../History';


export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
  }

    render(){
        return (
            
            <div class="container">
            <div className="app-container">
                
                <Page />
                
            </div>
            </div>
            
        )
    }
}
  
  const Item = (props) => (
    <div className='popup'>
        <div className='popup\_inner'>
            <div className="item-container">
            <div className="item-image">
                <img src={props.img}/>
                <div className="item-details">
                <h3 className="item-name"> {props.name} </h3>
                <h2 className="item-price"> {props.price} </h2>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
  
  const Page = (props) => (
   <div className="checkout">
      <div className="checkout-container">
       <h3 className="heading-3">Credit card checkout</h3>
       <Input label="Cardholder's Name" type="text" name="name" />
       <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
        <div className="row">
          <div className="col">
            <Input label="Expiration Date" type="month" name="exp_date" />
          </div>
          <div className="col">
            <Input label="CVV" type="number" name="cvv" />
          </div>
        </div>
        <Button text="Purchase"/>
      </div>
   </div>
  );
  
  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc}/>
      </div>
    </div>
  );
  
  const Button = (props) => (
    <button className="checkout-btn" type="button" onClick = {() => purchase()}>{props.text}</button>
  );

  function purchase() {
    let ID = localStorage.getItem('loginID');
    console.log(ID);
    if(localStorage.getItem("loginID") != null) {
      let info = {
        UserID: ID,
        DateTime: moment(),
      };
      axios.post("http://localhost:5000/cartToPurchase", info)
      .then(res => {
        alert(res.data);
        history.pushState('/');
      }).catch(err => {
        alert(err);
      })
    } else {
      alert("must be logged in");
    }
  }
  
