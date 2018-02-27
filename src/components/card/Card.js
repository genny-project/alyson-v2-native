import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, ProfileImage } from '../';
import styles from './style';
import { string } from 'prop-types';

class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <ProfileImage />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.title}> {this.props.title} </Text>
          <Text style={styles.description}> {this.props.description} </Text>
          <Text style={styles.subDescription}> {this.props.subDescription} </Text>
        </View>
        <View style={styles.button}>
          <Button text="View" outline />
        </View>
      </View>
    );
  }
}


Card.propTypes = {
  title: string,
  description: string,
  subDescription: string,
};

export default Card;
