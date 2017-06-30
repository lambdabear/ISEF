import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { arrayOf, shape, string, bool } from 'prop-types';

import HomeScreen from './screens/home/HomeScreen';
import ScanScreen from './screens/scan/ScanScreen';
import NotificationsScreen from './screens/notification/NotificationScreen';
import MeScreen from './screens/me/MeScreen';
import screenProps from './dataSource';

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
    homeScreenProps: shape({
      taskListProps: shape({
        incompleteTasks: arrayOf(
          shape({
            id: string.isRequired,
            title: string.isRequired,
            startTime: string.isRequired,
            endTime: string.isRequired,
            warning: bool
          })
        ).isRequired,
        completeTasks: arrayOf(
          shape({
            id: string.isRequired,
            title: string.isRequired,
            startTime: string.isRequired,
            endTime: string.isRequired,
            warning: bool
          }).isRequired
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
    }).isRequired,

    scanScreenProps: shape({
      checkProps: shape({
        checkList: arrayOf(
          shape({
            id: string.isRequired,
            content: string.isRequired,
            checkState: string.isRequired,
            needRecord: bool
          }).isRequired
        ).isRequired
      }).isRequired
    }).isRequired,

    notificationScreenProps: shape({
      notificationListProps: shape({
        notices: arrayOf(
          shape({
            id: string.isRequired,
            content: string.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    }).isRequired,

    meScreenProps: shape({
      meDetailProps: shape({
        userInfo: shape({
          name: string,
          email: string.isRequired,
          completeNum: string,
          incompleteNum: string,
          overDueNum: string
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const App = () => <MainScreenNavigator screenProps={screenProps} />;

export default App;
