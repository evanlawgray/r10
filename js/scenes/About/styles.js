import { StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
    paddingTop: 25,
    paddingBottom: 15,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  codesTitle: {
    marginBottom: 20,
    fontSize: 22,
    fontFamily: typography.fontMain,
    fontWeight: '600'
  },
  codesText: {
    marginBottom: 20,
    fontSize: 14,
    fontFamily: typography.fontMain,
    fontWeight: '200'
  }
});
