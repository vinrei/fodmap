import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button, Card, Text as PaperText, Avatar } from "react-native-paper";
import ReactNativeModal from 'react-native-modal';
import { Food } from "./foods";
import { COLOURS } from "./constants";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const detailStyles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  view: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  card: {
      padding: 16,
  }
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
          <Card style= {{backgroundColor: COLOURS.primary}}>
            {food ? (
                <React.Fragment>
                    <Card.Title titleVariant="titleLarge" title={food.name} subtitle="Card Subtitle" />
                    {/* <Card.Content> */}
                    {/* <PaperText variant="bodyMedium">Card content</PaperText> */}
                    {/* </Card.Content> */}
                    <Card.Cover style= {{padding: 16, backgroundColor: COLOURS.primary}} source={food.image} />
                </React.Fragment>
            ) : null}
            <Card.Actions>
              {/* <Button onPress={closeCallback}>Cancel</Button> */}
              <Button onPress={closeCallback}>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
  );
}
