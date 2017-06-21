import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TaskScreen from './TaskScreen';
import TaskListScreen from './TaskListScreen';
import styles from '../styles';

const homeIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-home.png');

const HomeScreen = StackNavigator({
  HomeTaskList: { screen: TaskListScreen },
  HomeTaskDetails: { screen: TaskScreen }
});

HomeScreen.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ tintColor }) =>
    <Image source={homeIconSrc} style={[styles.icon, { tintColor }]} />
};

export default HomeScreen;
