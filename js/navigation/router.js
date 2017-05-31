import {
  createRouter
} from '@expo/ex-navigation';


import Navigation from '../navigation/NavigationLayout'
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';

const Router = createRouter(() => ({
  Navigation: () => Navigation,
  About: () => About,
  Schedule: () => Schedule,
  Session: () => Session
}));

export default Router;


