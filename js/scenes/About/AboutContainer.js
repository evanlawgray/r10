import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { _fetchConduct } from '../../redux/modules/conduct';

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

  componentDidMount() {
    this.props.fetchConduct();
  }

  render() {
    return(
      <About isLoading={this.props.isLoading} codes={this.props.codes} />
    );
  }
 }

function mapStateToProps( state ) {
  return {
    codes: state.conduct.conductData,
    isLoading: state.conduct.isLoading
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchConduct() {
      dispatch( _fetchConduct() )
    }
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
