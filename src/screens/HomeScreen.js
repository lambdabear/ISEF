import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const homeIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-home-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) =>
      <Image source={homeIconSrc} style={[styles.icon, { tintColor }]} />,
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

const HomeScreen = StackNavigator({
  HomeHome: { screen: Home }
});

export default HomeScreen;
