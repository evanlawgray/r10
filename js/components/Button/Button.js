import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Linking,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { colors } from '../../config/styles';

import { styles } from './styles';

import LinearGradient from 'react-native-linear-gradient';

const Button = ({ buttonText, onPress, data }) => {
  return(
    <View style={ styles.buttonContainer }>
      <TouchableOpacity
        onPress={ () => onPress( data ) }
      >
        <LinearGradient
          style={ styles.linearGradient }
          colors={[colors.blue, colors.purple]}
          start={{x: 1, y: 0}}
          end={{x: -1, y: 1}}
          locations={[0, .6]}
        >

          <Text style={ styles.buttonText }>{buttonText}</Text>

        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  data: PropTypes.string
}

export default Button;
