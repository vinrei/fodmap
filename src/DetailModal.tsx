import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import { Button, Card, Text as PaperText, Avatar } from "react-native-paper";
import ReactNativeModal from 'react-native-modal';
import { Food, ServingFodmapInfo } from "./foods";
import { COLOURS, FodmapLevel } from "./constants";
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
  servingContainer: {
      flexDirection: 'row', 
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexShrink: 1
  }
});

const ServingDetails = ({fodmapLevel, servingInfo}: {fodmapLevel: FodmapLevel, servingInfo: ServingFodmapInfo}) => {
  return (
    <View style={detailStyles.servingContainer}>
      <View style={[detailStyles.fodSquare, {backgroundColor: getFodmapColour(fodmapLevel), marginRight: 12}]}/>
      <Text style={{ flexShrink: 1, flexWrap: 'wrap' }}>{servingInfo.servingSize}{servingInfo.servingInfo ? ' - ' :''}{servingInfo.servingInfo}</Text>
  </View>
  )
}

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
                  subtitle={food.subtitle || ''}
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
                    <Text style={{fontSize: 18, color: '#000', marginBottom: 8, fontWeight:'bold'}}>Serving Sizes</Text>
                    <View style={{ flex: 1, flexDirection: 'column', flexShrink: 1 }}>
                    {food.lowFodmapServing ? <ServingDetails fodmapLevel={FodmapLevel.low} servingInfo= {food.lowFodmapServing}/> : null}
                    {food.mediumFodmapServing ? <ServingDetails fodmapLevel={FodmapLevel.medium} servingInfo= {food.mediumFodmapServing}/> : null}
                    {food.highFodmapServing ? <ServingDetails fodmapLevel={FodmapLevel.high} servingInfo= {food.highFodmapServing}/> : null}
                    </View>
                  </View>
                </View>
              </React.Fragment>
            ) : null}
          </Card>
        </View>
      </Modal>
  );
}
