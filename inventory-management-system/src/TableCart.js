import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './TableHome.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


class Table3 extends Component {

    render () {
      return (
      <div>
          <BootstrapTable data={this.props.data}>
          <TableHeaderColumn dataField='id' >
            Item ID
          </TableHeaderColumn>
          <TableHeaderColumn isKey={true} dataField='name' dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value' dataSort={true}>
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