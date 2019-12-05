import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './TableHome.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Item from "./CustomerUI/Item";
import History from './History';

class Table1 extends Component {
    constructor(props) {
      super(props);
      console.log("props: "+ this.props.data['id']);
    }

    imageFormatter(cell){
      // console.log('Cell: ' + cell);
      return (
      <div>
        <Link to="/Item/:itemID" >
          < img style = {{height: 100}} src={require(""+cell)}/>
        </Link>
      </div>
      );
    }
        
    itemLink(id){
      // console.log('ID: ' + id);
      return (
      <div>
        <Link to={"#"} onClick={() => {
          History.push('/Item/' + id)
        }} >
          View
        </Link>
      </div>
      );
    }

    render () {
      return (
      <div>
        <BootstrapTable data={this.props.data} striped={true} hover={true}>      
          <TableHeaderColumn dataField={'image'} dataFormat={this.imageFormatter}>
            Image
          </TableHeaderColumn>
          <TableHeaderColumn isKey={true} dataField='name' dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value' dataSort={true}>
            Value
          </TableHeaderColumn>
          <TableHeaderColumn dataField='id' dataFormat={this.itemLink}>
            Buy
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}
};

export default Table1;



