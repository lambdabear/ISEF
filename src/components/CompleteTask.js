import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';

const CompleteTask = ({ title, startTime, endTime }) =>
  <ListItem icon>
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

export default CompleteTask;
