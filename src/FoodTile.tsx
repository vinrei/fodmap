import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import hexRgb from 'hex-rgb';

import { Food } from './foods';
import { COLOURS, FodmapLevel } from './constants';
import { LinearGradient } from 'expo-linear-gradient';

export const fodSquareDefaultStyles = { 
    opacity: 0.95,
    width: 25, 
    height: 25, 
    borderRadius: 10 
}

export function getFodmapColour(fodmapLevel: FodmapLevel) {
    return fodmapLevel === FodmapLevel.high ? COLOURS.fodmapHigh : fodmapLevel === FodmapLevel.medium ? COLOURS.fodmapMedium : COLOURS.fodmapLow;
}

interface FoodTileProps {
    food: Food;
    includeDetails?: boolean;
}

const FoodTile: React.FC<FoodTileProps> = ({ food, includeDetails = true }) => {
    const fodmapColour = getFodmapColour(food.overallFodmapLevel);
    const foodColour = hexRgb(food.colour);
    return (
        <View style={[styles.container, { borderColor: food.colour }]}>
            <Image source={food.image} style={styles.image} />
            {includeDetails && 
                <LinearGradient
                    colors={['rgba(255,255,255,1)', 'transparent']}
                    style={styles.subtitleContainer}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0 }}
                >
                    <Text style={styles.subtitle}>{food.name}</Text>
                    {food.overallFodmapLevel && <View style={[styles.fodSquare, {backgroundColor: fodmapColour}]}/>}
                </LinearGradient>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minWidth: 120,
        width: 150,
        height: 170,
        // margin: 12,
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
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
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        // fontFamily: 'open-sans', todo add this font for offline
    },
    fodSquare: fodSquareDefaultStyles
});

export default FoodTile;