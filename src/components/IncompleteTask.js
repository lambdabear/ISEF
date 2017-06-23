import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { string, bool, func } from 'prop-types';

const IncompleteTask = ({ title, startTime, endTime, warning, navigate }) =>
  <ListItem
    icon
    onPress={() => {
      navigate('HomeTaskDetails');
      // dispatch redux action
    }}
  >
    <Left>
      <Icon name="ios-timer-outline" style={{ color: 'red' }} />
    </Left>
    <Body>
      <Text>{title}</Text>
      <Text
        style={
          warning
            ? { fontSize: 9, color: 'red' }
            : { fontSize: 9, color: 'green' }
        }
      >
        {startTime} - {endTime}
      </Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>;

IncompleteTask.propTypes = {
  title: string.isRequired,
  startTime: string,
  endTime: string,
  warning: bool,
  navigate: func.isRequired
};

IncompleteTask.defaultProps = {
  startTime: '',
  endTime: '',
  warning: false
};

export default IncompleteTask;
