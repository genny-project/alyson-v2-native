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
      : props.primary
        ? props.theme.colors.primary
        : props.danger
          ? props.theme.colors.danger
          : props.theme.colors.primary)};
  border-radius: 3;
  height: ${props => (props.small ? 30 : 40)};
  width: ${props => (props.small ? 150 : 180)};
  border: ${props => (props.outline ? '3px solid yellow' : '0px ')};
`;

export default ButtonStyled;
