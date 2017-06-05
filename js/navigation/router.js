import {
  createRouter
} from '@expo/ex-navigation';


import Navigation from '../navigation/NavigationLayout'
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';
import Faves from '../scenes/Faves';

const Router = createRouter(() => ({
  Navigation: () => Navigation,
  About: () => About,
  Schedule: () => Schedule,
  Session: () => Session,
  Speaker: () => Speaker,
  Faves: () => Faves
}));

export default Router;


