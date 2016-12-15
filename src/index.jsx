// we need some react
import React from 'react';
// deconstructing the react-dom npm and taking only the render method
// old--> import ReactDOM from 'react-dom';
import {render} from 'react-dom';

// SOME AMAZING REACT ROUTER STUFF HERE
// importing methods of router route and hashHistory from react-router
// this is to avoid importing ALL OF react-router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


// oh baby, App is our hook!
import App from './components/App/App.jsx';
// since we are using react-router might as well import the views that we need
import Newlease from './components/Newlease/Newlease.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';
import SignupModal from './components/SignupModal/SignupModal.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

// css is shit with no normalize. so let's do this
import './normalize.css';
// some CSS hun, make it look good
import './index.css';

// <SignupModal/>

// old--> ReactDOM.render(
render(
  // <App />,
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path='/login' component={LoginModal} />
      <Route path='/signup' component={SignupModal} />
      <Route path='/newlease' component={Newlease} />
    </Route>
  </Router>,
  document.querySelector('#root-container')
);
