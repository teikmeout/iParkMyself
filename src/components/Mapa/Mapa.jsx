import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import './Mapa.css'

// class Mapa extends React.Component {
//   renderMap() {
//     <GoogleMapLoader
//       containerElement = {mapContainer}
//       googleMapElement = {
//         <GoogleMap>
//           defaultZoom={15}
//           defaultCenter={this.props.center}
//           options={{streetViewControl: false, mapTypeControl: false}}
//         </GoogleMap>
//       }
//     />
//   }
//   render() {
//     // creating a map container
//     const mapContainer = <div className="mapa-container"></div>

//     return(
//       <h1>Hi there</h1>
//     )
//   }

// }



function Mapa(props) {
  return (
    <GoogleMapLoader
      containerElement = {
        <div
          style={{
            height: "100%",
            width: "100%"
          }}
          className="contenedor-mapa"
        />
      }

      googleMapElement = {
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={15}
          defaultCenter={props.center}
          options={{streetViewControl: false, mapTypeControl: false}}
        >
        <Marker
          position={props.coordinates}
          place={props.place}
        />
        </GoogleMap>
      }
    />
  );
}

export default Mapa;
