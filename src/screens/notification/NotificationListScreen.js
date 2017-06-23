import React from 'react';

import styles from '../styles';
import NotificationList from '../../components/NotificationList';

const notes = [
  { id: 'note2017050300001', content: '培训通知' },
  { id: 'note2017050500001', content: '放假通知' }
];

class NotificationListScreen extends React.Component {
  static navigationOptions = {
    title: '通知',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  render() {
    return <NotificationList notifications={notes} />;
  }
}

export default NotificationListScreen;
