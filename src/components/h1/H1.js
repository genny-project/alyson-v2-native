import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class H1 extends Component {
  render() {
    return (
      <Text />
    );
  }
}

const childrenType = function (props, propName, component) {
  let error;
  const prop = props[propName];
  React.Children.forEach(prop, (child) => {
    if (typeof child !== 'string' && typeof child !== 'number') {
      error = new Error(`${component} should have only string or number`);
    }
  });
  return error;
};


H1.propTypes = {
  ...Text.propTypes,
  children: childrenType,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};


export default H1;
