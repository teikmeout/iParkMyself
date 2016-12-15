import React from 'react'
// in order for Link to work correctly you need the Link method of react-router
import { Link } from 'react-router'
import './LandingPage.css'
// import pin from '../../public/pin.jpg';
import Header from '../Header/Header.jsx';
import Mapa from '../Mapa/Mapa.jsx';
import SignupModal from '../SignupModal/SignupModal.jsx'

class LandingPage extends React.Component {
  // METHOD: constructor is our instance creator and holds the state creation process
  constructor() {
    // when we use classes, sometimes we want the class to inherit properties of it's parent
    // this is when we call thos properties and make them ours too
    super();
    this.state = {
      center: {
        lat: 40.75499040992227,
        lng: -73.98416460524902
      },
      coordinates: {
        lat: 40.75499040992227,
        lng: -73.98416460524902
      }
    }

  } // end of constructor method

  // THIS IS ME BEING HOPEFUL OF THIS SETTING STATE CORRECTLY
  getLocation() {
    console.log('inside get location');
    let display = document.querySelector('.catcher')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
          console.log(this.state.center.lat, this.state.center.lng);
        });
    } else {
        display.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  // I want to see if I can get the location on load
  // and then change the state of the pin

  componentDidMount(){
    console.log('inside componentDidMount from APP');
    this.getLocation();
  }

  render() {
    return(
      <div className="landingpage-container">
        <Header/>
        <div className="map-flex">
          <h2>You are here!</h2>
          <section className="map-container">
            <Mapa
            center={this.state.center}
            coordinates={this.state.coordinates}
            />
          </section>
        </div>
        <Link to="/Newlease"><div className="parkbtn" onClick={this.props.getLocation}></div></Link>
      </div>
    )
  }

}

export default LandingPage;
