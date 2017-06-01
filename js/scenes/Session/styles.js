import { Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = {
  speakerImage: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  heartIcon: {
    left: 0.9 * width,
    color: colors.red
  }
}
