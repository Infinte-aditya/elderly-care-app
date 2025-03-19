// screens/MedicationScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MedicationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Reminders</Text>
      <Text style={styles.subtitle}>Manage your medication schedule</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});