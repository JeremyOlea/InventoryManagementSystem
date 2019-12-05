import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';


function imageFormatter(cell){
  console.log('Cell: ' + cell);
  return (
  <div>
    <Link to="/cart" >
      < img style = {{height: 100}} src={require(""+cell)} />
    </Link>
  </div>
  );
}



class Table3 extends Component {

    render () {

      const selectedRow = {
        mode: 'checkbox'
      };

      return (
      <div>
          <BootstrapTable data={this.props.data}>
          <TableHeaderColumn dataField='id' >
            Item ID
          </TableHeaderColumn>
          <TableHeaderColumn isKey={true} dataField='name' dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Price' dataSort={true}>
            Value
          </TableHeaderColumn>
          <TableHeaderColumn dataField='quantity'>
            Quantity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='size'>
            Size
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}
  };
  
  export default Table3;