import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const scanIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-barcode-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

class Scan extends React.Component {
  static navigationOptions = {
    tabBarLabel: '检测',
    tabBarIcon: ({ tintColor }) =>
      <Image source={scanIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '设备检测'
  };

  render() {
    return (
      <View>
        <Text>Scan animation</Text>
      </View>
    );
  }
}

const ScanScreen = StackNavigator({
  ScanHome: { screen: Scan }
});

export default ScanScreen;
