import { StackNavigator } from 'react-navigation';

import { ProfileScreen } from '../screens';

const RootStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Profile',
  },
);


export default RootStack;
