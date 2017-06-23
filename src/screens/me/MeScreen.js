import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles';
import MeDetailScreen from './MeDetailScreen';

const personIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-person.png');

const MeScreen = StackNavigator({
  MeHome: { screen: MeDetailScreen }
});

MeScreen.navigationOptions = {
  tabBarLabel: '我',
  tabBarIcon: ({ tintColor }) =>
    <Image source={personIconSrc} style={[styles.icon, { tintColor }]} />
};

export default MeScreen;
