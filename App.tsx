import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import { Avatar, ToggleButton } from 'react-native-paper';

import {fruits}  from './Fruit'
import DetailView from './src/DetailModal';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error


const FodmapTile = (props) => {
  return (
    <View style={styles.tile}>
      <Text style={styles.tileText}>{props.name}</Text>
    </View>
  )
}

export default function App() {
  useEffect(() => {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
  const [status, setStatus] = React.useState('unchecked' as 'checked'|'unchecked');
  const onButtonToggle = () => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Fodmap Helper</Text>
        <View style={styles.elementsContainer} >
          {fruits.map((fruit) => (<FodmapTile name={fruit.name} number={fruit.key} key={fruit.key}/>))}
          <ToggleButton 
          icon="bluetooth"
          value="bluetooth"
          status={status}
          onPress={onButtonToggle}/>
        </View>
        <DetailView isVisible={status === 'checked'} closeCallback={() => setStatus('unchecked')}/>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E2DC',
    alignItems: 'center',
    height: 'fit-content' as any,
    paddingTop:  Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding for Android status bar

  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#D8E2DC',
    width:'100%',
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  tile: {
    width: 150,
    height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});