import React from 'react'
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
    const location = [{
          lat: 40.739969664575234,
          lng: -73.98995369451217
        }];
    return(
      <div className="landingpage-container">
        <Header/>
        <div className="map-flex">
          <h2>You are here!</h2>
          <section className="map-container">
            <Mapa location={location}/>
          </section>
        </div>
        <div className="parkbtn"></div>
      </div>
    )
  }

}

export default LandingPage;
