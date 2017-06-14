import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles';

const personIconSrc = require('../../assets/icons/ionicons-2.0.1/ios7-person-outline.png');

class Me extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) =>
      <Image source={personIconSrc} style={[styles.icon, { tintColor }]} />,
    title: '我',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
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
