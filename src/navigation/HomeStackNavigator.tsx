import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AveragesScreen from '../screens/home/AveragesScreen'; // Replace with your actual screen imports
import PersonalBestsScreen from '../screens/home/PersonalBestsScreen';
import JourneyScreen from '../screens/home/JourneyScreen';
import FavoritesScreen from '../screens/home/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';

// Define the type for your stack params
export type HomeStackParams = {
  HomeScreen: undefined;
  AveragesScreen: undefined;
  PersonalBestsScreen: undefined;
  JourneyScreen: undefined;
  FavoritesScreen: undefined;
};

// Create the Stack Navigator
const HomeStack = createStackNavigator<HomeStackParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,  // Enable the default header
        headerBackTitleVisible: false,  // Hide the "Back" text, show only the arrow
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',  // Set a custom title for the header
        }}
      />
      <HomeStack.Screen
        name="AveragesScreen"
        component={AveragesScreen}
        options={{
          title: 'Averages',  // Set a custom title for the header
        }}
      />
      <HomeStack.Screen
        name="PersonalBestsScreen"
        component={PersonalBestsScreen}
        options={{
          title: 'Personal Bests',
        }}
      />
      <HomeStack.Screen
        name="JourneyScreen"
        component={JourneyScreen}
        options={{
          title: 'Journey',
        }}
      />
      <HomeStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
