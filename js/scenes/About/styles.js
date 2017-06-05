import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get( 'window' ).width;

export const styles = StyleSheet.create({
  loadingSpinner:{
    height: 50,
    width: 50,
    marginTop: 70,
    marginHorizontal: (width / 2) - 20,
  },
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
    fontSize: 16,
    fontFamily: typography.fontMain,
    fontWeight: '200'
  }
});
