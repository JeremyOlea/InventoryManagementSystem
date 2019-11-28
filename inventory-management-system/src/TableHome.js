import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './TableHome.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'



function imageFormatter(cell, row){
  console.log(cell);
  return (
  < img style = {{height: 100}} src={require(""+cell)} />
  );
}



class Table1 extends Component {

    render () {
      return (
      <div>
          <BootstrapTable data={this.props.data} striped={true} hover={true}>
          <TableHeaderColumn dataField='image' dataFormat={imageFormatter}>
            Image
          </TableHeaderColumn>
          <TableHeaderColumn isKey={true} dataField='name' dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value' dataSort={true}>
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}
};

export default Table1;



