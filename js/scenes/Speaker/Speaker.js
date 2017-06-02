import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  Image
} from 'react-native';

import { styles } from './styles';

import { removeSpeaker } from '../../lib/navigationHelpers';

const Speaker = ({ speakerInfo }) => (
  <View>
    <View style={ styles.speakerHeader }>
      <Text
        style={ styles.exitButton }
        onPress={ () => removeSpeaker() }
      >
        X
      </Text>
      <Text style={ styles.headerText }>About The Speaker</Text>
    </View>
    <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
    <Text>{ speakerInfo.name }!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
  </View>
);

Speaker.propTypes = {
  speakerInfo: PropTypes.object
}

export default Speaker;
