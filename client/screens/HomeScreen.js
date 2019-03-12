import React, { Component } from "react";
import { Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Home"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}

export default HomeScreen;
