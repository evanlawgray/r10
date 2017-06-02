import React, { Component } from 'react';

import {
  Animated,
  LayoutAnimation,
  View,
  Text
} from 'react-native';

import { styles } from './styles';

class ConductItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <View>
        <Text style={ styles.codesSubtitle }>{ this.props.code.title }</Text>
        <Text style={ styles.codesText }>{ this.props.code.description }</Text>
      </View>
    );
  }
}

export default ConductItem;
