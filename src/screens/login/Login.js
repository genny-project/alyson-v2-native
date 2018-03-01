import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {Button} from '../../components';
import styles from './style';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> 4 Degrees </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor='#888'
          style={styles.input}/>
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor='#888'
          style={styles.input}/>
        <Button block text="Login" style={{width: '80%', marginTop:20}}/>
        <Text style={styles.signupLink}> Signup </Text>

      </View>

    );
  }
}

export default LoginScreen;
