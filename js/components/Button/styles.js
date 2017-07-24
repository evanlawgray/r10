import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  linearGradient: {
    minHeight: 40,
    width: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    width: 195,
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: typography.fontMain,
    fontSize: 14,
    textAlign: 'center'
  }
});
