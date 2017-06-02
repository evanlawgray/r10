import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  Image
} from 'react-native';

import { styles } from './styles';

const Speaker = ({ speakerInfo }) => (
  <View>
    <View style={ styles.speakerHeader }>
      <Text>X</Text>
      <Text>About The Speaker</Text>
    </View>
    <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
    <Text>{ speakerInfo.name }</Text>
  </View>
);

Speaker.propTypes = {
  speakerInfo: PropTypes.object
}

export default Speaker;
