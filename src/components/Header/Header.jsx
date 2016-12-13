import React from 'react'
import './Header.css'
// import pin from '../../public/pin.jpg';

class Header extends React.Component {

  render() {
    return(
        <header className="component">
          <h4>@User</h4>
          <h3>iParkMyself</h3>
        </header>
    )
  }

}

export default Header;
