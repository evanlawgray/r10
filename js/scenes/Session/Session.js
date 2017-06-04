import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  TouchableOpacity,
  Platform,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../config/styles';

import { styles } from './styles';

import { goToSpeaker } from '../../lib/navigationHelpers';

import { createFave } from '../../config/models';

import Button from '../../components/Button';

const Session = ({ sessionData, speakerInfo }) => (
  <View>
    <View>
      <Text>
        { sessionData.location }
      </Text>

      <Icon
        name={ Platform.OS === 'ios' ? 'ios-heart' : 'md-heart' }
        size={ 24 }
        style={ styles.heartIcon }
      />
    </View>

    <Text>{ sessionData.title }</Text>

    <Text>{ moment.unix(sessionData.start_time).format('h:mm A') }</Text>

    <Text>
      { sessionData.description }
    </Text>

    <TouchableHighlight
      onPress={ () => goToSpeaker( speakerInfo ) }
      underlayColor={ colors.lightGrey }
      activeOpacity={ 0.5 }
    >
      <View>
        <Text>Presented by:</Text>
        <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
      </View>
    </TouchableHighlight>

    <View style={ styles.buttonContainer }>
      <Button buttonText='Add To Faves' onPress={ createFave } data={ sessionData.session_id } />
    </View>
  </View>
);

Session.propTypes = {
  sessionData: PropTypes.object,
  speakerInfo: PropTypes.object
}

export default Session;
