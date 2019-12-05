import React, { Component } from 'react';
import { Table, Button, Image } from 'semantic-ui-react'
import _ from 'lodash'
import axios from 'axios';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddTops from './AddTops.js';
import history from './History';
import moment from 'moment';

class Manager extends Component {
  constructor(props){
    super(props);

    this.state = {
      column: null,
      items: [],
      direction: null,
      restockItemID: '',
      restockAmount: '',
      needRestock: [],
      restockHistory: [],
    };

    this.handleRestock = this.handleRestock.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRestockIDChange = this.handleRestockIDChange.bind(this);
    this.handleRestockAmountChange = this.handleRestockAmountChange.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }

  handleSort = (clickedColumn) => () => {
    const { column, items, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        items: _.sortBy(items, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      items: items.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/getItems')
    .then(res => {
      console.log(res);
      let testdata = [];
      let lowStock = [];
      for(let i = 0; i < res.data.length; i++) {
        testdata.push({image: './Images/AF1.jpg', itemid: res.data[i]['ItemID'], name: res.data[i]['Name'], value: res.data[i]['Price'], stock: res.data[i]['Stock']});
        if(res.data[i]['Stock'] < 150)(
          lowStock.push({image: './Images/AF1.jpg', itemid: res.data[i]['ItemID'], name: res.data[i]['Name'], value: res.data[i]['Price'], stock: res.data[i]['Stock']})
        )
      }
      
      this.setState({
        items : testdata
      })

      this.setState({
        needRestock : lowStock
      })
      console.log(testdata);
    }).catch(err => {
      console.log(err);
    })

  }

  handleRestockIDChange(event){
    this.setState({ restockItemID: event.target.value });
  }
  
  handleRestockAmountChange(event){
    this.setState({ restockAmount: event.target.value });
  }

  handleRestock(event){
    event.preventDefault();

    let restockParams = {
      id: this.state.restockItemID,
      amount: this.state.restockAmount,
      date: moment()
    };
    axios.post('http://localhost:5000/restock', restockParams)
    .then(res => {
      console.log(res);
      if(res.status === 200){
        window.location.reload(true);
      }
    })
  }

  handleLogout(event){
    event.preventDefault();
    localStorage.clear();
    history.push('/');
  }

  getHistory(event){
    event.preventDefault();
    axios.get('http://localhost:5000/getHistory')
    .then(res => {
      console.log(res);
      let testdata = [];
      for(let i = 0; i < res.data.length; i++) {
        testdata.push({orderid: res.data[i]['OrderID'], date: res.data[i]['Date'], quantity: res.data[i]['Quantity'], itemid: res.data[i]['ItemID'], supplierid: res.data[i]['SupplierID']});

      }
      
      this.setState({
        restockHistory : testdata
      })
      console.log(testdata);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { column, items, direction, needRestock, restockHistory } = this.state

    return (
      <div className="Manager-table">
        <h1 className="App-header">
          S T O K E D C L O T H I N G<br></br>
        </h1>
        <form>  
          <center>
          <Button onClick={this.handleLogout}>Logout</Button>
          </center>
        </form>
        <br></br>
        <Tabs defaultIndex={0}>
          <center>
            <TabList>
              <Tab>Manage Items</Tab>
              {/* <Tab>Add Item</Tab> */}
              <Tab>Low Stock Items</Tab>
              <Tab>Restock History</Tab>
            </TabList>
          </center>
          <TabPanel className="ManagePanel">
            <h1 className="App-subhead">
                Restock Item:
            </h1>
            <center>
              <form>
                Enter an Item ID:
                <input type="number" placeholder="Item ID" value={this.state.restockItemID} onChange={this.handleRestockIDChange}></input><br></br>
                Enter amount to restock:
                <input type="number" placeholder="Restock Amount" value={this.state.restockAmount} onChange={this.handleRestockAmountChange}></input><br></br>
                <Button onClick={this.handleRestock}>Restock</Button>
              </form>
            </center>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={column === 'itemid' ? direction : null}
                    onClick={this.handleSort('itemid')}
                  >
                    Item ID
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'name' ? direction : null}
                    onClick={this.handleSort('name')}
                  >
                    Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'value' ? direction : null}
                    onClick={this.handleSort('value')}
                  >
                    Price
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'stock' ? direction : null}
                    onClick={this.handleSort('stock')}
                  >
                    Stock
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(items, ({ itemid, name, value, stock }) => (
                  <Table.Row key={itemid}>
                    <Table.Cell>{itemid}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>${value}</Table.Cell>
                    <Table.Cell>{stock}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TabPanel>
          <TabPanel className="LowStockPanel">
            <h1 className="App-subhead">
              Restock these items!
            </h1>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={column === 'itemid' ? direction : null}
                    onClick={this.handleSort('itemid')}
                  >
                    Item ID
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'name' ? direction : null}
                    onClick={this.handleSort('name')}
                  >
                    Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'value' ? direction : null}
                    onClick={this.handleSort('value')}
                  >
                    Price
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'stock' ? direction : null}
                    onClick={this.handleSort('stock')}
                  >
                    Stock
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(needRestock, ({ itemid, name, value, stock }) => (
                  <Table.Row key={itemid}>
                    <Table.Cell>{itemid}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>${value}</Table.Cell>
                    <Table.Cell>{stock}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TabPanel>
          <TabPanel className="RestockHistory">
            <h1 className="App-subhead">
              Restock History:
            </h1>
            <center>
              <Button onClick={this.getHistory}>Get Restock History</Button>
            </center>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Order ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Quantity
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Item ID
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Supplier ID
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(restockHistory, ({ orderid, date, quantity, itemid, supplierid }) => (
                  <Table.Row key={orderid}>
                    <Table.Cell>{orderid}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                    <Table.Cell>{quantity}</Table.Cell>
                    <Table.Cell>{itemid}</Table.Cell>
                    <Table.Cell>{supplierid}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TabPanel>
            {/* <Tabs>
              <center>
                <TabList>
                  <Tab>Add Tops</Tab>
                  <Tab>Add Bottoms</Tab>
                  <Tab>Add Pants</Tab>
                  <Tab>Add Accessories</Tab>
                </TabList>
              </center>
              <TabPanel className="AddTops">
              </TabPanel>
            </Tabs> */}
          
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
    )
  }
}

export default Manager;