import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

class MeDetailScreen extends React.Component {
  static navigationOptions = {
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

export default MeDetailScreen;
