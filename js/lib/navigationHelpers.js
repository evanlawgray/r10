import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToSession = ( currentNavigatorUID, sessionData ) => {
  Store.dispatch( NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('Session', { sessionData })
  ));
}

export const goToSpeaker = ( speakerInfo ) => {
  Store.dispatch(NavigationActions.push(
    'root',
    Router.getRoute( 'Speaker', { speakerInfo } )
  ));
}

export const removeSpeaker = () => {
  Store.dispatch(NavigationActions.pop(
    'root',
    Router.getRoute( 'Speaker' )
  ));
}
