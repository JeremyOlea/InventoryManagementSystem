import React, { Component } from 'react';
import './Home.css';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
// import {Redirect} from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Home">
        <div>
        Shop Name<br></br><br></br>
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