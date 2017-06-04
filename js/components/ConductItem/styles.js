import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  codesSubtitle: {
    marginHorizontal: 20,
    marginBottom: 10,
    color: colors.purple,
    fontSize: 14,
    fontWeight: '600'
  },
  codesHeader: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  expandSymbol: {
    height: 15,
    maxWidth: 10,
    color: colors.purple,
    textAlign: 'center'
  },
  codeWrapper: {
    width: width,
    marginBottom: 15,
    overflow: 'hidden',
  },
  codeText: {
    maxWidth: width - 20,
    color: 'black',
    fontSize: 14,
    fontFamily: typography.fontMain,
    fontWeight: '200'
  },
});
