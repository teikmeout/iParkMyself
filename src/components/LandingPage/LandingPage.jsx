import React from 'react'
// in order for Link to work correctly you need the Link method of react-router
import { Link } from 'react-router'
import './LandingPage.css'
// import pin from '../../public/pin.jpg';
import Header from '../Header/Header.jsx';
import Mapa from '../Mapa/Mapa.jsx';
import SignupModal from '../SignupModal/SignupModal.jsx'

class LandingPage extends React.Component {
        // <header>
        //   <h4>@User</h4>
        //   <h3>iParkMyself</h3>
        // </header>
        // <SignupModal/>

  render() {
    const newlocation = {
          lat: 40.739969664575234,
          lng: -73.98995369451217
        };
    return(
      <div className="landingpage-container">
        <Header/>
        <div className="map-flex">
          <h2>You are here!</h2>
          <section className="map-container">
            <Mapa
            center={this.props.center}
            coordinates={this.props.coordinates}/>
          </section>
        </div>
        <Link to="/Newlease"><div className="parkbtn" onClick={this.props.getLocation}></div></Link>
      </div>
    )
  }

}

export default LandingPage;
