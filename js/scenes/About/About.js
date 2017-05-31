import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import { styles } from './styles';

import ConductItem from '../../components/ConductItem';

const {height, width} = Dimensions.get('window');

const About = ({ codes, isLoading }) => {
  if( isLoading ) {
    return <ActivityIndicator />
  } else {
    return (
      <ScrollView style={ styles.container }>
        <View style={ styles.imageContainer }>
          <Image
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>
        <Text style={ styles.codesText }>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={ styles.codesTitle }>Date & Venue</Text>
        <Text style={ styles.codesText }>The R10 conference will take place on Tuesday, June 2017 in Vancouver, BC.</Text>
        <Text style={ styles.codesTitle }>Code of Conduct</Text>
        {
          codes.map(( code ) => (
            <ConductItem key={code.title + Date.now()} code={ code }/>
          ))
        }
      </ScrollView>
    )
  }
}

About.propTypes = {

}

export default About;
