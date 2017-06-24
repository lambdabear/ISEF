import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import screenStyles from '../screenStyles';
import NotificationList from '../../components/NotificationList';

class NotificationListScreen extends React.Component {
  static navigationOptions = {
    title: '通知',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({
      notificationScreenProps: shape({
        notificationListProps: shape({
          notices: arrayOf(
            shape({
              id: string.isRequired,
              content: string.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    return (
      <NotificationList
        notifications={
          this.props.screenProps.notificationScreenProps.notificationListProps
            .notices
        }
      />
    );
  }
}

export default NotificationListScreen;
