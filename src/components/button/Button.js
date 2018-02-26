import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import buttonStyle from './style';


console.log(buttonStyle.danger);
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
};

export default Button;
