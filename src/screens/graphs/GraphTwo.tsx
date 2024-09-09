// GraphTwo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GraphTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Graph 2 Content Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GraphTwo;
