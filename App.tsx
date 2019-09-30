import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View>
      <ScrollView>
        <View style={styles.outerOuterView}>
          <View style={styles.outerView}>
            <View style={styles.container}>
              <Text style={styles.styles}>Crushing It!</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod lacinia at. Eu consequat ac felis donec et odio pellentesque. Ipsum a arcu cursus vitae congue mauris rhoncus. Dolor magna eget est lorem. Augue eget arcu dictum varius. Enim diam vulputate ut pharetra. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Tincidunt arcu non sodales neque sodales ut.
        
Blandit aliquam etiam erat velit scelerisque in dictum. Ante metus dictum at tempor commodo ullamcorper a lacus. Pellentesque habitant morbi tristique senectus et netus et. Ut placerat orci nulla pellentesque dignissim enim sit amet. Nulla porttitor massa id neque aliquam vestibulum morbi. Purus viverra accumsan in nisl nisi. Et molestie ac feugiat sed lectus. Elementum integer enim neque volutpat. Rutrum quisque non tellus orci ac auctor augue mauris. Eget magna fermentum iaculis eu.</Text>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 750
  },
  styles: {
    color: 'white',
    backgroundColor: 'red',
    fontFamily: 'monospace',
    fontSize: 40
  },
  outerView: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },
  outerOuterView: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10
  }
});
