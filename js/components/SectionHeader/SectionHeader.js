import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  View,
  Text,
} from 'react-native';

import { styles } from './styles.js';

const SectionHeader = ({ time }) => (
  <View>
    <Text style={ styles.timeHeader }>{moment.unix(time).format('h:mm A')}</Text>
  </View>
);

SectionHeader.propTypes = {
  time: PropTypes.number.isRequired,
}

export default SectionHeader;
