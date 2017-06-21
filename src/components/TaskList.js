import React from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { arrayOf, shape, string, func } from 'prop-types';

import IncompleteTask from './IncompleteTask';
import CompleteTask from './CompleteTask';

const TaskList = ({ inCompleteTasks, completeTasks, navigate }) =>
  <Container>
    <Content>
      <ListItem itemHeader first style={{ paddingBottom: 0 }}>
        <Text>未完成任务</Text>
      </ListItem>
      {inCompleteTasks.map(task =>
        <IncompleteTask
          title={task.title}
          startTime={task.startTime}
          endTime={task.endTime}
          navigate={navigate}
          key={task.id}
        />
      )}
      <ListItem itemHeader style={{ paddingBottom: 0 }}>
        <Text>已完成任务</Text>
      </ListItem>
      {completeTasks.map(task =>
        <CompleteTask
          title={task.title}
          startTime={task.startTime}
          endTime={task.endTime}
          navigate={navigate}
          key={task.id}
        />
      )}
    </Content>
  </Container>;

TaskList.propTypes = {
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
  ).isRequired,
  navigate: func.isRequired
};

export default TaskList;
