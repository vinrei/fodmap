import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Food } from './Fruit';

interface FoodTileProps {
    food: Food;
}

const FoodTile: React.FC<FoodTileProps> = ({ food }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/foods/orange.png')} style={styles.image} />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{food.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    subtitleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FoodTile;