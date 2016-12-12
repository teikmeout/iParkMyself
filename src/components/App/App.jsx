import React from 'react';
import './App.css';

// let's try our login modal
import LoginModal from '../LoginModal/LoginModal.jsx';
// trying signup modal
import SignupModal from '../SignupModal/SignupModal.jsx';

class App extends React.Component {
  // METHOD: constructor is our instance creator and holds the state creation process
  constructor() {
    // when we use classes, sometimes we want the class to inherit properties of it's parent
    // this is when we call thos properties and make them ours too
    super();
    this.state = {
      truth: 'fuck yeah'
    }

  } // end of constructor method

  // METHOD: render will finally throw stuff out to the hook
  render() {
    return(
      <div>
        {/*<h1>{this.state.truth}</h1>*/}
        {/*<LoginModal/>*/}
        <SignupModal/>
      </div>
    )
  }

}

// DO NOT FORGET TO EXPORT YOUR SHIT
export default App;
