import React, { Component } from 'react';
import './Home.css';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
// import {Redirect} from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: {},
        purchases: {},
        cart: {},
        email: "",
        password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  render(){
    return (
      <div className="Home">
        <div>
          <form>
            Shop Name
            <span className="login">
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}></input>
              <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
            </span>
          </form>
        <div>
        </div>
        {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}
          <Tabs defaultIndex={1}>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Purchases</Tab>
              <Tab>Cart</Tab>
            </TabList>
            <TabPanel className="HomePanel">
              Home
            </TabPanel>
            <TabPanel className="PurchasesPanel">
              Purchases
            </TabPanel>
            <TabPanel className="CartPanel">
              Cart
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
          </div>
      </div>
    );
  }

}
export default Home;