import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const scanIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-barcode-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

export default class ScanScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '检测',
    tabBarIcon: ({ tintColor }) =>
      <Image source={scanIconSrc} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return <View />;
  }
}
