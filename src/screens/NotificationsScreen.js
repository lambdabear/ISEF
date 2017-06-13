import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const bellIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-bell-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '通知',
    tabBarIcon: ({ tintColor }) =>
      <Image source={bellIconSrc} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return <View />;
  }
}
