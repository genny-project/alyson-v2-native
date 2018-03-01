import { StackNavigator } from 'react-navigation';

import { ProfileScreen, ProfileSetupScreen, LoginScreen, SignupScreen } from '../screens';

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
  },

  {
    initialRouteName: 'ProfileSetup',
  },
);


export default RootStack;
