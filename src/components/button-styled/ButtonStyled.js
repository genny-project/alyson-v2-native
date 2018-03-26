import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styled from 'styled-components';

const ButtonStyled = styled.TouchableHighlight`
  width: 60;
  height: 30;
  padding: 10px;
  background-color: ${props =>
    (props.outline
      ? 'transparent'
      : props.primary ? '#3498db' : props.danger ? 'red' : '#3498db')};
  border-radius: 3;
  height: ${props => (props.small ? 30 : 40)};
  width: ${props => (props.small ? 150 : 200)};
`;

export default ButtonStyled;
