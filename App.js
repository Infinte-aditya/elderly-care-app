import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './hooks/useAuth';



// Register the component with AppRegistry
AppRegistry.registerComponent('main', () => App);

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}


