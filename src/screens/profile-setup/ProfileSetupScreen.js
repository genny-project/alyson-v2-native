import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ProfileJumbotron from '../../components/profile-jumbotron';

console.log(ProfileJumbotron, 'profile jumbotron');

class ProfileSetupScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ProfileJumbotron />
        <Text> Personal Information </Text>
      </View>
    );
  }
}

export default ProfileSetupScreen;
