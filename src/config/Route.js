import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme';
import {
  ProfileScreen,
  ProfileSetupScreen,
  LoginScreen,
  SignupScreen,
  NotificationsScreen,
  SettingsScreen,
  HomeScreen,
} from '../screens';

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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
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
