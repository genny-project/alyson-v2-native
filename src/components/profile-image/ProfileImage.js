import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { string } from 'prop-types';
import defaultImage from '../../assets/profile.png';
import styles from './style';

class ProfileImage extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.imageURL} style={[styles.image, this.props.style]} />
      </View>
    );
  }
}


ProfileImage.defaultProps = {
  imageURL: defaultImage,
};

ProfileImage.propTypes = {
  imageURL: string,
};


export default ProfileImage;
