import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import buttonStyle from './style';

const Button = ({
  text, onPress, style, outline, block,
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={[
      buttonStyle.warning,
      outline ? buttonStyle.outline : null,
      style,
      block ? buttonStyle.block : null,
      style,
    ]}
  >
    <Text
      style={[buttonStyle.text, outline === true ? { color: '#444' } : null]}
    >
      {' '}
      {text}{' '}
    </Text>
  </TouchableHighlight>
);

Button.defaultProps = {
  text: 'Default text',
  outline: false,
  block: false,
};

export default Button;
