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

const width = Dimensions.get('window').width;

class ConductItem extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      codeHeight: 0,
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
      this.setState({ expanded: true, codeHeight: 'auto'})
    } else {
      Animated.timing(
        this.state.rotateValue,
        { toValue: 0, duration: 450 }
      ).start();

      LayoutAnimation.linear();
      this.setState({ expanded: false, codeHeight: 0})
    }
  }

  render() {

    let rotation = this.state.rotateValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '360deg' ]
    });

    let animatedStyles = {
      codeWrapper: {
        height: this.state.codeHeight,
        width: width,
        marginBottom: 15,
        paddingHorizontal: 15,
        overflow: 'hidden',
      },
      code: {
        height: this.state.codeHeight,
        color: colors.medGrey,
        fontFamily: typography.fontMain
      },
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

        <View style={ animatedStyles.codeWrapper }>
          <Text style={ animatedStyles.code }>{ this.props.code.description }</Text>
        </View>
      </View>
    );
  }
}

export default ConductItem;
