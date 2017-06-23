import React from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { arrayOf, shape, string, func, bool } from 'prop-types';

import IncompleteTask from './IncompleteTask';
import CompleteTask from './CompleteTask';

const TaskList = ({ incompleteTasks, completeTasks, navigate }) =>
  <Container>
    <Content>
      <ListItem itemHeader first style={{ paddingBottom: 0 }}>
        <Text>未完成任务</Text>
      </ListItem>
      {incompleteTasks.map(task =>
        <IncompleteTask
          title={task.title}
          startTime={task.startTime}
          endTime={task.endTime}
          navigate={navigate}
          key={task.id}
          warning={task.warning}
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
          warning={task.warning}
        />
      )}
    </Content>
  </Container>;

TaskList.propTypes = {
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
  ).isRequired,
  navigate: func.isRequired
};

export default TaskList;
