import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
} from 'react-native';

import About from './About';

class AboutContainer extends Component {

  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  constructor() {
    super();

    this.state = {
      codes: [],
      isLoading: true
    }
  }

  componentDidMount() {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then((response) => response.json())
      .then((result) => {
        this.setState({ codes: result });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }

  componentDidUpdate() {
    if ( this.state.codes && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 100 }} animating={true} size="large" color="black" />
      );
    } else {
      return(
        <About codes={this.state.codes} />
      );
    }
  }
 }

 export default AboutContainer;
