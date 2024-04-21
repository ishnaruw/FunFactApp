import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Animals screen component
const AnimalsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animals Facts Page</Text>
      <Text style={styles.facts}>
        {"\u2022"} Hummingbirds are the only birds that can fly backwards.{"\n"}
        {"\u2022"} Crocodiles cannot stick their tongue out.{"\n"}
        {"\u2022"} Starfish do not have a brain.{"\n"}
        {"\u2022"} Slugs have 4 noses.
      </Text>
    </View>
  );
};

// Space screen component
const SpaceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Space Facts Page</Text>
      <Text style={styles.facts}>
        {"\u2022"} 99 percent of our solar system's mass is the sun.{"\n"}
        {"\u2022"} Space is completely silent because there is no air to carry sound vibrations.{"\n"}
        {"\u2022"} If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together. {"\n"}
        {"\u2022"} You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune because they have no solid surface!
      </Text>
    </View>
  );
};

// Create stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Fun Facts App' }}
        />
        <Stack.Screen name="Animals" component={AnimalsScreen} />
        <Stack.Screen name="Space" component={SpaceScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// Home screen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fun Facts App</Text>
      <Text style={styles.subtitle}>Choose a category to explore:</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF6F61' }]} // Change button color
        onPress={() => navigation.navigate('Animals')}
      >
        <Text style={styles.buttonText}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#70C1B3' }]} // Change button color
        onPress={() => navigation.navigate('Space')}
      >
        <Text style={styles.buttonText}>Space</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Change title color
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666', // Change subtitle color
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  facts: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#444', // Change text color
  },
});

