import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { TextInput } from 'react-native';

class ProfileScreen extends Component {

  constructor () {
    state = {
      text: '',
    }
  }

  render() {
    return (
      <TextInput onChangeText= {} value={this.state.text}/>
    );
  }
}

export default StackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
});

