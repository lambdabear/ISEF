import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

const scanIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-barcode-outline.png');

class Scan extends React.Component {
  static navigationOptions = {
    tabBarLabel: '检测',
    tabBarIcon: ({ tintColor }) =>
      <Image source={scanIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '设备检测',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
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
