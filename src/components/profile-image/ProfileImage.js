import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {string} from 'prop-types';
import defaultImage from '../../assets/profile.png';
import styles from './style';
class ProfileImage extends Component {

  static defaultProps = {
    imageURL : defaultImage
  }

  static propTypes = {
    imageURL: string
  }

  render() {
    return (
      <View>
        <Image source={this.props.imageURL} style = {styles.image} />
      </View>
    );
  }
}


export default ProfileImage;
