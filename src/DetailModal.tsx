import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Button, Card, Text as PaperText, Avatar } from "react-native-paper";
import ReactNativeModal from 'react-native-modal';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const detailStyles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    view: {
      justifyContent: 'flex-end',
    //   margin: 0,
      flex: 1
    },
    card: {
        padding: 16,
    }
  });

export default function DetailView({ closeCallback, isVisible }: { closeCallback: () => void; isVisible: boolean; }) {
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
