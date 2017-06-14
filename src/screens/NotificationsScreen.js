import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

const bellIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-bell-outline.png');

class Notifications extends React.Component {
  static navigationOptions = {
    tabBarLabel: '通知',
    tabBarIcon: ({ tintColor }) =>
      <Image source={bellIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '通知',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  render() {
    return (
      <View>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const NotificationsScreen = StackNavigator({
  NotificationsHome: { screen: Notifications }
});

export default NotificationsScreen;
