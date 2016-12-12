import React from 'react'
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
              autocomplete="off"
              required="required"
            />
            <input
              type="text"
              placeholder="Last Name"
              autocomplete="off"
              required="required"
            />
            <input
              type="email"
              placeholder="email"
              autocomplete="off"
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
              autocomplete="off"
              required="required"
            />
          </div>
          <button className="signupnbtn">Sign Up</button>
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default SignupModal;
