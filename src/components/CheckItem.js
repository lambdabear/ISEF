import React from 'react';
import {
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Body,
  Text,
  CheckBox,
  Content
} from 'native-base';
import { string, bool, func } from 'prop-types';

const CheckItem = ({
  id,
  content,
  checkState,
  needRecord,
  record,
  needPhoto,
  navigate
}) =>
  <Content>
    <Card>
      <CardItem>
        <Left>
          <Icon name="ios-clipboard-outline" />
          <Body>
            <Text>
              {content}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Icon
            name="ios-camera-outline"
            style={needPhoto ? { color: 'orange' } : { color: 'grey' }}
            onPress={() => {
              navigate('Camera');
            }}
          />
          <Text style={{ color: 'green' }}>合格</Text>
          <CheckBox
            color="green"
            checked={checkState === 'qualified'}
            onPress={() => {
              // Todo, dispatch an action to change
              // the checkState with id to 'qualified';
            }}
          />
          <Text style={{ color: 'red' }}>
            {'    '}不合格
          </Text>
          <CheckBox
            color="red"
            checked={checkState === 'unqualified'}
            onPress={() => {
              // Todo, dispatch an action to change
              // the checkState with id to 'unqualified';
            }}
          />
        </Left>
        <Right>
          <Icon
            name="create"
            style={needRecord ? { color: 'orange' } : { color: 'grey' }}
            onPress={() => {
              navigate('CheckRecord');
            }}
          />
        </Right>
      </CardItem>
      {record !== '' &&
        <CardItem>
          <Text style={{ color: 'orange' }}>检测记录：</Text>
          <Text style={{ color: 'grey' }}>
            {record}
          </Text>
        </CardItem>}
    </Card>
  </Content>;

CheckItem.propTypes = {
  id: string.isRequired,
  content: string.isRequired,
  checkState: string.isRequired,
  needRecord: bool.isRequired,
  record: string.isRequired,
  needPhoto: bool.isRequired,
  navigate: func.isRequired
};

export default CheckItem;
