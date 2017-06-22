import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { string } from 'prop-types';

import styles from '../styles';
import NotificationListScreen from './NotificationListScreen';

const bellIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-bell.png');

const NotificationScreen = StackNavigator({
  NotificationsHome: { screen: NotificationListScreen }
});

const tabBarIcon = ({ tintColor }) =>
  <Image source={bellIconSrc} style={[styles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

NotificationScreen.navigationOptions = {
  tabBarLabel: '通知',
  tabBarIcon
};

export default NotificationScreen;
