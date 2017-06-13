import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import MeScreen from './src/screens/MeScreen';

const HomeScreenNavigator = StackNavigator({
  Home: { screen: HomeScreen }
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

const App = () => <MainScreenNavigator />;

export default App;
