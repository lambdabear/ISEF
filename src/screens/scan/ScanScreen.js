import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { string } from 'prop-types';

import styles from '../styles';
import ScanAnimationScreen from './ScanAnimationScreen';

const scanIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-barcode.png');

const ScanScreen = StackNavigator({
  ScanHome: { screen: ScanAnimationScreen }
});

const tabBarIcon = ({ tintColor }) =>
  <Image source={scanIconSrc} style={[styles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

ScanScreen.navigationOptions = {
  tabBarLabel: '检测',
  tabBarIcon
};

export default ScanScreen;
