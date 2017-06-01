import React, { Component } from 'react';

import { Dimensions } from 'react-native';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import LinearGradient from 'react-native-linear-gradient';

import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles';

import Router from '../navigation/router';

const width = Dimensions.get('window').width;

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  drawerItemStyles: {
    width: 0.9 * width,
    marginHorizontal: 5
  }
}

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: typography.fontMain,
    },
    renderBackground: () => (
      <LinearGradient
        style={ styles.linearGradient }
        colors={[colors.purple, colors.red]}
        start={{x: 1, y: 0}}
        end={{x: -1, y: 1}}
        locations={[0, .6]}
      />
    )
  }
};

class DrawerNavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  renderIcon( iconName, isSelected ) {
    return <Icon name={ iconName } size={25} color={ isSelected ? colors.purple : colors.medGrey } />;
  }

  renderTitle( isSelected, title ) {
    const titleStyle = {
      paddingLeft: 8,
      color: isSelected ? 'black' : colors.medGrey,
      fontSize: 12,
      fontFamily: typography.fontMain
    }

    return (
      <Text
        style={ titleStyle }
      >
        { title }
      </Text>
    );
  }

  render() {
    return(
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="about"
        tabBarColor="black"
        drawerWidth={ 200 }
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={ isSelected => this.renderTitle( isSelected, 'Schedule' ) }
          renderIcon={ isSelected => this.renderIcon( 'md-calendar', isSelected ) }
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('Schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderTitle={ isSelected => this.renderTitle( isSelected, 'About' ) }
          renderIcon={ isSelected => this.renderIcon( 'md-information-circle', isSelected ) }
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('About')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

export default DrawerNavigationLayout;
