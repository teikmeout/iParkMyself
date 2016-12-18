import React from 'react'
import { Link } from 'react-router'
import './LoginModal.css'

class LoginModal extends React.Component {

  switchToSignup() {
    const loginmodal = document.querySelector('#signin-modal-brackground');
    const signupmodal = document.querySelector('#modal-brackground');

  }

  // I don't knwo how to use react-router yet.
  // I'm writting my functions here in every place since I can't
  // do dry code and keep it in App
  handleInput(event) {
    switch(event.target.id) {
      case "username": {
        this.setState({
          inputUsername: event.target.value
        })
        console.log(this.state.inputUsername);
        break;
      }
      case "pass": {
        this.setState({
          inputPassword: event.target.value
        })
        break;
      }
    } // end of switch statemtnt
  }// end of handle input

  render() {
    return(
      // hmmm does this break the code?
      <div className="signin-modal-brackground">
        <div className="loginmodal">
        <div className="logoContainer"></div>
        <header>Log In</header>
          <img/>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Username"
              required="required"
              id="username"
              onChange={(event) => this.handleInput(event)}
            /> <br />
            <input
              type="text"
              placeholder="Password"
              required="required"
              id="pass"
              onChange={(event) => this.handleInput(event)}
            />
          </div>
          <Link to={'/'}><button className="signinbtn">Log In</button></Link>
          <Link><button className='signinbtn' onClick={this.props.toggleSignin}>Cancel</button></Link>
          <Link to={'/'}><p className="signinbtn">Sign Up</p></Link>
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default LoginModal;
