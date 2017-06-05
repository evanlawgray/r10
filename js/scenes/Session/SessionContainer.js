import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { _fetchSpeaker } from '../../redux/modules/speakers';

import Session from './Session';

class SessionContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount() {
    this.props.fetchSpeaker( this.props.sessionData.speaker );
  }

  render() {
    return (
      <Session faveIds={ this.props.faveIds } sessionData={ this.props.sessionData } speakerInfo={ this.props.speakerInfo }/>
    )
  }
}

function mapStateToProps( state ) {
  return {
    speakerInfo: state.speakers.speakerInfo,
    faveIds: state.faves.faveIds
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
  faveIds: PropTypes.array,
  fetchSpeaker: PropTypes.func.isRequired,
  sessionData: PropTypes.object,
  speakerInfo: PropTypes.object
}



export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
