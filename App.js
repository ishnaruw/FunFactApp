import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import animalImage from './assets/animals/animals.jpeg'; 
import spaceImage from './assets/space/space.png'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper'; 
// import React, { useState, useEffect } from 'react';



// Settings screen component
const SettingsScreen = ({ navigation }) => {

  const [settings, setSettings] = useState({
    theme: 'light',
    notification: 'Off',
    sound: 'Off'
  });
  
  const [settingsChanged, setSettingsChanged] = useState(false);


  // Load settings from AsyncStorage when component mounts
  useEffect(() => {
    loadSettings();
  }, []);

  // Function to load settings from AsyncStorage
  const loadSettings = async () => {
    try {
      const jsonSettings = await AsyncStorage.getItem('settings');
      if (jsonSettings) {
        setSettings(JSON.parse(jsonSettings));
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  // Function to save settings to AsyncStorage
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(settings));
      setSettingsChanged(true);
      console.log('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Theme:</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="light"
            status={settings.theme === 'light' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, theme: 'light' })}
          />
          <Text>Light</Text>
          <RadioButton
            value="dark"
            status={settings.theme === 'dark' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, theme: 'dark' })}
          />
          <Text>Dark</Text>
        </View>
      </View>
      <View style={styles.setting}>
        <Text>Notification</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="On"
            status={settings.language === 'On' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, notification: 'On' })}
          />
          <Text>On</Text>
          <RadioButton
            value="Off"
            status={settings.language === 'Off' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, notification: 'Off' })}
          />
          <Text>Off</Text>
        </View>
      </View>
      <View style={styles.setting}>
        <Text>Sound</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="On"
            status={settings.language === 'On' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, sound: 'On' })}
          />
          <Text>On</Text>
          <RadioButton
            value="Off"
            status={settings.language === 'Off' ? 'checked' : 'unchecked'}
            onPress={() => setSettings({ ...settings, sounc: 'Off' })}
          />
          <Text>Off</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={saveSettings}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
      {settingsChanged && <Text style={styles.settingsChangedText}>Settings changed!</Text>}
    </View>
  );
};


// Animals screen component
const AnimalsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animals Facts Page</Text>
      <Image source={animalImage} style={styles.image} />
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
      <Image source={spaceImage} style={styles.image} />
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
        <Stack.Screen name="Settings" component={SettingsScreen} />
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
      <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6F61' }]} 
        onPress={() => navigation.navigate('Animals')}>
        <Text style={styles.buttonText}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#70C1B3' }]} 
        onPress={() => navigation.navigate('Space')}>
        <Text style={styles.buttonText}>Space</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#999999' }]} 
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
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
    paddingHorizontal: 20
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
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // input: {
  //   width: 150, 
  //   height: 40, 
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 5,
  //   padding: 10,
  //   flex: 1,
  //   //alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 20
  //   // width: 200, 
  //   // height: 50
  // },
});