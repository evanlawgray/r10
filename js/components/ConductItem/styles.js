import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

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
  codesText: {
    marginBottom: 20,
    paddingHorizontal: 10
  }
});
