import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { string } from 'prop-types';

const Notification = ({ content = '' }) =>
  <Card>
    <CardItem>
      <Body>
        <Text>
          {content}
        </Text>
      </Body>
    </CardItem>
  </Card>;

Notification.propTypes = {
  content: string
};

Notification.defaultProps = {
  content: ''
};

export default Notification;
