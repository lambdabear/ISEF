import React from 'react';
import { Container, Content } from 'native-base';
import { arrayOf, shape, string } from 'prop-types';

import Notification from './Notification';

const NotificationList = ({ notifications }) =>
  <Container>
    <Content>
      {notifications.map(note =>
        <Notification content={note.content} key={note.id} />
      )}
    </Content>
  </Container>;

NotificationList.propTypes = {
  notifications: arrayOf(
    shape({
      id: string,
      content: string
    })
  ).isRequired
};

export default NotificationList;
