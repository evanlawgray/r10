import {
  createRouter
} from '@expo/ex-navigation';


import Navigation from '../navigation/NavigationLayout'
import About from '../scenes/About';
import Session from '../scenes/Session';

const Router = createRouter(() => ({
  Navigation: () => Navigation,
  About: () => About,
  Session: () => Session
}));

export default Router;


