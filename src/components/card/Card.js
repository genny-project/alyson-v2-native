import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, ProfileImage } from '../';
import styles from './style';

class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <ProfileImage />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.title}> Heading </Text>
          <Text style={styles.description}> Loren ipsum description </Text>
          <Text style={styles.subDescription}> Sub description </Text>
        </View>
        <View style={styles.button}>
          <Button text="View" />
        </View>
      </View>
    );
  }
}

export default Card;
