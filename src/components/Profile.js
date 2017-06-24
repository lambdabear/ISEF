import React from 'react';
import { Card, CardItem, Left, Icon, Body, Text, Button } from 'native-base';
import { string, shape } from 'prop-types';

const Profile = ({ userInfo }) =>
  <Card>
    <CardItem>
      <Left>
        <Icon name="person" />
        <Body>
          <Text>{userInfo.name}</Text>
          <Text note>{userInfo.email}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Button transparent>
        <Icon active name="checkmark-circle" style={{ color: 'green' }} />
        <Text>{userInfo.completeNum}</Text>
      </Button>
      <Button transparent>
        <Icon active name="stopwatch" style={{ color: 'orange' }} />
        <Text>{userInfo.incompleteNum}</Text>
      </Button>
      <Button transparent>
        <Icon active name="sad" style={{ color: 'red' }} />
        <Text>{userInfo.overDueNum}</Text>
      </Button>
    </CardItem>
  </Card>;

Profile.propTypes = {
  userInfo: shape({
    name: string,
    email: string.isRequired,
    completeNum: string,
    incompleteNum: string,
    overDueNum: string
  }).isRequired
};

export default Profile;
