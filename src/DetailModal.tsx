import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button, Card, Text as PaperText, Avatar } from "react-native-paper";
import ReactNativeModal from 'react-native-modal';
import { Food } from "./foods";
import { COLOURS } from "./constants";
import FoodTile, { fodSquareDefaultStyles, getFodmapColour } from "./FoodTile";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const detailStyles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  view: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginVertical: 8,
  },
  content: {
    backgroundColor: COLOURS.primary,
  },
  view2: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  halfWidthContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 100,
  },
  fodSquare: fodSquareDefaultStyles,
});

export default function DetailView({ closeCallback, isVisible, food }: { closeCallback: () => void; isVisible: boolean; food: Food | undefined}) {
  return (
      <Modal
        isVisible={isVisible}
        style={detailStyles.modal}
        animationInTiming={350}
        swipeDirection={['down']}
        animationOutTiming={250}
        useNativeDriverForBackdrop
        statusBarTranslucent
        backdropOpacity={0.5}
        onBackdropPress={closeCallback}
        onSwipeComplete={closeCallback}
        hideModalContentWhileAnimating={false}
        // backdropTransitionOutTiming={0}
      >
        <View style={detailStyles.view}>
          <Card style={detailStyles.content}>
            <View style={detailStyles.handle} />
            {food ? (
              <React.Fragment>
                <Card.Title 
                  titleStyle={{fontSize: 28, fontWeight: 'bold'}}
                  titleVariant="titleLarge" 
                  title={food.name} 
                  subtitle="Navel, Peeled, Raw"
                  subtitleStyle={{fontSize: 18, color: '#8492A6'}}
                  right={
                    (props) => <View style={[detailStyles.fodSquare, {backgroundColor: getFodmapColour(food.overallFodmapLevel), width: 40, height: 40, marginRight: 16}]}/>
                  }
                />
                <View style={detailStyles.view2}>
                  <View style={detailStyles.halfWidthContainer}>
                    {/* Content for the first half-width container */}
                      <FoodTile food={food} includeDetails={false} />
                  </View>
                  <View style={detailStyles.halfWidthContainer}>
                    {/* Content for the second half-width container */}
                  </View>
                </View>
              </React.Fragment>
            ) : null}
          </Card>
        </View>
      </Modal>
  );
}
