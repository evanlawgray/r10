import { Dimensions } from 'react-native';

import { colors } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = {
  listItem: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  sessionTitle: {
    height: 20,
    width: width,
    marginHorizontal: 5,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600'
  },
  sessionLocation: {
    width: 0.75 * width,
    marginLeft: 5,
    color: colors.medGrey,
    fontWeight: '400'
  },
  heartIcon: {
    left: 0.08 * width,
    color: colors.red
  }
}
