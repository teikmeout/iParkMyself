import React from 'react'
import { Link } from 'react-router'
import './SignupModal.css'

class SignupModal extends React.Component {

  render() {
    return(
      // hmmm does this break the code?
      <div className="modal-brackground">
        <div className="signupmodal">
        <div className="logoContainer"></div>
        <header>Sign Up</header>
          <img/>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Name"
              required="required"
            />
            <input
              type="text"
              placeholder="Last Name"
              required="required"
            />
            <input
              type="email"
              placeholder="email"
              required="required"
            />
            <input
              type="text"
              placeholder="Username"
              required="required"
            />
            <input
              type="text"
              placeholder="Password"
              required="required"
            />
          </div>
          <Link to="/home"><button className="signupnbtn">Sign Up</button></Link>
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default SignupModal;
