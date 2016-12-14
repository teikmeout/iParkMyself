import React from 'react'
// in order for Link to work correctly you need the Link method of react-router
import { Link } from 'react-router'
import './LandingPage.css'
// import pin from '../../public/pin.jpg';
import Header from '../Header/Header.jsx';
import Mapa from '../Mapa/Mapa.jsx';

class LandingPage extends React.Component {
        // <header>
        //   <h4>@User</h4>
        //   <h3>iParkMyself</h3>
        // </header>

  render() {
    const newlocation = {
          lat: 40.739969664575234,
          lng: -73.98995369451217
        };
            // <Mapa />
    return(
      <div className="landingpage-container">
        <Header/>
        <div className="map-flex">
          <h2>You are here!</h2>
          <section className="map-container">
          </section>
        </div>
        <Link to="/History"><div className="parkbtn" onClick={this.props.getLocation}></div></Link>
      </div>
    )
  }

}

export default LandingPage;
