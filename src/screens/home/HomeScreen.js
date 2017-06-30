import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { arrayOf, shape, string, bool } from 'prop-types';

import TaskScreen from './TaskScreen';
import TaskListScreen from './TaskListScreen';
import screenStyles from '../screenStyles';

const homeIconSrc = require('../../../assets/icons/ionicons-2.0.1/ios7-home.png');

const HomeScreen = StackNavigator({
  HomeTaskList: { screen: TaskListScreen },
  HomeTaskDetails: { screen: TaskScreen }
});

HomeScreen.propTypes = {
  screenProps: shape({
    homeScreenProps: shape({
      taskListProps: shape({
        incompleteTasks: arrayOf(
          shape({
            id: string.isRequired,
            title: string.isRequired,
            startTime: string,
            endTime: string,
            warning: bool
          })
        ).isRequired,
        completeTasks: arrayOf(
          shape({
            id: string.isRequired,
            title: string.isRequired,
            startTime: string,
            endTime: string,
            warning: bool
          })
        ).isRequired
      }).isRequired,
      taskDetailsProps: shape({
        task: shape({
          title: string.isRequired,
          startTime: string.isRequired,
          endTime: string.isRequired,
          note: string.isRequired,
          warning: bool,
          facilities: arrayOf(
            shape({
              id: string.isRequired,
              name: string.isRequired,
              checked: bool.isRequired,
              postSuccess: bool.isRequired,
              uploading: bool.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const tabBarIcon = ({ tintColor }) =>
  <Image source={homeIconSrc} style={[screenStyles.icon, { tintColor }]} />;

tabBarIcon.propTypes = {
  tintColor: string.isRequired
};

HomeScreen.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon
};

export default HomeScreen;
