// GraphTwo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GraphTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Graph 2 Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default GraphTwo;
