import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';

const IncompleteTask = ({ title, startTime, endTime, warnning, navigate }) =>
  <ListItem icon onPress={() => navigate('HomeTaskDetails')}>
    <Left>
      <Icon name="ios-timer-outline" style={{ color: 'red' }} />
    </Left>
    <Body>
      <Text>{title}</Text>
      <Text
        style={
          warnning
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

export default IncompleteTask;
