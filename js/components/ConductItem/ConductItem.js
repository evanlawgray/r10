import React, { Component } from 'react';

import {
  Animated,
  LayoutAnimation,
  TouchableWithoutFeedback,
  View,
  Text,
  Dimensions
} from 'react-native';

import { styles } from './styles';
import { colors, typography } from '../../config/styles.js';

class ConductItem extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      rotateValue: new Animated.Value( 0 )
    }
  }

  onPress = () => {
    if(this.state.expanded === false) {
      Animated.timing(
        this.state.rotateValue,
        { toValue: 1, duration: 450 }
      ).start();

      LayoutAnimation.linear();
      this.setState({ expanded: true})
    } else {
      Animated.timing(
        this.state.rotateValue,
        { toValue: 0, duration: 450 }
      ).start();

      LayoutAnimation.linear();
      this.setState({ expanded: false})
    }
  }

  render() {

    let rotation = this.state.rotateValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '360deg' ]
    });

    let animatedStyles = {
      expandSymbol: {
        transform: [
          { 'rotate': rotation },
        ]
      }
    };

    return(
      <View>
        <TouchableWithoutFeedback
          onPress={ this.onPress }
        >
          <View style={ styles.codesHeader }>
            {
            this.state.expanded ?
                <Animated.Text
                  style={[styles.expandSymbol, animatedStyles.expandSymbol ]}
                >-</Animated.Text> :
                <Animated.Text
                  style={[styles.expandSymbol, animatedStyles.expandSymbol ]}
                >+</Animated.Text>
            }
            <Text style={ styles.codesSubtitle }>
              { this.props.code.title }
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={ styles.codeWrapper }>
          {
            this.state.expanded &&
              <Text style={ styles.codeText }>{ this.props.code.description }</Text>
          }
        </View>
      </View>
    );
  }
}

export default ConductItem;
