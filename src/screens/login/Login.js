import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {Button} from '../../components';
import styles from './style';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  navigateToSignup = () => {
    console.log(this.props);
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Company Name </Text>
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
        <Text style={styles.signupLink} onPress={this.navigateToSignup}> Signup </Text>

      </View>

    );
  }
}

export default LoginScreen;
