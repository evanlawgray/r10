import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { _fetchSpeaker } from '../../redux/modules/speakers';

import Session from './Session';

class SessionContainer extends Component {

  componentDidMount() {
    this.props.fetchSpeaker( this.props.sessionData.speaker );
  }

  render() {
    return (
      <Session sessionData={ this.props.sessionData } speakerInfo={ this.props.speakerInfo }/>
    )
  }
}

function mapStateToProps( state ) {
  return {
    speakerInfo: state.speakers.speakerInfo
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchSpeaker( speakerId ) {
     dispatch( _fetchSpeaker( speakerId ) )
    }
  }
}

SessionContainer.propTypes = {
  fetchSpeaker: PropTypes.func.isRequired,
  sessionData: PropTypes.object,
  speakerInfo: PropTypes.object
}



export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
