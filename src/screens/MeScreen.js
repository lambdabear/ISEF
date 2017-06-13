import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const personIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-person-outline.png');

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

class Me extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) =>
      <Image source={personIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '我'
  };

  render() {
    return (
      <View>
        <Text>Personal profile set</Text>
      </View>
    );
  }
}

const MeScreen = StackNavigator({
  MeHome: { screen: Me }
});

export default MeScreen;
