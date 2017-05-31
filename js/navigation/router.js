import {
  createRouter
} from '@expo/ex-navigation';


import Navigation from '../navigation/NavigationLayout'
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';

const Router = createRouter(() => ({
  Navigation: () => Navigation,
  About: () => About,
  Schedule: () => Schedule
}));

export default Router;


