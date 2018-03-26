import React, { Component } from "react";
import { Text, View } from "react-native";
import "./style";
import theme from "../../theme";

class NotificationsScreen extends Component {
  static navigationOptions = {
    title: "Notification",
    headerStyle: {
      backgroundColor: theme.colors.primary
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View>
        <Text> Notification Component </Text>
      </View>
    );
  }
}

export default NotificationsScreen;
