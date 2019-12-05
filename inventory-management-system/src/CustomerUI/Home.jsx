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
        user: {},
        items: [],
        purchases: ["Item 1", "Item 2", "Item 3"],
        cart: (0),
        email: "",
        password: "",
        hello : "",
        total: 0,
        showPopup: false,
        showCheckoutTable: true
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
      console.log(res);
      let testdata = [];
      for(let i = 0; i < res.data.length; i++) {
        testdata.push({image: './Images/AF1.jpg', name: res.data[i]['Name'], value: res.data[i]['Price'], id: res.data[i]['ItemID']});
      }
      this.setState({
        items : testdata,
      })
      this.sumTotal(data3);
      console.log(testdata);
    }).catch(err => {
      console.log(err);
    })
  }


  // linkFlask(event) {
  //   event.preventDefault();
  //   axios.get('http://localhost:5000/HelloWorld')
  //   .then(res => {
  //       console.log(res);
  //       alert(res.data['hello']);
  //   })
  // }
  
  checkLogin(event){
    event.preventDefault();

    let loginCred = {
        email: this.state.email,
        password: this.state.password
    };

    console.log(loginCred);

    axios.post('http://localhost:5000/checkLogin', loginCred)
    .then(res => {
      console.log(res);
      if(res.data == null){
        alert("Wrong Login Credentials!");
      } else {
        this.setState({
          user: {
            userID: res.data['UserID'],
            fname: res.data['Fname'],
            lname: res.data['Lname'],
            address: res.data['Address'],
            email: res.data['email'],
            password: res.data['password'],
            admin: res.data['Admin'],
          }
        })
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

  render(){
    return (
      <div className="Home">
        <div>
          <h1 className="App-header">
            Shop Name<br></br>
          </h1>
          <form>  
            <span className="login">
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}></input>
              <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
              <Button onClick={this.checkLogin}>Login</Button>
            </span>
          </form>
        <div>
        </div>
        {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Purchases</Tab>
              <Tab>Cart</Tab>
            </TabList>
            <TabPanel className="HomePanel">
              <Table1 data={this.state.items}/>

            </TabPanel>
            <TabPanel className="PurchasesPanel">
              <Table2 data={data2}/>
            </TabPanel>
            <TabPanel className="CartPanel">
              
              <Table3 data={data3}>
            
              </Table3>
              <Link to="/cart">
              <button type="button" class="btn btn-primary" >Checkout</button>
              </Link>
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
export default Home;



// {this.state.showPopup ?
//   <Checkout></Checkout>
//     :null
//   }

//<p>Total: ${this.state.total} </p>