import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../config/styles';

import { styles } from './styles';

import { goToSpeaker } from '../../lib/navigationHelpers';

import { createFave, deleteFave } from '../../config/models';

import Button from '../../components/Button';

const Session = ({ faveIds, sessionData, speakerInfo }) => (
  <ScrollView style={ styles.contentWrapper }>
    <View style={ styles.headerContainer }>
      <Text style={ styles.locationText }>
        { sessionData.location }
      </Text>

      {
        faveIds.includes( sessionData.session_id ) &&
          <Icon
            name={ Platform.OS === 'ios' ? 'ios-heart' : 'md-heart' }
            size={ 16 }
            style={ styles.heartIcon }
          />
      }
    </View>

    <Text style={ styles.sessionTitle }>
      { sessionData.title }
    </Text>

    <Text style={ styles.startTime }>
      { moment.unix(sessionData.start_time).format('h:mm A') }
    </Text>

    <Text style={ styles.description }>
      { sessionData.description }
    </Text>
    {
      speakerInfo &&
        <TouchableHighlight
          style={ styles.speakerHighlight }
          onPress={ () => goToSpeaker( speakerInfo ) }
          underlayColor={ colors.lightGrey }
          activeOpacity={ 0.5 }
        >
          <View style={ styles.speakerContainer }>
            <Text style={ styles.presentedBy }>
              Presented by:
            </Text>

            {
              speakerInfo.image ?
                <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
                :
                <ActivityIndicator size='large' style={ styles.loadingSpinner }/>
            }

            <Text style={ styles.speakerName }>
              { speakerInfo.name }
            </Text>

            <View style={ styles.separator } />
          </View>
        </TouchableHighlight>
    }
    <View style={ styles.buttonContainer }>
      {
        faveIds.includes( sessionData.session_id ) ?
          <Button
            buttonText='Remove From Faves'
            onPress={ deleteFave }
            data={ sessionData.session_id }
          /> :
          <Button
            buttonText='Add To Faves'
            onPress={ createFave }
            data={ sessionData.session_id }
          />
      }
    </View>
  </ScrollView>
);



Session.propTypes = {
  faveIds: PropTypes.array,
  sessionData: PropTypes.object,
  speakerInfo: PropTypes.object
}

export default Session;
