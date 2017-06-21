import React from 'react';
import { Container } from 'native-base';
import { object, arrayOf, shape, string } from 'prop-types';

import styles from '../styles';
import TaskList from '../../components/TaskList';

// const tasks = [
//   { id: 'task20170607001', title: '酒店巡检', startTime: '6月7日', endTime: '7月3日' },
//   { id: 'task20170607002', title: '酒店巡检', startTime: '6月7日', endTime: '7月3日' }
// ];

class TaskListScreen extends React.Component {
  static navigationOptions = {
    title: '消防设施巡检系统',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle
  };

  static propTypes = {
    navigation: object.isRequired,
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
  };

  render() {
    const { navigation, inCompleteTasks, completeTasks } = this.props;
    return (
      <Container>
        <TaskList
          navigate={navigation}
          inCompleteTasks={inCompleteTasks}
          completeTasks={completeTasks}
        />
      </Container>
    );
  }
}

export default TaskListScreen;
