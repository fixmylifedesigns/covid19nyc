import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import ReactLogo from "./reactlogo.png";
// import lightmode from "./mapstyles/lightMode";
// import darkmode from "./mapstyles/darkMode";
// import stolen from "./ulock.png";
// import stolenreport from "./stolenbikes.json";
// import MenuButton from './material-ui/menu'

function Map(props) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  //   const mapMode = () => {
  //     if (localStorage.getItem("mapmode") === "darkmode") {
  //       return darkmode;
  //     }
  //     if (localStorage.getItem("mapmode") === "lightmode") {
  //       return lightmode;
  //     } else {
  //       return lightmode;
  //     }
  //   };
// 
  return (
    <div>
      <GoogleMap
        defaultZoom={props.lat && props.lng ? 15 : 10.4}
        defaultCenter={{ lat: props.lat || 40.7128, lng: props.lng || -74.006 }}
        // defaultOptions={{ styles: mapMode() }}
      />
      <Marker
        key="location"
        position={{
          lat: props.lat,
          lng: props.lng
        }}
        icon={{
        //   url: ReactLogo,
          scaledSize: new window.google.maps.Size(45, 60)
        }}
      />
      {/* {stolenreport.map((ulock, i) => {
        console.log(ulock);
        return (
          <Marker
            key={ulock.id}
            position={{
              lat: ulock.lat,
              lng: ulock.lng
            }}
            icon={{
              url: stolen,
              scaledSize: new window.google.maps.Size(45, 60)
            }}
            onClick={() => {
              console.log(ulock);
              setSelectedMarker(ulock);
            }}
          />
        );
      })} */}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.lat,
            lng: selectedMarker.lng
          }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <p>Help my bike was stolen please contact me </p>
            <div style={{ display: "flex" }}>
              <button>Call</button>
              <button>Text</button>
            </div>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap(props) {
  return (
    <div
      style={{
        // overflow: "hidden",
        width: "100vw",
        height: "100vh",
        margin: "auto",
        // borderRadius: "30px"
      }}
    >
      {/* {console.log(props.mapMode)} */}
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={props.lat}
        lng={props.lng}
        mapMode={props.mapMode}
        handleMapMode={props.handleMapMode}
      />
    </div>
  );
}
