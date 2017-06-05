import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Speaker speakerInfo={ this.props.speakerInfo } />
    );
  }
}

// function mapStateToProps( state ) {
//   return {
//     speakerInfo: state.speakers.speakerInfo
//   }
// }

// function mapDispatchToProps( dispatch ) {
//   return {
//   }
// }

SpeakerContainer.propTypes = {
  speakerInfo: PropTypes.object
}

// export default connect(mapStateToProps)(SpeakerContainer);

export default SpeakerContainer;
