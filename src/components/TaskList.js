import React from 'react';
import {
  Container,
  Content,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';

const TaskList = () =>
  <Container>
    <Content>
      <ListItem itemHeader first style={{ paddingBottom: 0 }}>
        <Text>未完成任务</Text>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-timer-outline" style={{ color: 'red' }} />
        </Left>
        <Body>
          <Text>酒店一层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-timer-outline" style={{ color: 'red' }} />
        </Left>
        <Body>
          <Text>酒店二层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-timer-outline" style={{ color: 'red' }} />
        </Left>
        <Body>
          <Text>酒店三层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem itemHeader style={{ paddingBottom: 0 }}>
        <Text>已完成任务</Text>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店三层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店一层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店二层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店三层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店一层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店二层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="ios-checkmark-outline" style={{ color: 'green' }} />
        </Left>
        <Body>
          <Text>酒店三层灭火器巡检</Text>
        </Body>
        <Right>
          <Text>截止时间</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </Content>
  </Container>;

export default TaskList;
