// GraphOne.tsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import tempGraph from '../../../assets/images/tempGraph.jpeg';

const GraphOne = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Graph 1 Content</Text> */}
      <Image source={tempGraph} style={styles.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',  // Add background to make it visible
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default GraphOne;
