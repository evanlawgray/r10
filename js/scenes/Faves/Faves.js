import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
  View,
  ListView,
} from 'react-native';

import { styles } from './styles';

import SessionPreview from '../../components/SessionPreview';
import SectionHeader from '../../components/SectionHeader';

const Faves = ({ isLoading, isLoadingFaves, sessions, currentNavigatorUID, faveIds }) => {
  return (
    isLoading || isLoadingFaves ?

    <ActivityIndicator size='large' style={ styles.loadingSpinner }/> :

    <ListView
      dataSource={ sessions }
      renderRow={
        (data) =>
          <SessionPreview
            currentNavigatorUID={ currentNavigatorUID }
            data={ data }
            faveIds={ faveIds }
          />
      }
      renderSectionHeader={
        ( sectionData, time ) => (
          <SectionHeader sectionData={ sectionData } time={ time } style={ styles.sectionHeader } />
        )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={ styles.separator } />}
    />
  )
}

Faves.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingFaves: PropTypes.bool.isRequired,
  sessions: PropTypes.object.isRequired,
  currentNavigatorUID: PropTypes.string.isRequired,
  faveIds: PropTypes.array
}

export default Faves;
