import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import './Mapa.css'

class Mapa extends React.Component {

  render() {
    // creating a map container
    const mapContainer = <div className="map-container"></div>

    return(
      <GoogleMapLoader
        containerElement = {mapContainer}
        googleMapElement = {
          <GoogleMap>
            defaultZoom={15}
            defaultCenter={this.props.location}
            options={{streetViewControl: false, mapTypeControl: false}}
          </GoogleMap>
        }
      />
    )
  }

}

export default Mapa;
