import React from 'react'
import './LoginModal.css'

class LoginModal extends React.Component {

  render() {
    return(
      // hmmm does this break the code?
      <div className="modal-brackground">
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
              autocomplete="off"
              required="required"
            />
          </div>
          <button className="signinbtn">Sign In</button>
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default LoginModal;
