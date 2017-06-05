import { Dimensions, StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  headerContainer: {
    minHeight: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationText: {
    color: colors.medGrey,
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  heartIcon: {
    color: colors.red
  },
  sessionTitle: {
    marginBottom: 20,
    fontSize: 22,
    fontFamily: typography.fontMain
  },
  startTime: {
    marginBottom: 15,
    color: colors.red,
    fontSize: 16,
    fontFamily: typography.fontMain,
  },
  description: {
    marginBottom: 15,
    fontSize: 16,
    fontFamily: typography.fontMain,
    fontWeight: '200',
    lineHeight: 28
  },
  speakerHighlight: {
    marginBottom: 30
  },
  speakerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  presentedBy: {
    height: 25,
    width: width - 40,
    marginBottom: 20,
    color: colors.medGrey,
    fontSize: 14,
    fontFamily: typography.fontMain
  },
  speakerImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  speakerName: {
    height: 16,
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: typography.fontMain
  },
  separator: {
    width: width - 40,
    marginTop: 30,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.medGrey,
  },
});
