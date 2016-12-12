import React from 'react'
import './LoginModal.css'

class LoginModal extends React.Component {

  render() {
    return(
      // hmmm does this break the code?
      <div className="modal-brackground">
        <div className="loginmodal">
          <img/>
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
        {/*end of loginmodal*/}
        </div>
      {/*end of modal-background*/}
      </div>
    )
  }

}

export default LoginModal;
