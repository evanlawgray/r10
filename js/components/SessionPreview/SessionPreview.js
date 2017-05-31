import React from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { goToSession } from '../../lib/navigationHelpers';

const SessionPreview = ({ currentNavigatorUID, data }) => {
  return (
  <TouchableHighlight
    //add function to pop session to nav stack here...
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
