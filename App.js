import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require('./assets/icons/ionicons-2.0.1/ios7-home-outline.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />,
    title: '消防设施巡检系统'
  };

  render() {
    return (
      <View>
        <Text>未完成任务</Text>
        <Text>已完成任务</Text>
      </View>
    );
  }
}

const HomeScreenNavigator = StackNavigator({
  Home: { screen: HomeScreen }
});

class ScanScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '检测',
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require('./assets/icons/ionicons-2.0.1/ios7-barcode-outline.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  render() {
    return <View />;
  }
}

class MeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require('./assets/icons/ionicons-2.0.1/ios7-person-outline.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  render() {
    return <View />;
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '通知',
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require('./assets/icons/ionicons-2.0.1/ios7-bell-outline.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreenNavigator },
    Scan: { screen: ScanScreen },
    Notifications: {
      screen: NotificationsScreen
    },
    Me: { screen: MeScreen }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      labelStyle: {
        fontSize: 10
      },
      activeTintColor: '#e91e63'
    }
  }
);

export default class App extends React.Component {
  render() {
    return <MainScreenNavigator />;
  }
}
