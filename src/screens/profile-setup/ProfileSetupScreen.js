import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import ProfileJumbotron from '../../components/profile-jumbotron';
import { Button, ProfileImage } from '../../components';

import styles from './style';

class ProfileSetupScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
              display: 'flex',
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: 'black',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 0,
            }}
            />
            <Text style={{ color: '#fff' }}> Upload Picture</Text>
          </View>
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

          <View style={styles.bioTextWrapper}>
            <Text
              style={{ marginRight: 210, fontWeight: 'bold' }}
              placeholderTextColor="#1a1a1a"
            > Bio
            </Text>
            <Text> [140 Characters]</Text>
          </View>

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
