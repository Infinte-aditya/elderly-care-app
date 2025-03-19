import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Elderly Care App!</Text>
    </View>
  );
};

// Register the component with AppRegistry
AppRegistry.registerComponent('main', () => App);

export default App;