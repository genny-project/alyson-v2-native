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
        <View style={styles.container}>
          <ProfileJumbotron />
          <TextInput
            style={styles.input}
            placeholder="First Names"
            placeholderTextColor="#1a1a1a"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#1a1a1a"
          />
          <Text
            style={styles.contactMethod}
            placeholderTextColor="#1a1a1a"
          >
            Contact Method
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#1a1a1a"
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#1a1a1a"
            placeholder="Mobile"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#1a1a1a"
            placeholder="Office"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#1a1a1a"
            placeholder="PA"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#1a1a1a"
            placeholder="Through Number"
          />
          <Text
            style={styles.bio}
            placeholderTextColor="#1a1a1a"
          > Bios
          </Text>
          <TextInput
            placeholder="Bio"
            style={styles.textarea}
            placeholderTextColor="#1a1a1a"
            multiline
            numberOfLines={6}
          />
          <Button text="Next" block style={styles.button} />
        </View>
      </ScrollView>

    );
  }
}

export default ProfileSetupScreen;
