import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

const ConductItem = ({ code }) => {
  return (
    // <View>
    //   <Text style={ styles.codesSubtitle }>{ code.title }</Text>
    //   <Text style={ styles.codesText }>{ code.description }</Text>
    // </View>
    <View>
      <Text style={ styles.codesSubtitle }>{ code.title }</Text>
      <Text style={ styles.codesText }>{ code.description }</Text>
    </View>
  );
}

export default ConductItem;
