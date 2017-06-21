import React from 'react';
import { Container } from 'native-base';

import styles from '../styles';
import TaskDetails from '../../components/TaskDetails';

class TaskScreen extends React.Component {
  static navigationOptions = {
    title: '任务详情',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  render() {
    return (
      <Container>
        <TaskDetails />
      </Container>
    );
  }
}

export default TaskScreen;
