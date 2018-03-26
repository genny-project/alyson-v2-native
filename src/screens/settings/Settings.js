import React, { Component } from "react";
import { Text, View } from "react-native";
import theme from "../../theme";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings",
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
        <Text> Settings Component </Text>
      </View>
    );
  }
}

export default SettingsScreen;
