import React from 'react';
import { Container } from 'native-base';
import { string, shape, arrayOf, bool } from 'prop-types';

import screenStyles from '../screenStyles';
import TaskDetails from '../../components/TaskDetails';

class TaskScreen extends React.Component {
  static navigationOptions = {
    title: '任务详情',
    headerStyle: screenStyles.headerStyle,
    headerTitleStyle: screenStyles.headerTitleStyle
  };

  static propTypes = {
    screenProps: shape({
      homeScreenProps: shape({
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
                checked: bool.isRequired
              }).isRequired
            ).isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    const {
      title,
      startTime,
      endTime,
      note,
      facilities,
      warning
    } = this.props.screenProps.homeScreenProps.taskDetailsProps.task;
    return (
      <Container>
        <TaskDetails
          title={title}
          startTime={startTime}
          endTime={endTime}
          note={note}
          facilities={facilities}
          warning={warning}
        />
      </Container>
    );
  }
}

export default TaskScreen;
