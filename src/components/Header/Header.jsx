import React from 'react'
import {Link} from 'react-router'
import './Header.css'
// import pin from '../../public/pin.jpg';

class Header extends React.Component {

  render() {
    return(
        <header className="header-stuff">
          <Link to='/Signup'><h4>@User</h4></Link>
          <Link to='/'><h3>iParkMyself</h3></Link>
        </header>
    )
  }

}

export default Header;
