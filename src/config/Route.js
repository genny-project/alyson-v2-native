import { StackNavigator } from 'react-navigation';

import { ProfileScreen, ProfileSetupScreen, LoginScreen } from '../screens';

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
  },

  {
    initialRouteName: 'Login',
  },
);


export default RootStack;
