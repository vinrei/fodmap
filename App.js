import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';

// const foods = []

const foods = Array.from({ length: 30 }, (_, index) => index + 1);

// const items = [];
// for (let i = 1; i <= 30; i++) {
//   items.push(i);
// }

const FodmapTile = (props) => {
  return (
    <View style={styles.tile} key={props.number}>
      <Text style={styles.tileText}>Tile {props.number}</Text>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Hello Josie!</Text>
        <View style={styles.elementsContainer} >
          {foods.map((num) => (<FodmapTile number={num} key={num}/>))}
          {/* <FodmapTile number={3} /> */}
          {/* <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 1</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 2</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 3</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 4</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 5</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 6</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 7</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 8</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 9</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.tileText}>Tile 10</Text>
          </View> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 'fit-content',
    paddingTop:  Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding for Android status bar

  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: 100,
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

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
