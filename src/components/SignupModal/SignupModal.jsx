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

  // METHOD: takes the state and transforms an object that will be used for a POST method
  // args: all inside state
  handleData() {
    // select the things where the data is
    // basically stuff in our local state at this point
    let payload = {
      username: this.state.inputUsername,
      f_name: this.state.inputName,
      l_name: this.state.inputLast,
      email: this.state.inputEmail,
      pass: this.state.inputPassword,
      type: 0
    }
    // type: 0 equals non admin

    //fetch call to DB for a new post on users
    fetch('/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(payload)
    })
    .then()


  }

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
              id="name"
              onChange={(event) => this.handleInput(event)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required="required"
              id="last"
              onChange={(event) => this.handleInput(event)}
            />
            <input
              type="email"
              placeholder="email"
              required="required"
              id="email"
              onChange={(event) => this.handleInput(event)}
            />
            <input
              type="text"
              placeholder="Username"
              required="required"
              id="username"
              onChange={(event) => this.handleInput(event)}
            />
            <input
              type="text"
              placeholder="Password"
              required="required"
              id="pass"
              onChange={(event) => this.handleInput(event)}
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
