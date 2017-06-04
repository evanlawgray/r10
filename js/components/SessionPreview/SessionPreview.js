import React from 'react';
import PropTypes from 'prop-types';

import {
  LayoutAnimation,
  ActivityIndicator,
  Platform,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../config/styles';

import { styles } from './styles';

import { goToSession } from '../../lib/navigationHelpers';

const SessionPreview = ({ currentNavigatorUID, data, faveIds }) => {

  let isFaved;

  return (
      <TouchableHighlight
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

        {
          isFaved = faveIds.includes(data.session_id)
        }

        {
          !isFaved &&
          <Icon
            name={ Platform.OS === 'ios' ? 'ios-heart' : 'md-heart' }
            size={ 15 }
            style={ styles.heartIcon }
          />
        }

      </View>
    </TouchableHighlight>
  )
}

SessionPreview.propTypes = {
  currentNavigatorUID: PropTypes.string.isRequired,
  data: PropTypes.object,
  faveIds: PropTypes.array
}

export default SessionPreview;
