import React from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { colors } from '../../config/styles';

import { goToSession } from '../../lib/navigationHelpers';

import SessionContainer from '../../scenes/Session';

const SessionPreview = ({ currentNavigatorUID, data }) => {
  return (
  <TouchableHighlight
    //add function to pop session to nav stack here...
    onPress={ () => goToSession( currentNavigatorUID, data ) }
    underlayColor={ colors.lightGrey }
    activeOpacity={ 0.5 }
  >
    <View>
      <Text>
        { data.title }
      </Text>
      <Text>
        { data.location }
      </Text>
      <Text>
        { data.time }
      </Text>
    </View>
  </TouchableHighlight>
  )
}

export default SessionPreview;
