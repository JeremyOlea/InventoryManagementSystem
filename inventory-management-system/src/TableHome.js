import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './TableHome.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Item from "./CustomerUI/Item";


function imageFormatter(cell){
  console.log('Cell: ' + cell);
  return (
  <div>
    <Link to="/Item/:itemID" >
      < img style = {{height: 100}} src={require(""+cell)}/>
    </Link>
  </div>
  );
}

function itemLink(id){
  console.log('ID: ' + id);
  return (
  <div>
    <Link to={"/Item/"+id} >
      View
    </Link>
  </div>
  );
}




class Table1 extends Component {

    render () {
      return (
      <div>
        <BootstrapTable data={this.props.data} striped={true} hover={true}>      
          <TableHeaderColumn dataField={'image'} dataFormat={imageFormatter}>
            Image
          </TableHeaderColumn>
          <TableHeaderColumn isKey={true} dataField='name' dataSort={true}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value' dataSort={true}>
            Value
          </TableHeaderColumn>
          <TableHeaderColumn dataField='id' dataFormat={itemLink}>
            Buy
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}
};

export default Table1;



