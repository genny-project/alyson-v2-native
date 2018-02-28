import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import ProfileJumbotron from '../../components/profile-jumbotron';
import { Button } from '../../components';

import styles from './style';

class ProfileSetupScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <ProfileJumbotron />
          <TextInput style={styles.input} placeholder="First Names" />
          <TextInput style={styles.input} placeholder="Last Name" />
          <Text style={styles.contactMethod}> Contact Method </Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Mobile" />
          <TextInput style={styles.input} placeholder="Office" />
          <TextInput style={styles.input} placeholder="PA" />
          <TextInput style={styles.input} placeholder="Through Number" />
          <Text style={styles.bio}> Bio </Text>
          <TextInput placeholder="Bio" style={styles.textarea} />
          <Button text="Next" block style={styles.button} />
        </View>
      </ScrollView>

    );
  }
}

export default ProfileSetupScreen;
