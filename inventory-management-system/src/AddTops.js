import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class AddTops extends Component{
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render () {
		return (
			<div>
				<h1 className="App-subhead">
					Add Item:
				</h1>
				<br></br>
				<form>
					<center>
						Image URL:
						<input type="text" placeholder="URL" value={this.state.email} onChange={this.handleEmailChange}></input><br/><br/>
						Name:
						<input type="text" placeholder="Name" value={this.state.password} onChange={this.handlePasswordChange}></input><br/><br/>
						Price:
						<input type="text" placeholder="Price" value={this.state.password} onChange={this.handlePasswordChange}></input><br/><br/>
						Gender:
						<input type="text" placeholder="Gender" value={this.state.password} onChange={this.handlePasswordChange}></input><br/><br/>
						Stock:
						<input type="text" placeholder="Stock" value={this.state.password} onChange={this.handlePasswordChange}></input><br/><br/>
						<Button onClick={this.checkLogin}>Add Item</Button>
					</center>
				</form>
			</div>
		);
	}
}

export default AddTops;