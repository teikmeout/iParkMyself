// we need some react
import React from 'react';
// we need some reacDOM manipulation here
import ReactDOM from 'react-dom';
// oh baby, App is our hook!
import App from './components/App.jsx';
// css is shit with no normalize. so let's do this
import './normalize.css';
// some CSS hun, make it look good
import './index.css';

ReactDOM.render(
  <App />,
  docuemnt.querySelector('#root-container')
);
