import { Dimensions, StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
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
    width: width,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: typography.fontmain,
    fontWeight: '600'
  },
  sessionLocation: {
    width: 0.75 * width,
    marginLeft: 5,
    color: colors.medGrey,
    fontSize: 12,
    fontFamily: typography.fontmain,
    fontWeight: '400'
  },
  heartIcon: {
    left: 0.08 * width,
    color: colors.red
  }
});
