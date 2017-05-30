import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { _fetchConduct } from '../../redux/modules/conduct';

import {
  ActivityIndicator,
} from 'react-native';

import About from './About';

class AboutContainer extends Component {

  static propTypes = {
    codes: PropTypes.array.isRequired
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  constructor() {
    super();

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.props.dispatch( _fetchConduct() );
  }

  componentDidUpdate() {
    if ( this.props.codes && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render() {
    if ( this.state.isLoading ) {
      return (
        <ActivityIndicator style={{ marginTop: 100 }} animating={true} size="large" color="black" />
      );
    } else {
      return(
        <About codes={this.props.codes} />
      );
    }
  }
 }

 function mapStateToProps(state) {
  return {
    codes: state.conduct.conductData,
  };
}

 export default connect(mapStateToProps)(AboutContainer);
