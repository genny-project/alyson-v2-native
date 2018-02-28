import { StackNavigator } from 'react-navigation';

import { ProfileScreen, ProfileSetupScreen } from '../screens';

const RootStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    ProfileSetup: {
      screen: ProfileSetupScreen,
    },
  },

  {
    initialRouteName: 'ProfileSetup',
  },
);


export default RootStack;
