import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper'; // Import the FAB from react-native-paper
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen'; // Import your screens
import WorkoutsScreen from './screens/WorkoutsScreen';
import ProfileScreen from './screens/ProfileScreen';

// const { width } = Dimensions.get('window');

// Create the Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

const AddIcon = () => <MaterialIcons name="add" size={24} color="white" />;

const Navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
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

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon={AddIcon}  // Use add_circle icon
        onPress={() => console.log('FAB Pressed')}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,  // Position at the bottom-right corner
    backgroundColor: '#42a5f5',
    borderRadius: 50,
    shadowColor: '#000',  // Shadow color (black)
    shadowOffset: { width: 5, height: 5 },  // Offset for the shadow
    shadowOpacity: 0.2,  // Opacity of the shadow
    shadowRadius: 2.5,  // Blur radius for the shadow
  },
  icon: {
    width: 48,  // Adjust size to match your FAB
    height: 48,
    resizeMode: 'contain',
    tintColor: 'white', // Optional: Apply tint color to match the button
    backgroundColor: '#42a5f5',
  },
});

export default Navigation;
