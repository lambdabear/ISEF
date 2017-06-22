import React from 'react';
import { Container } from 'native-base';
import { func, arrayOf, shape, string } from 'prop-types';

import styles from '../styles';
import TaskList from '../../components/TaskList';

class TaskListScreen extends React.Component {
  static navigationOptions = {
    title: '消防设施巡检系统',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired,
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

  render() {
    const { inCompleteTasks, completeTasks } = this.props.screenProps;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <TaskList
          navigate={navigate}
          inCompleteTasks={inCompleteTasks}
          completeTasks={completeTasks}
        />
      </Container>
    );
  }
}

export default TaskListScreen;
