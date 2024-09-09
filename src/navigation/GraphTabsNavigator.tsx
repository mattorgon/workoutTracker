import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GraphOne from '../screens/graphs/GraphOne';  // Placeholder screen for the first graph
import GraphTwo from '../screens/graphs/GraphTwo';  // Placeholder screen for the second graph
import { PanGestureHandler } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const GraphTabsNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  // Track the active tab index

  return (
    <PanGestureHandler
      onGestureEvent={(event) => {
        // This can capture the swipe event within the graph section and prevent it from affecting parent tab swipes
        console.log('Swipe gesture in GraphTabsNavigator', event.nativeEvent);
      }}
    >
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBar={() => null}  // Hide the default tab bar
          screenOptions={{ swipeEnabled: true }}
          screenListeners={{
            state: (e) => setCurrentIndex(e.data.state.index),  // Track the current index
          }}
        >
          <Tab.Screen name="GraphOne" component={GraphOne} />
          <Tab.Screen name="GraphTwo" component={GraphTwo} />
        </Tab.Navigator>

        {/* Dots to indicate which graph is active */}
        <View style={styles.dotContainer}>
          {Array.from({ length: 2 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,  // Adjust positioning as needed
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#42a5f5',  // Active dot color
  },
  inactiveDot: {
    backgroundColor: '#cccccc',  // Inactive dot color
  },
});

export default GraphTabsNavigator;
