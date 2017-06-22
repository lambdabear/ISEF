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

import FacilityList from './FacilityList';

const facilities = [
  { id: 'f20150031', name: '节能大厦1层31灭火器', checked: true },
  { id: 'f20150032', name: '节能大厦1层32灭火器', checked: false },
  { id: 'f20150034', name: '节能大厦1层34灭火器', checked: false },
  { id: 'f20150035', name: '节能大厦1层35灭火器', checked: false },
  { id: 'f20150036', name: '节能大厦1层36灭火器', checked: false },
  { id: 'f20150037', name: '节能大厦1层37灭火器', checked: false },
  { id: 'f20150038', name: '节能大厦1层38灭火器', checked: false },
  { id: 'f20150033', name: '节能大厦1层33灭火器', checked: true }
];

const TaskDetails = () =>
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-clipboard-outline" />
            <Body>
              <Text>
                成都国际科技节能大厦例行巡检
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Icon name="ios-clock-outline" />
            <Body>
              <Text>开始时间</Text>
              <Text note>6月14日</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Text>截止时间</Text>
              <Text note>6月17日</Text>
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
                相关注意事项
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

export default TaskDetails;
