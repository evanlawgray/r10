import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  Image,
  ScrollView,
  Linking
} from 'react-native';

import { styles } from './styles';

import { removeSpeaker } from '../../lib/navigationHelpers';

import Button from '../../components/Button';


const Speaker = ({ speakerInfo }) => (
  <View style={ styles.contentWrapper }>
    <View style={ styles.speakerHeader }>
      <Text
        style={ styles.exitButton }
        onPress={ () => removeSpeaker() }
      >
        X
      </Text>
      <Text style={ styles.headerText }>About The Speaker</Text>
    </View>

    <ScrollView>
    <View style={ styles.speakerWrapper }>
      <Image style={styles.speakerImage} source={{ uri:speakerInfo.image }} />
      <Text style={ styles.speakerName }>{ speakerInfo.name }</Text>
      <Text style={ styles.speakerBio }>{ speakerInfo.bio }</Text>


      <Button buttonText='Read More on Wikipedia' onPress={ () => Linking.openURL(speakerInfo.url) } />
      </View>
    </ScrollView>
  </View>
);

Speaker.propTypes = {
  speakerInfo: PropTypes.object
}

export default Speaker;
