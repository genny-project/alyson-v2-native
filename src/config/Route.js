import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { ProfileScreen, ProfileSetupScreen, LoginScreen, SignupScreen, NotificationsScreen, SettingsScreen, HomeScreen } from '../screens';

const LoggedInScreen = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notification: {
      screen: NotificationsScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },

  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },

);


const RootStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    ProfileSetup: {
      screen: ProfileSetupScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    LoggedIn: {
      screen: LoggedInScreen,
    },
  },
  {
    initialRouteName: 'LoggedIn',
  },
);

export default RootStack;
