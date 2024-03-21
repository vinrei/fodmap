import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import { Avatar, ToggleButton } from 'react-native-paper';

import DetailView from './src/DetailModal';
import { COLOURS } from './src/constants';
import FoodTile from './src/FoodTile';
import { Food, foods } from './src/foods';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error


const FodmapTile = (props: {onPressCallback: () => void, food: Food}) => {
  return (
    <Pressable style={styles.tile} onPress={() => props.onPressCallback()}>
      <Text style={styles.tileText}>{props.food.name}</Text>
    </Pressable>
  )
}

export default function App() {
  useEffect(() => {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
  const [selectedFood, setSelectedFood] = React.useState<Food|undefined>(undefined);
  const [prevSelectedFood, setPrevSelectedFood] = React.useState<Food|undefined>(undefined);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Fodmate</Text>
        <View style={styles.elementsContainer} >
          <FoodTile food={foods.at(0)} />
          <FoodTile food={foods.at(1)} />
          <FoodTile food={foods.at(2)} />
        </View>
        <View style={styles.elementsContainer} >
          {foods.map((fruit) => (
              <FodmapTile
                food={fruit}
                key={fruit.key} 
                onPressCallback={() => {setSelectedFood(fruit); setPrevSelectedFood(fruit)}}
              />
          ))}
        </View>
        <DetailView isVisible={!!selectedFood} closeCallback={() => setSelectedFood(undefined)} food={selectedFood||prevSelectedFood}/>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.primary,
    alignItems: 'center',
    // height: 'fit-content' as any,
    paddingTop:  Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding for Android status bar

  },
  elementsContainer: {
    flex: 1,
    backgroundColor: COLOURS.primary,
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