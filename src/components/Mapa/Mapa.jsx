import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import './Mapa.css'

class Mapa extends React.Component {

  render() {
    // creating a map container
    const mapContainer = <div className="mapa-container"></div>

    return(
      <GoogleMapLoader
        containerElement = {mapContainer}
        googleMapElement = {
          <GoogleMap>
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}
          </GoogleMap>
        }
      />
    )
  }

}

export default Mapa;
