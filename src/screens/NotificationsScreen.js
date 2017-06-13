import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const bellIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-bell-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

class Notifications extends React.Component {
  static navigationOptions = {
    tabBarLabel: '通知',
    tabBarIcon: ({ tintColor }) =>
      <Image source={bellIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '通知'
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
