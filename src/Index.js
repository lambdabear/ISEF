import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { arrayOf, shape, string, bool, func } from 'prop-types';

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
            needRecord: bool.isRequired,
            record: string.isRequired,
            needPhoto: bool.isRequired
          }).isRequired
        ).isRequired
      }).isRequired,
      checkRecordProps: shape({
        id: string.isRequired,
        record: string.isRequired
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
    }).isRequired,

    currentRouteName: string.isRequired
  }).isRequired,

  onNavigationStateChange: func.isRequired
};

const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

// const App = () => <MainScreenNavigator screenProps={screenProps} />;
class App extends React.Component {
  state = {
    currentRouteName: 'HomeTaskList'
  };

  setCurrentRouteName = (prevState, currentState) => {
    const currentScreen = getCurrentRouteName(currentState);
    this.setState({ currentRouteName: currentScreen });
  };

  render() {
    return (
      <MainScreenNavigator
        screenProps={{
          ...screenProps,
          currentRouteName: this.state.currentRouteName
        }}
        onNavigationStateChange={this.setCurrentRouteName}
      />
    );
  }
}

export default App;
