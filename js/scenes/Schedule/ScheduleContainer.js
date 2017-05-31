import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  ListView,
  ActivityIndicator,
} from 'react-native';

import { _fetchSessions } from '../../redux/modules/sessions';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.fetchSessions();
  }

  render() {
    return (
        <View>
            <Schedule
              isLoading={ this.props.isLoading }
              sessions={ this.props.dataSource }
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
    isLoading: state.sessions.isLoading
  }
 };

 function mapDispatchToProps( dispatch ) {
  return {
    fetchSessions() {
      dispatch( _fetchSessions() )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
