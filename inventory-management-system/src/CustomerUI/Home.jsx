import React, { Component } from 'react';
import './Home.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table1 from "../TableHome"
import Table2 from "../TablePurchases"
import Table3 from "../TableCart"
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { thisTypeAnnotation } from '@babel/types';
import History from '../History';
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from '../Layout/Checkout.js';
import Manager from '../ManagerUI'
import history from '../History';


let rmvIMG = "./Images/rmvicon.png"

var data = [
  {image: './Images/AF1.jpg', name: 'Air Force 1s', value: '100', id: 1},
  {image: './Images/COLD.jpg', name: 'Balenciaga', value: '500', id: 2},
  {image: './Images/HEAT.jpg', name: 'Sketchers', value: '10000', id:3}
];

var data2 = [
  {image: './Images/AF1.jpg', name: 'Air Force 1s', value: '100', date: '11/06/13'},
  {image: './Images/COLD.jpg', name: 'Balenciaga', value: '500', date: '11/07/13'},
  {image: './Images/HEAT.jpg', name: 'Sketchers', value: '10000', date: '11/08/13'}
];

var data3 = [
  {id: 111, name: 'Air Force 1s', Price: 100, quantity: 2, size: 9, },
  {id: 125, name: 'Balenciaga', Price: 500, quantity:  3, size: 9, },
  {id: 101, name: 'Sketchers', Price: 10000, quantity: 1, size: 9, }
];


var total=0;


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
        user: localStorage.getItem('login'),
        items: [],
        purchases: [],
        cart: [],
        email: "",
        password: "",
        hello : "",
        total: 0,
        showPopup: false,
        showCheckoutTable: true,
        admin: localStorage.getItem('admin'),
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  togglePopUp(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggleTable() {
    this.setState ({showCheckoutTable: !this.state.showCheckoutTable});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  componentDidMount() {
    axios.get('http://localhost:5000/getItems')
    .then(res => {
      let testdata = [];
      for(let i = 0; i < res.data.length; i++) {
        testdata.push({image: res.data[i]['Image'], name: res.data[i]['Name'], value: res.data[i]['Price'], id: res.data[i]['ItemID']});
      }
      this.setState({
        items : testdata,
      })
      this.sumTotal(data3);
    }).catch(err => {
      console.log(err);
    })

    
    if(localStorage.getItem("loginID") != null) {
      let userCred = {
        uid:  localStorage.getItem("loginID"),
      }
      axios.post('http://localhost:5000/getPurchases', userCred)
      .then(res => {
        let purchasedItems = [];
        for(let i = 0; i < res.data.length; i++) {
          purchasedItems.push({image: res.data[i]['Image'], name: res.data[i]['Name'],
          value: res.data[i]['Price'], date: res.data[i]['Date'], id: res.data[i]['ItemID']});
        }

        this.setState({
          purchases: purchasedItems,
        })
      }).catch(err => {
        console.log(err);
      })


      axios.post('http://localhost:5000/getAllCart', userCred)
      .then(res => {
        console.log(res);
        let cartItems = [];
        for(let i = 0; i < res.data.length; i++) {
          cartItems.push({id: res.data[i]['ItemID'], name: res.data[i]['Name'],
          value: res.data[i]['Price'], quantity: res.data[i]['Quantity'], size: 9});
        }

        this.setState({
          cart: cartItems,
        })
      }).catch(err => {
        console.log(err);
      })
    }

  }

  componentWillMount() {
    this.setState({
      user: localStorage.getItem('login'),
    })
  }

  checkLogin(event){
    event.preventDefault();

    let loginCred = {
        email: this.state.email,
        password: this.state.password
    };

    axios.post('http://localhost:5000/checkLogin', loginCred)
    .then(res => {
      if(res.data == null){
        alert("Wrong Login Credentials!");
      } else {
        this.setState({
          user: {
            userID: res.data[0],
            fname: res.data[1],
            lname: res.data[2],
            address: res.data[3],
            email: res.data[4],
            password: res.data[5],
            admin: res.data[6],  
          },
          admin: res.data[6],
        })
        localStorage.setItem('loginID', res.data[0]);
        localStorage.setItem('login', this.state.user);
        localStorage.setItem('admin', this.state.admin);
      }
    })
  }

  goToItem(event) {
    event.preventDefault();
    History.push('/Item/300');
  }

  sumTotal(checkoutItems) {
    for (let i =0; i<checkoutItems.length; i++) {
      total += checkoutItems[i]["Price"];
    }
    this.setState({total: total});
  }

  logout() {
    localStorage.clear();
    this.setState({
      user: localStorage.getItem('login'),
      items: [],
      purchases: [],
      cart: [],
      email: "",
      password: "",
      hello : "",
      total: 0,
      showPopup: false,
      showCheckoutTable: true
    })
    alert('logged out');
  }

  goToSignup() {
    history.push('/signup');
  }

  notLogged() {
    return(
      <span className="Light">
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}></input>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <Button onClick={this.checkLogin}>Login</Button>
        <Button onClick={() => {this.goToSignup()}}>Sign Up</Button>
      </span>
    );
  }

  logged() {
    return(
      <div>
        Welcome!
        <Button onClick={this.logout}>Logout</Button> 
      </div>
    );
  }

  goToCheckout() {
    history.push('/cart');
  }

  render(){
    if(this.state.admin == 1) {
        return (
          <Manager/> 
        );
    } else {
      return (
        <div className="Home">
          <div className="Light">
            <h1 className="App-header">
             S T O K E D C L O T H I N G<br></br>
            </h1>
            <form> 
                {this.state.user ? this.logged() : this.notLogged()}
            </form>
        {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}
          <Tabs defaultIndex={0}>
            <center>
              <TabList>
                <Tab>Home</Tab>
                <Tab>Purchases</Tab>
                <Tab>Cart</Tab>
              </TabList>
            </center>

            <TabPanel className="Light">
              <Table1 data={this.state.items}/>

            </TabPanel>
            <TabPanel className="Light">
              <Table2 data={this.state.purchases}/>
            </TabPanel>
            <TabPanel className="Light">
              
              <Table3 data={this.state.cart}>
            
              </Table3>
              <div>
                <button type="button" class="btn btn-primary" onClick={() => {this.goToCheckout()}}>Checkout</button>
              </div>
            </TabPanel>
          </Tabs>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        </div>
      );
    }
  }

}
export default Home;



// {this.state.showPopup ?
//   <Checkout></Checkout>
//     :null
//   }

//<p>Total: ${this.state.total} </p>