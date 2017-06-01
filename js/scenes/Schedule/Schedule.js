import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
  View,
  Text,
  ListView,
} from 'react-native';

import { styles } from './styles';

import SessionPreview from '../../components/SessionPreview';
import SectionHeader from '../../components/SectionHeader';

const Schedule = ({ isLoading, sessions, currentNavigatorUID }) => {
  return (
    isLoading ?
    <ActivityIndicator /> :
    <ListView
      dataSource={ sessions }
      renderRow={(data) => <SessionPreview currentNavigatorUID={ currentNavigatorUID } data={ data } />}
      renderSectionHeader={
        ( sectionData, time ) => (
          <SectionHeader sectionData={ sectionData } time={ time } style={ styles.sectionHeader } />
        )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={ styles.separator } />}
    />
  )
}

Schedule.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  sessions: PropTypes.object.isRequired,
  currentNavigatorUID: PropTypes.string.isRequired
}

export default Schedule;
