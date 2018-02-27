import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import buttonStyle from './style';


const Button = ({ text, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={buttonStyle.warning}
  >
    <Text style={buttonStyle.text} > {text} </Text>
  </TouchableHighlight>
);

Button.defaultProps = {
  text: 'Default text',
  medium: true,
  large: false,
  small: false,
  outline: false,
  primary: true,
  warning: false,
  danger: false,
};

export default Button;
