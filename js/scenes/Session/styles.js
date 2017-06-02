import { Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = {
  speakerImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  heartIcon: {
    left: 0.9 * width,
    color: colors.red
  },
  linearGradient: {
    minHeight: 30,
    minWidth: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'transparent',
  }
}
