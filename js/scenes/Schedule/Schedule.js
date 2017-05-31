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
      renderSectionHeader={sectionData => <SectionHeader {...sectionData} />}
    />
  )
}

export default Schedule;
