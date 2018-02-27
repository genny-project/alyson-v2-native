import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { TextInput } from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <TextInput onChangeText={this.handleTextChange} value={this.state.text} />
    );
  }
}

export default StackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
});

