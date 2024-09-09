import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AveragesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Averages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AveragesScreen;
