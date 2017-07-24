import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Map extends Component {

  static route = {
    navigationBar: {
      title: 'Map'
    }
  }

  render(){
    return(
      <MapView
        provider={ PROVIDER_GOOGLE }
        initialRegion={{
          latitude: 49.263448,
          longitude: -123.138168,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}

export default Map;
