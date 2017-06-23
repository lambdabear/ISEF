import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { string, func, bool } from 'prop-types';

const CompleteTask = ({ title, startTime, endTime, navigate, warning }) =>
  <ListItem
    icon
    onPress={() => {
      navigate('HomeTaskDetails');
      // to do: dispatch redux action for take correct data for taskDetailsProps
    }}
  >
    <Left>
      <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
    </Left>
    <Body>
      <Text>{title}</Text>
      <Text
        style={
          warning
            ? { fontSize: 9, color: 'red' }
            : { fontSize: 9, color: 'grey' }
        }
      >
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
  navigate: func.isRequired,
  warning: bool
};

CompleteTask.defaultProps = {
  startTime: '',
  endTime: '',
  warning: false
};

export default CompleteTask;
