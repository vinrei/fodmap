import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button, Card, Text as PaperText, Avatar } from "react-native-paper";
import ReactNativeModal from 'react-native-modal';
import { Food } from "../Fruit";
import { COLOURS } from "./theme";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const detailStyles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    view: {
      justifyContent: 'flex-end',
    //   margin: 0,
      flex: 1,
    //   backgroundColor: COLOURS.primary
    },
    card: {
        padding: 16,
    }
  });

export default function DetailView({ closeCallback, isVisible, food }: { closeCallback: () => void; isVisible: boolean; food: Food | undefined}) {
    console.log(food);
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
          <Card style= {{backgroundColor: COLOURS.primary}}>
            {food ? (
                <React.Fragment>
                    <Card.Title title={food.name} subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                    <PaperText variant="titleLarge">{food.name}</PaperText>
                    <PaperText variant="bodyMedium">Card content</PaperText>
                    </Card.Content>
                </React.Fragment>
            ) : null}
            <Card.Cover style= {{padding: 16, backgroundColor: COLOURS.primary}} source={{ uri: 'https://picsum.photos/700' }} />
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
