import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './style';
import {Button} from '../../components';
class SignupScreen extends Component {

  static navigationOptions = {
    title: 'Signup'
  }

  navigateToLogin = () => {
    console.log(this.props);
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> 4 Degrees   </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor='#888'
          style={styles.input}/>
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor='#888'
          style={styles.input}/>

        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor='#888'
          style={styles.input}/>

        <Button block text="Signup" style={{width: '80%', marginTop:20}}/>
        <Text style={styles.loginLink} onPress={this.navigateToLogin}> Login </Text>

      </View>
    );
  }
}


export default SignupScreen;
