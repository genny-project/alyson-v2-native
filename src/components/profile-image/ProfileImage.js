import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {string} from 'prop-types';

class ProfileImage extends Component {

  static defaultProps = {
    imageURL : ''
  }

  static propTypes = {
    imageURL: string
  }

  render() {
    return (
      <View>
        <Image />
      </View>

    );
  }
}


export default ProfileImage;
