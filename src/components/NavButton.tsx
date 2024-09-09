import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Using MaterialIcons for the icons
import { useNavigation, CompositeNavigationProp} from '@react-navigation/native';  // Import useNavigation hook
import { HomeStackParams } from '../navigation/HomeStackNavigator';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabParamList } from '../navigation/Navigation';


interface NavigationButtonProps {
    icon: string;  // Name of the icon (from Material Icons)
    title: string;  // Button title text
    //onPress: (event: GestureResponderEvent) => void;  // onPress function type
    destination: keyof HomeStackParams;
    backgroundColor: string;  // Background color for the button
  }

  // Define composite navigation prop combining the tab and stack navigation
type NavigationProp = CompositeNavigationProp<
MaterialTopTabNavigationProp<TabParamList, 'Home'>,  // Assuming Home is in the TabParamList
StackNavigationProp<HomeStackParams>
>;

  const NavButton: React.FC<NavigationButtonProps> = ({ icon, title, destination, backgroundColor }) => {
    const navigation = useNavigation<NavigationProp>();

    return (
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]} onPress={() => navigation.navigate(destination)}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={icon} size={24} color="white" />
        </View>
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-forward-ios" size={18} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

// Styles for the button component
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: '8%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,  // Rounded corners
    elevation: 2,  // Shadow for Android
    shadowColor: '#000',  // Shadow color (black)
    shadowOffset: { width: 5, height: 5 },  // Offset for the shadow
    shadowOpacity: 0.2,  // Opacity of the shadow
    shadowRadius: 4,  // Blur radius for the shadow
  },
  iconContainer: {
    marginRight: 10,  // Space between icon and text
  },
  buttonText: {
    flex: 1,  // Takes up the remaining space
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  arrowContainer: {
    marginLeft: 10,  // Space between text and arrow
  },
});

export default NavButton;
