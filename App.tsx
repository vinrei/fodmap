import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import Modal from "react-native-modal";
import { Avatar, Button, Card, Text as PaperText, ToggleButton } from 'react-native-paper';

import {fruits}  from './Fruit'

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error



  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FodmapTile = (props) => {
  return (
    <View style={styles.tile}>
      <Text style={styles.tileText}>{props.name}</Text>
    </View>
  )
}

const detailStyles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1
  },
});

function WrapperComponent({closeCallback, isVisible}:{closeCallback: () => void, isVisible: boolean}) {
  return (
    <View>
      <Modal 
        isVisible={isVisible} 
        style={detailStyles.modal} 
        animationInTiming={350} 
        swipeDirection={['down']}
        animationOutTiming={600}
        useNativeDriverForBackdrop
      >
        <View style={detailStyles.view}>
          <Text>I am the modal content! Where are you??</Text>
          <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
              <PaperText variant="titleLarge">Card title</PaperText>
              <PaperText variant="bodyMedium">Card content</PaperText>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button onPress={closeCallback}>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

export default function App() {
  useEffect(() => {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
  const [status, setStatus] = React.useState('checked' as 'checked'|'unchecked');
  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Hello Josiee!</Text>
        <View style={styles.elementsContainer} >
          {fruits.map((fruit) => (<FodmapTile name={fruit.name} number={fruit.key} key={fruit.key}/>))}
          <ToggleButton 
          icon="bluetooth"
          value="bluetooth"
          status={status}
          onPress={onButtonToggle}/>
        </View>
        <WrapperComponent isVisible={status === 'checked'} closeCallback={() => setStatus('unchecked')}/>
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
    // marginLeft: 24,
    // marginRight: 24,
    // marginBottom: 24,
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
    // padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});