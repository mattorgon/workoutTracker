import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'; // Import your screens
import WorkoutsScreen from './screens/WorkoutsScreen';
import ProfileScreen from './screens/ProfileScreen';

// const { width } = Dimensions.get('window');

// Create the Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={() => null} // Hide the default tab bar
        screenOptions={{ swipeEnabled: true }}
        screenListeners={{
          state: (e) => setCurrentIndex(e.data.state.index), // Track active screen
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      {/* Custom Dots Pagination */}
      <View style={styles.dotContainer}>
        {Array.from({ length: 3 }).map((_, index) => (
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
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#6200ee',
  },
  inactiveDot: {
    backgroundColor: '#cccccc',
  },
});

export default Navigation;