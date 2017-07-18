import React from 'react';
import { Container, Header } from 'native-base';
import { func, arrayOf, shape, string, bool } from 'prop-types';

import screenStyles from '../screenStyles';
import TaskList from '../../components/TaskList';

class TaskListScreen extends React.Component {
  static navigationOptions = {
    title: '任务',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    navigation: shape({
      navigate: func.isRequired
    }).isRequired,
    screenProps: shape({
      homeScreenProps: shape({
        taskListProps: shape({
          incompleteTasks: arrayOf(
            shape({
              id: string.isRequired,
              title: string.isRequired,
              startTime: string,
              endTime: string,
              warning: bool
            })
          ).isRequired,
          completeTasks: arrayOf(
            shape({
              id: string.isRequired,
              title: string.isRequired,
              startTime: string,
              endTime: string,
              warning: bool
            })
          ).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    const {
      incompleteTasks,
      completeTasks
    } = this.props.screenProps.homeScreenProps.taskListProps;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header androidStatusBarColor="steelblue" style={{ display: 'none' }} />
        <TaskList
          navigate={navigate}
          incompleteTasks={incompleteTasks}
          completeTasks={completeTasks}
        />
      </Container>
    );
  }
}

export default TaskListScreen;
