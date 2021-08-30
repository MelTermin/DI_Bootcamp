import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,

  
} from "react-google-maps";
import React from 'react'
import './App.css';


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
 
  
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 31.903410, lng: 34.806831 }}
  >
    <Marker
      position={{ lat:  31.903410, lng: 34.806831 }}
    />
    

    
  </GoogleMap>
));




function App() {

  return (
  <div>
  <h1>GOOGLE MAPS API with REACT JS</h1>
<MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtyusEwqMKwxCpzuUPTMiSod-ySuuRtQ8&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
  </div>
  );
}

export default App;
