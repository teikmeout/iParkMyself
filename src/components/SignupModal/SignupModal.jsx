import React from 'react'
import { Link } from 'react-router'
import './SignupModal.css'

class SignupModal extends React.Component {
  // I'm sorry I needed state so I have not learned to pass it down. I'll hardcode this. good bye
  constructor() {
    // when we use classes, sometimes we want the class to inherit properties of it's parent
    // this is when we call thos properties and make them ours too
    super();
    this.state = {
      inputName: '',
      inputLast: '',
      inputEmail: '',
      inputUsername: '',
      inputPassword: ''
    }

  } // end of constructor method

  // I'm honestly taking this idea from joey but implementing it poorly
  // cambioDeEstado(type,val) {
  //   this.setState({
  //     type: val
  //   })
  // }

  handleInput(event) {
    event.target.id
    switch(event.target.id) {
      case "name": {
        this.setState({
          inputName: event.target.value
        })
        console.log(this.state.inputName);
        break;
      }
      case "last": {
        this.setState({
          inputLast: event.target.value
        })
        break;
      }
      case "email": {
        this.setState({
          inputEmail: event.target.value
        })
        break;
      }
      case "username": {
        this.setState({
          inputUsername: event.target.value
        })
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
