import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles';
import ScanAntimateScreen from './ScanAntimateScreen';

const scanIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-barcode.png');

const ScanScreen = StackNavigator({
  ScanHome: { screen: ScanAntimateScreen }
});

ScanScreen.navigationOptions = {
  tabBarLabel: '检测',
  tabBarIcon: ({ tintColor }) =>
    <Image source={scanIconSrc} style={[styles.icon, { tintColor }]} />
};

export default ScanScreen;
