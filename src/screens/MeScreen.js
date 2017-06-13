import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const personIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-person-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

export default class MeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) =>
      <Image source={personIconSrc} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return <View />;
  }
}
