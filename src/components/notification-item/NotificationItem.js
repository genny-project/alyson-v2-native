import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './style';

class NotificationItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Notification Item Component</Text>
      </View>
    );
  }
}


export default NotificationItem;
