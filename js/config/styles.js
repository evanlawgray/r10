import { Platform } from 'react-native';

export const colors = {
  medGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a'
}

export const typography = {
  baseSize: 16,
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-regular',
    },
  }),
  fontMainLight: 'Montserrat-light'
}
