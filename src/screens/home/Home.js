import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { ButtonStyled, Button } from '../../components';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <ButtonStyled primary>
          <Text> Hello </Text>
        </ButtonStyled>

        {/* <Button>
          {' '}
          <Text> helloo</Text>
        </Button> */}
      </View>
    );
  }
}

export default HomeScreen;
