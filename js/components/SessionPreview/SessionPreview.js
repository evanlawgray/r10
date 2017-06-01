import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../config/styles';

import { styles } from './styles';

import { goToSession } from '../../lib/navigationHelpers';

const SessionPreview = ({ currentNavigatorUID, data }) => {
  return (
  <TouchableHighlight
    //add function to pop session to nav stack here...
    onPress={ () => goToSession( currentNavigatorUID, data ) }
    underlayColor={ colors.lightGrey }
    activeOpacity={ 0.5 }
  >
    <View style={ styles.listItem }>
      <Text style={ styles.sessionTitle }>
        { data.title }
      </Text>
      <Text style={ styles.sessionLocation }>
        { data.location }
      </Text>
      <Icon name={ 'ios-heart' } size={ 15 } style={ styles.heartIcon } />
    </View>
  </TouchableHighlight>
  )
}

SessionPreview.propTypes = {
  currentNavigatorUID: PropTypes.string.isRequired,
  data: PropTypes.object
}

export default SessionPreview;
