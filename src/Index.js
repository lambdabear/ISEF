import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { arrayOf, shape, string } from 'prop-types';

import HomeScreen from './screens/home/HomeScreen';
import ScanScreen from './screens/scan/ScanScreen';
import NotificationsScreen from './screens/notification/NotificationScreen';
import MeScreen from './screens/me/MeScreen';

const MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
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
      activeTintColor: 'steelblue' // '#e91e63'
    }
  }
);

MainScreenNavigator.propTypes = {
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

const tasks = [
  { id: 'task20170607001', title: '酒店巡检', startTime: '6月7日', endTime: '7月3日' },
  { id: 'task20170607002', title: '酒店巡检', startTime: '6月7日', endTime: '7月3日' }
];

const screenProps = {
  inCompleteTasks: tasks,
  completeTasks: tasks
};

const App = () => <MainScreenNavigator screenProps={screenProps} />;

export default App;
