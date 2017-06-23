import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Body,
  Text
} from 'native-base';
import { string, shape, arrayOf, bool } from 'prop-types';

import FacilityList from './FacilityList';

const TaskDetails = ({
  title,
  startTime,
  endTime,
  note,
  facilities,
  warning
}) =>
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-clipboard-outline" />
            <Body>
              <Text>
                {title}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Icon name="ios-clock-outline" />
            <Body>
              <Text>开始时间</Text>
              <Text note>{startTime}</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Text>截止时间</Text>
              <Text note style={warning ? { color: 'red' } : { color: 'grey' }}>
                {endTime}
              </Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Icon name="ios-attach" />
            <Body>
              <Text>
                备注
              </Text>
              <Text note>
                {note}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
      <List>
        <ListItem itemHeader first style={{ paddingBottom: 0 }}>
          <Left>
            <Icon name="ios-pint-outline" />
          </Left>
          <Text>
            设施列表
          </Text>
        </ListItem>
        <FacilityList facilities={facilities} />
      </List>
    </Content>
  </Container>;

TaskDetails.propTypes = {
  title: string.isRequired,
  startTime: string.isRequired,
  endTime: string.isRequired,
  note: string.isRequired,
  warning: bool,
  facilities: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      checked: bool.isRequired
    }).isRequired
  ).isRequired
};

TaskDetails.defaultProps = {
  warning: false
};

export default TaskDetails;
