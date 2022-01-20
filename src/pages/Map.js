import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 43.71,
      lng: 7.26
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
        <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgCmZFwUDdYbcGAe49GEiDI9w3LBwefh0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.7101728}
            lng={7.2619532}
            text="My Marker"
          />
        </GoogleMapReact>
        </div>

      </>
    );
  }
}

export default Map
