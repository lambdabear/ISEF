import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { string, func } from 'prop-types';

const CompleteTask = ({ title, startTime, endTime, navigate }) =>
  <ListItem
    icon
    onPress={() => {
      navigate('HomeTaskDetails');
      // dispatch redux action
    }}
  >
    <Left>
      <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
    </Left>
    <Body>
      <Text>{title}</Text>
      <Text style={{ fontSize: 9, color: 'grey' }}>
        {startTime} - {endTime}
      </Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>;

CompleteTask.propTypes = {
  title: string.isRequired,
  startTime: string,
  endTime: string,
  navigate: func.isRequired
};

CompleteTask.defaultProps = {
  startTime: '',
  endTime: '',
  warnning: false
};

export default CompleteTask;
