import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles';
import NotificationListScreen from './NotificationListScreen';

const bellIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-bell.png');

const NotificationScreen = StackNavigator({
  NotificationsHome: { screen: NotificationListScreen }
});

NotificationScreen.navigationOptions = {
  tabBarLabel: '通知',
  tabBarIcon: ({ tintColor }) =>
    <Image source={bellIconSrc} style={[styles.icon, { tintColor }]} />
};

export default NotificationScreen;
