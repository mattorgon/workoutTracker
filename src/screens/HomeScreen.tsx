import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavButton from '../components/NavButton';
import GraphTabsNavigator from '../navigation/GraphTabsNavigator';
import { PanGestureHandler } from 'react-native-gesture-handler';  // Import gesture handler

const HomeScreen = () => {
  const onGraphSwipe = (event: { nativeEvent: any; }) => {
    console.log('Swiped on graph section', event.nativeEvent);
    // Handle custom behavior for the graph swipe if needed
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* Graph section with its own swipe gesture handling */}
      <PanGestureHandler onGestureEvent={onGraphSwipe}>
        <View style={styles.graphTabsContainer}>
          <GraphTabsNavigator />
        </View>
      </PanGestureHandler>
      <NavButton
        icon="bar-chart"
        title="Averages"
        backgroundColor="#42a5f5"
        destination="AveragesScreen"
      />
      <NavButton
        icon="emoji-events"
        title="Personal Bests"
        backgroundColor="#66bb6a"
        destination="PersonalBestsScreen"
      />
      <NavButton
        icon="book"
        title="Journey"
        backgroundColor="#ffa726"
        destination="JourneyScreen"
      />
      <NavButton
        icon="favorite"
        title="Favorites"
        backgroundColor="#ffca28"
        destination="FavoritesScreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  graphTabsContainer: {
    height: '30%',  // Adjust this height to give the graph more space
    justifyContent: 'center',  // Center the graph content vertically within this space
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navButtonsContainer: {
    flex: 1,  // Let the buttons take up the remaining space
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default HomeScreen;
