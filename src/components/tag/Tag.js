import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { string } from 'prop-types';

import tagStyle from './style';

const Tag = ({ text }) => (
  <View style={tagStyle.default}>
    <Text style={tagStyle.textDefault}>  {text}  </Text>
  </View>
);

Tag.propTypes = {
  text: string,
};

Tag.defaultProps = {
  text: 'default text',
};


export default Tag;

