import { StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 25,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  codesTitle: {
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 18,
    fontFamily: typography.fontMain,
    fontWeight: '600'
  },
  codesText: {
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: typography.fontMain,
    fontWeight: '400'
  }
});
