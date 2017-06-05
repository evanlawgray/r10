/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  NavigationContext,
  NavigationProvider,
  NavigationStyles,
  StackNavigation,
} from '@expo/ex-navigation';

import { StatusBar } from 'react-native';

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Router from './navigation/router';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class r10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider router={Router} context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            id='root'
            navigatorUID='root'
            initialRoute={Router.getRoute('Navigation')}
            defaultRouteConfig={{
              styles: { ...NavigationStyles.SlideVertical }
            }}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
