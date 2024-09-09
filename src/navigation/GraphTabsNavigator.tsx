import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GraphOne from '../screens/graphs/GraphOne';  // Placeholder for the first graph
import GraphTwo from '../screens/graphs/GraphTwo';  // Placeholder for the second graph

// Create the Top Tab Navigator
const GraphTab = createMaterialTopTabNavigator();

const GraphTabsNavigator = () => {
  return (
    <GraphTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#42a5f5' },  // Customize tab indicator
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: 'white' },  // Tab bar background
      }}
    >
      <GraphTab.Screen name="GraphOne" component={GraphOne} options={{ title: 'Graph 1' }} />
      <GraphTab.Screen name="GraphTwo" component={GraphTwo} options={{ title: 'Graph 2' }} />
    </GraphTab.Navigator>
  );
};

export default GraphTabsNavigator;
