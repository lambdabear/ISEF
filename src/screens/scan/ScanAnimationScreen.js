import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';
import ScanAnimation from '../../components/ScanAnimation';

class ScanAnimationScreen extends React.Component {
  static navigationOptions = {
    title: '设施检测',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ScanAnimation />
        <View>
          <Text style={{ fontSize: 16 }}>请将手机靠近NFC标签</Text>
        </View>
      </View>
    );
  }
}

export default ScanAnimationScreen;
