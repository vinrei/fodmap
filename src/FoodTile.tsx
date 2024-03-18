import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Food } from './Fruit';

interface FoodTileProps {
    food: Food;
}

const FoodTile: React.FC<FoodTileProps> = ({ food }) => {
    return (
        <View style={styles.container}>
            <Image source={food.image} style={styles.image} />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{food.name}</Text>
                <View style={styles.fodSquare}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minWidth: 120,
        width: 150,
        height: 170,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FF9052'
    },
    subtitleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 144, 82, 0.2)',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        // fontFamily: 'open-sans', todo add this font for offline
    },
    fodSquare: { 
        backgroundColor: '#4CBB17', 
        opacity: 0.95,
        width: 25, 
        height: 25, 
        borderRadius: 10 
    }
});

export default FoodTile;