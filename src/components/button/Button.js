import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import buttonStyle from './style';


const Button = ({
  text, onPress, style, outline,
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={[buttonStyle.warning, outline ? buttonStyle.outline : null, style]}
  >
    <Text style={[buttonStyle.text, outline === true ? { color: '#444' } : null]} > {text} </Text>
  </TouchableHighlight>
);

Button.defaultProps = {
  text: 'Default text',
  outline: false,
};

export default Button;