import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ProfileImage } from '../';
import styles from './style';

class ProfileJumbotron extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Personal Information </Text>
        <ProfileImage style={{ height: 140, width: 140, marginTop: 20 }} />
        <Text style={styles.name}> Nischal Gautam</Text>
        <Text style={styles.position}> Full Stack Javascript Developer </Text>
        <Text style={styles.company}> GADA Technologies </Text>
        <Text style={styles.website}> outcome.life </Text>
      </View>

    );
  }
}

export default ProfileJumbotron;
