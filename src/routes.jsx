import React from 'react';
import App from './components/App/App.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';
import SignupModal from './components/SignupModal/SignupModal.jsx';
import Newlease from './components/Newlease/Newlease.jsx';

import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={App} >
    {/* REACT ROUTER INDEX ROUTES HAVE NOT PATH*/}
    <IndexRoute component={LandingPage} />
    <Route path="/login" component={LoginModal} />
    <Route path="/signup" component={SignupModal} />
    <Route path="/newlease" component={Newlease} />
  </Route>
);

// this is magic that happened thanks to some beers and happy coding
// special thanks to "b-crypt Bill" for being an amazing programmer
// check his shit out here @WilliamMayo11 github
