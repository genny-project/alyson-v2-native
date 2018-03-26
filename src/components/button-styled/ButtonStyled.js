import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styled from 'styled-components';

const ButtonStyled = styled.TouchableHighlight`
  width: 60;
  height: 30;
  padding: ${props => (props.small ? '5px' : '10px')};
  font-size: ${props => (props.small ? '14px' : '15px')};
  text-align: center;
  background-color: ${props =>
    (props.outline
      ? 'transparent'
      : props.primary ? '#3498db' : props.danger ? 'red' : '#3498db')};
  border-radius: 3;
  height: ${props => (props.small ? 30 : 40)};
  width: ${props => (props.small ? 150 : 200)};
  border: ${props => (props.outline ? '3px solid yellow' : '0px ')};
`;

export default ButtonStyled;
