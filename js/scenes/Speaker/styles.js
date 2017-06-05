import { StyleSheet, Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  contentWrapper: {
    height: height,
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  speakerHeader: {
    maxHeight: 70,
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  exitButton: {
    color: 'white',
    fontFamily: typography.fontMain
  },
  headerText: {
    marginLeft: width * 0.2,
    color: 'white',
    fontFamily: typography.fontMain
  },
  speakerWrapper: {
    height: 'auto',
    width: width * 0.9,
    marginHorizontal: 0.05,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  speakerImage: {
    flex: 1,
    height: 100,
    width: 100,
    marginHorizontal: ( width * 0.9 - 140 ) / 2,
    marginBottom: 25,
    borderRadius: 50
  },
  speakerName: {
    flex: 1,
    marginBottom: 20,
    color: 'black',
    fontSize: 22,
    fontFamily: typography.fontMain,
    textAlign: 'center'
  },
  speakerBio: {
    flex: 1,
    height: 'auto',
    color: 'black',
    fontSize: 16,
    fontWeight: '200',
    fontFamily: typography.fontMain,
    textAlign: 'left'
  },
});
