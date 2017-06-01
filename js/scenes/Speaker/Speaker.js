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
    <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
    <Text>{ speakerInfo.name }</Text>
  </View>
);

Speaker.propTypes = {
  speakerInfo: PropTypes.object
}

export default Speaker;
