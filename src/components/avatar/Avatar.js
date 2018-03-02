import React, { Component } from 'react';
import { Image } from 'react-native';

const Avatar = ({ style, imageLink }) => (
  <Image source={imageLink} style={{ ...style }} />
);

export default Avatar;
