import { Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

import { StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  loadingSpinner:{
    height: 50,
    width: 50,
    marginTop: 70,
    marginHorizontal: (width / 2) - 20,
  },
  noFavesText: {
    marginTop: height * 0.3,
    alignSelf: 'center',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    color: colors.medGrey
  },
  sectionHeader: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrey
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.medGrey,
  },
});
