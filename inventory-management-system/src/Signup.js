import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          complete: false,
        };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCpasswordChange = this.handleCpasswordChange.bind(this);
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }
    
      handleUnameChange(event){
        this.setState({username: event.target.value});
      }
      
      handlePasswordChange(event){
        this.setState({password: event.target.value});
      }
    
      handleCpasswordChange(event){
        this.setState({confirmPassword: event.target.value});
      }
    
    render() {
        return (
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <form>
                  <p className="h4 text-center mb-4">Sign up</p>
                  <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Username
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    onChange={this.handleUnameChange}
                  />
                  <br />
                  <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                    onChange={this.handleEmailChange}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                    onChange={this.handlePasswordChange}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                    onChange={this.handleCpasswordChange}
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="submit" onClick={() => this.signUp()}>
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    }

    signUp() {
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
    }
}

export default Signup;