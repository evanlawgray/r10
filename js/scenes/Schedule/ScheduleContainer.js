import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  ListView
} from 'react-native';

import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.fetchSessions();
    this.props.fetchFaves();
  }

  render() {
    return (
        <View>
            <Schedule
              isLoading={ this.props.isLoading }
              isLoadingFaves={ this.props.isLoadingFaves }
              sessions={ this.props.dataSource }
              faveIds={ this.props.faveIds }
              currentNavigatorUID='schedule'
            />
        </View>
    );
  }
 }

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged : (s1, s2) => s1 !== s2
});

 function mapStateToProps( state ) {
  return {
    dataSource: ds.cloneWithRowsAndSections(
      state.sessions.sessionsData.dataBlob,
      state.sessions.sessionsData.sectionIds,
      state.sessions.sessionsData.rowIds,
    ),
    isLoading: state.sessions.isLoading,
    isLoadingFaves: state.faves.isLoading,
    faveIds: state.faves.faveIds
  }
 }

 function mapDispatchToProps( dispatch ) {
  return {
    fetchSessions() {
      dispatch( _fetchSessions() )
    },
    fetchFaves( ) {
      dispatch( _fetchFaves() )
    }
  }
}

ScheduleContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingFaves: PropTypes.bool.isRequired,
  dataSource: PropTypes.object,
  fetchSessions: PropTypes.func.isRequired,
  fetchFaves: PropTypes.func.isRequired,
  faveIds: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
