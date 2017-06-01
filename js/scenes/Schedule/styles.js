import { Dimensions } from 'react-native';

import { colors } from '../../config/styles';

import { StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = {
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
}
