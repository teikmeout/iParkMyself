import React from 'react'
import './LandingPage.css'
// import pin from '../../public/pin.jpg';

class LandingPage extends React.Component {

  render() {
    return(
      <div className="landingpage-container">
        <header>
          <h4>@User</h4>
          <h3>iParkMyself</h3>
        </header>
        <div className="map-flex">
          <h2>You are here!</h2>
          <section className="map-container">

          </section>
        </div>
        <div className="parkbtn"></div>
      </div>
    )
  }

}

export default LandingPage;
