import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
} from 'react-native';

import Session from './Session';

class SessionContainer extends Component {

  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  constructor() {
    super();

    this.state = {
      isLoading: false
    }
  }

  // componentDidMount() {
  //   let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
  //   fetch(endpoint)
  //     // if fetch is successful, read our JSON out of the response
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({ codes: result });
  //     })
  //     .catch(error => console.log(`Error fetching JSON: ${error}`));
  // }

  // componentDidUpdate() {
  //   if ( this.state.codes && this.state.isLoading ) {
  //     this.setState({ isLoading: false, });
  //   }
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 100 }} animating={true} size="large" color="black" />
      );
    } else {
      return(
        <Session />
      );
    }
  }
 }

 export default SessionContainer;
