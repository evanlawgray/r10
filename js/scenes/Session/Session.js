import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import { styles } from './styles';

const Session = ({ sessionData, speakerInfo }) => (
  <View>
    <View>
      <Text>
        { sessionData.location }
      </Text>
    </View>
    <Text>{ sessionData.title }</Text>
    <Text>{ moment.unix(sessionData.start_time).format('h:mm A') }</Text>
    <Text>
      { sessionData.description }
    </Text>
    <View>
      <Text>Presented by:</Text>
      <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
      <Text>{speakerInfo.bio}</Text>
    </View>
  </View>
);

export default Session;
