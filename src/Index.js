import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

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

const App = () => <MainScreenNavigator />;

export default App;
