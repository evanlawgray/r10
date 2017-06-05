import { StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  timeHeader: {
    fontWeight: '600',
    fontFamily: typography.fontMain,
    fontSize: 12,
  },
  sectionHeader: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrey,
  },
});
