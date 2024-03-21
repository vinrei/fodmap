import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import hexRgb from 'hex-rgb';

import { Food } from './foods';
import { COLOURS, FodmapLevel } from './constants';

interface FoodTileProps {
    food: Food;
}

const FoodTile: React.FC<FoodTileProps> = ({ food }) => {
    const fodmapColour = food.overallFodmapLevel === FodmapLevel.high ? COLOURS.fodmapHigh : food.overallFodmapLevel === FodmapLevel.medium ? COLOURS.fodmapMedium : COLOURS.fodmapLow;
    const foodColour = hexRgb(food.colour);
    return (
        <View style={styles.container}>
            <Image source={food.image} style={[styles.image, { borderColor: food.colour }]} />
            <View style={[styles.subtitleContainer, {backgroundColor: `rgba(${foodColour.red}, ${foodColour.green}, ${foodColour.blue}, 0.3)`}]}>
                <Text style={styles.subtitle}>{food.name}</Text>
                {food.overallFodmapLevel && <View style={[styles.fodSquare, {backgroundColor: fodmapColour}]}/>}
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
        borderWidth: 1,
    },
    subtitleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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
        opacity: 0.95,
        width: 25, 
        height: 25, 
        borderRadius: 10 
    }
});

export default FoodTile;