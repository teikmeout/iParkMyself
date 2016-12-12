import React from 'react'
import './LoginModal.css'

class LoginModal extends React.Component {

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
          <button className="signinbtn">Log In</button>
          <button className='signinbtn' onClick={this.props.toggleSignin}>Cancel</button>
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default LoginModal;
