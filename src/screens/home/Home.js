import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { ButtonStyled, Button } from '../../components';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <ThemeProvider theme={theme}>
          <ButtonStyled primary>
            <Text> Hello Button </Text>
          </ButtonStyled>
        </ThemeProvider>
      </View>
    );
  }
}

export default HomeScreen;
