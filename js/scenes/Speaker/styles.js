import { Dimensions } from 'react-native';

import { colors, typography } from '../../config/styles';

const width = Dimensions.get('window').width;

export const styles = {
  container: {
    flex: 1,
  },
  speakerHeader: {
    minHeight: 80,
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
  speakerImage: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
}
