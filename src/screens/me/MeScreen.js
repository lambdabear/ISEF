import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { string } from 'prop-types';

import screenStyles from '../screenStyles';
import MeDetailScreen from './MeDetailScreen';

const personIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-person.png');

const MeScreen = StackNavigator({
  MeHome: { screen: MeDetailScreen }
});

const tabBarIcon = ({ tintColor }) =>
  <Image source={personIconSrc} style={[screenStyles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

MeScreen.navigationOptions = {
  tabBarLabel: '我',
  tabBarIcon
};

export default MeScreen;
