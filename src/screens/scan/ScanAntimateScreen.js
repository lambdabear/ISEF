import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

class ScanAntimateScreen extends React.Component {
  static navigationOptions = {
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

export default ScanAntimateScreen;
