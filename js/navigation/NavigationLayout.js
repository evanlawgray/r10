import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles';

import Router from '../navigation/router';

// const aboutIcon = (<Icon name="information-circle" size={30} color="#900" />);
// const scheduleIcon = (<Icon name="calendar" size={30} color="#900" />);
// const favesIcon = (<Icon name="heart" size={30} color="#900" />);
// const mapIcon = (<Icon name="map" size={30} color="#900" />);

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: typography.fontMain,
    },
    backgroundColor: colors.red,
    // renderBackground: () => (

    // )
  }
};

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  renderIcon( iconName, isSelected ) {
    return <Icon name={ iconName } size={25} color={ isSelected ? 'white' : colors.medGrey } />;
  }

  renderTitle( isSelected, title ) {
    const titleStyle = {
      color: isSelected ? 'white' : colors.medGrey,
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
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor="black"
      >
        <TabItem
          id="about"
          title="About"
          renderTitle={ this.renderTitle }
          renderIcon={ isSelected => this.renderIcon( 'ios-information-circle', isSelected ) }
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('About')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={ this.renderTitle }
          renderIcon={ isSelected => this.renderIcon( 'ios-calendar', isSelected ) }
        >
          <StackNavigation
            id="schedule"
            navigatorUID="session"
            initialRoute={Router.getRoute('Session')}
          />
        </TabItem>

      </TabNavigation>

    );
  }
}

export default NavigationLayout;
