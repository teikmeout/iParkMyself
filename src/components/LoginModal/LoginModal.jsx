import React from 'react'
import { Link } from 'react-router'
import './LoginModal.css'

class LoginModal extends React.Component {

  switchToSignup() {
    const loginmodal = document.querySelector('#signin-modal-brackground');
    const signupmodal = document.querySelector('#modal-brackground');

  }

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
            /> <br />
            <input
              type="text"
              placeholder="Password"
              required="required"
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
