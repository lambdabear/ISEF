import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { arrayOf, shape, string } from 'prop-types';

import TaskScreen from './TaskScreen';
import TaskListScreen from './TaskListScreen';
import styles from '../styles';

const homeIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-home.png');

const HomeScreen = StackNavigator({
  HomeTaskList: { screen: TaskListScreen },
  HomeTaskDetails: { screen: TaskScreen }
});

HomeScreen.propTypes = {
  screenProps: shape({
    inCompleteTasks: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        startTime: string,
        endTime: string
      })
    ).isRequired,
    completeTasks: arrayOf(
      shape({
        id: string.isRequired,
        title: string.isRequired,
        startTime: string,
        endTime: string
      })
    ).isRequired
  }).isRequired
};

const tabBarIcon = ({ tintColor }) =>
  <Image source={homeIconSrc} style={[styles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

HomeScreen.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon
};

export default HomeScreen;
