import React from 'react';
import { View, Text } from 'react-native';

class MyComponent extends React.Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <Text>Welcome, User!</Text>;
    } else {
      return <Text>Please log in first.</Text>;
    }
  }
}

export default MyComponent;
